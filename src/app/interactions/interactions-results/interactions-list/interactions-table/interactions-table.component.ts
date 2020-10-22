import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import * as $ from 'jquery';
import 'datatables.net';
import {environment} from '../../../../../environments/environment';
import {extractCVValue, extractIds} from "../../../../shared/utils/string-utils";
import {ResultTableFactoryService} from "../../../shared/service/result-table-factory.service";
import {InteractionTable} from "../../../shared/model/tables/interaction-table.model";
import {Column} from "../../../shared/model/tables/column.model";


const baseURL = environment.intact_portal_ws;
const ebiURL = environment.ebi_url;

@Component({
  selector: 'ip-interactions-table',
  templateUrl: './interactions-table.component.html',
  styleUrls: ['./interactions-table.component.css']
})
export class InteractionsTableComponent implements OnInit, OnChanges, AfterViewInit {

  @Output() interactionChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  @Input() interactionTab: boolean;

  private _terms: string;
  private _batchSearchFilter: boolean;
  private _interactorSpeciesFilter: string[];
  private _interactorTypeFilter: string[];
  private _detectionMethodFilter: string[];
  private _interactionTypeFilter: string[];
  private _hostOrganismFilter: string[];
  private _negativeFilter: boolean;
  private _miScoreMin: any;
  private _miScoreMax: any;
  private _intraSpeciesFilter: boolean;
  private _interactionSelected: string;
  dataTable: any;

  columnView = 'interactions_columnView';

  private showMoreSelected = false;
  private _columns = new InteractionTable();
  private _aliasesType: string[] = [
    'gene name',
    'gene name synonym',
    'isoform synonym',
    'author assigned name',
    'locus name',
    'orf name',
    'complex systematic name',
    'commercial name',
    'iupac name',
    'drug brand name',
    'drug mixture brand name'
  ];

  private _annotationsTypes: string[] = [
    'figure legend',
    'comment',
    'caution'
  ];
  private binaryInteractionIds: number[] = [];
  private interactorAcs: string[] = [];

  constructor(private route: ActivatedRoute, private resultTableFactory: ResultTableFactoryService) {
  }

  ngOnInit(): void {
    this.route.queryParams.filter(params => params.query)
      .subscribe(params => {
        this.terms = params.query;
        this.batchSearchFilter = params.batchSearch ? params.batchSearch : false;
        this.interactorTypeFilter = params.interactorType ? params.interactorType.split('+') : [];
        this.interactorSpeciesFilter = params.interactorSpecies ? params.interactorSpecies.split('+') : [];
        this.interactionDetectionMethodFilter = params.interactionDetectionMethod ? params.interactionDetectionMethod.split('+') : [];
        this.interactionTypeFilter = params.interactionType ? params.interactionType.split('+') : [];
        this.interactionHostOrganismFilter = params.interactionHostOrganism ? params.interactionHostOrganism.split('+') : [];
        this.negativeFilter = params.negativeInteraction ? params.negativeInteraction : false;
        this.miScoreMax = params.miScoreMax ? params.miScoreMax : 1;
        this.miScoreMin = params.miScoreMin ? params.miScoreMin : 0;
        this.intraSpeciesFilter = params.intraSpecies ? params.intraSpecies : false;

        if (this.dataTable !== undefined) {
          // tslint:disable-next-line:no-shadowed-variable
          const table: any = $('#interactionsTable');
          this.dataTable = table.DataTable().ajax.reload();
        }
      });

    document.addEventListener('graph-interaction-selected', (e: any) => {
      this.binaryInteractionIds = e.detail.interactionIds();
      this.interactorAcs = []
      this.dataTable.ajax.reload();
    });
    document.addEventListener('graph-interactor-selected', (e: any) => {
      this.binaryInteractionIds = [];
      this.interactorAcs = [e.detail.interactorId()];
      this.dataTable.ajax.reload();
    });
    document.addEventListener('graph-unselected', () => {
      this.binaryInteractionIds = [];
      this.interactorAcs = []
      this.dataTable.ajax.reload();
    });

    this.initDataTable();
    // this.initScrollbars();
    this.resultTableFactory.initTopSlider('interactionsTable');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.interactionTab.currentValue) {

      // This fixes the alignment between the th and td when we have activated scrollX:true
      const table: any = $('#interactionsTable');
      this.dataTable = table.DataTable().columns.adjust().draw();
    }
  }

  ngAfterViewInit(): void {
    let interactionsTable = $('#interactionsTable');
    let selectedInteractions = $(`#${this.interactionSelected}:checkbox`);
    interactionsTable.on('change', 'input[type=\'checkbox\']', (e) => {
      const table: any = interactionsTable;
      const interactionSel = e.currentTarget.id;

      if (this.interactionSelected !== interactionSel) {
        selectedInteractions.prop('checked', false);
        selectedInteractions.closest('tr').removeClass('rowSelected');

        this.interactionSelected = interactionSel;
        selectedInteractions.prop('checked', true);
        selectedInteractions.closest('tr').addClass('rowSelected');

        const interactionSelectedEvent = new CustomEvent('tableInteractionSelected', {
          bubbles: true,
          detail: {
            interactionId: this.interactionSelected

          }
        });
        document.dispatchEvent(interactionSelectedEvent);

      } else {
        // None is selected, remove class
        this.interactionSelected = undefined;
        $(table.dataTableSettings).each(function () {
          $(this.aoData).each(function () {
            $(this.nTr).removeClass('rowSelected');
          })
        });

        const tableUnselectEvent = new CustomEvent('tableUnselected', {
          bubbles: true,
        });
        document.dispatchEvent(tableUnselectEvent);
      }
    });


    // When table redrawn keep row selection synchronization between tables
    interactionsTable.on('draw.dt', function () {
      if (this.interactionSelected !== undefined) {
        selectedInteractions.prop('checked', true);
        selectedInteractions.closest('tr').addClass('rowSelected');
        const interactionSelectedEvent = new CustomEvent('tableInteractionSelected', {
          bubbles: true,
          detail: {
            interactionId: this.interactionSelected
          }
        });

        document.dispatchEvent(interactionSelectedEvent);
      }
    }.bind(this));


    let tableBody = $('#interactionsTable tbody');
    tableBody.on('click', 'button.showMore', function () {
      const table: any = interactionsTable;
      const interactionsT = table.DataTable();

      const rowIndex = $(this).parents('tr');
      const row = interactionsT.row(rowIndex).node();
      const col = $(`#${this.id}`).data('col');

      $(this).parents('td').html(interactionsT.cell(row, col).render('more'));
    });

    tableBody.on('click', 'button.showLess', function () {
      const table: any = interactionsTable;
      const interactionsT = table.DataTable();

      const rowIndex = $(this).parents('tr');
      const row = interactionsT.row(rowIndex).node();
      const col = $('#' + this.id).data('col');

      interactionsT.cell(row, col).render('less');
      $(this).parents('td').html(interactionsT.cell(row, col).render('less'))
    });
  }

  scrolling = false;

  private initScrollbars() {
    let topScroll = $('#interactionTableTopScroll');
    if (topScroll.length === 0) {
      topScroll = $('<div id="interactionTableTopScroll"><div id="interactionsTableWidthMimic"></div></div>');
      topScroll.find('#interactionsTableWidthMimic').height(1);
      topScroll.css('overflow-x', 'auto')
      topScroll.css('overflow-y', 'hidden')
      topScroll.insertBefore($('div.dataTables_scrollHead'));
    }
    let bodyScroll = $('.dataTables_scrollBody');

    topScroll.scroll(function () {
      if (!this.scrolling) {
        this.scrolling = true;
        bodyScroll.scrollLeft(topScroll.scrollLeft())
      } else {
        this.scrolling = false;
      }
    }.bind(this));

    // Synchronise scrolling
    bodyScroll.scroll(function () {
      if (!this.scrolling) {
        this.scrolling = true;
        topScroll.scrollLeft(bodyScroll.scrollLeft());
      } else {
        this.scrolling = false;
      }
    }.bind(this));
  }

  updateTable() {
    const table: any = $('#interactionsTable');
    this.dataTable = table.DataTable().columns.adjust().draw();
  }

  private initDataTable(): void {
    const table: any = $('#interactionsTable');
    this.dataTable = table.DataTable({
      bSort: false,
      searching: false,
      paging: true,
      lengthMenu: [25, 50, 75, 100, 150, 200, 500],
      pageLength: 25,
      pagingType: 'numbers',
      processing: true,
      serverSide: true,
      dom: '<"top"filp>rt<"bottom"ifp>',
      scrollX: true,
      fixedHeader: false,
      ajax: {
        url: `${baseURL}/interaction/list/`,
        type: 'POST',
        data: function (d) {
          d.page = d.start / d.length;
          d.pageSize = d.length;
          d.query = this.terms;
          d.batchSearch = this.batchSearchFilter;
          d.interactorSpecies = this.interactorSpeciesFilter;
          d.interactorType = this.interactorTypeFilter;
          d.interactionDetectionMethod = this.interactionDetectionMethodFilter;
          d.interactionType = this.interactionTypeFilter;
          d.interactionHostOrganism = this.interactionHostOrganismFilter;
          d.negativeInteraction = this.negativeFilter;
          d.miScoreMin = this.miScoreMin;
          d.miScoreMax = this.miScoreMax;
          d.intraSpecies = this.intraSpeciesFilter;
          d.binaryInteractionId = this.binaryInteractionIds;
          d.interactorAc = this.interactorAcs;
        }.bind(this)
      },
      columns: [
        {
          data: this._columns.id.key,
          title: this._columns.id.name,
          render: function (data, type, full, meta) {
            if (type === 'display') {
              return `<div>
                        <input type="checkbox" id="${full.binaryInteractionId}" name="check" value="${data}"/>
                        <span class="margin-left-medium">
                          <a href="/intact-portal-view/details/interaction/${full.ac}" class="icon-link tool-tip" target="_blank">
                            <i class="icon icon-common icon-search-document"></i>
                            <span class="tool-tip-text">Show details of <span class="nowrap">${full.ac}</span></span>
                          </a>
                        </span>
                      </div>`;
            }
            return data;
          }
        },
        {
          data: this._columns.moleculeA.key,
          title: this._columns.moleculeA.name
        },
        {
          data: this._columns.moleculeB.key,
          title: this._columns.moleculeB.name
        },
        {
          data: this._columns.identifierA.key,
          defaultContent: '',
          title: this._columns.identifierA.name,
          render: function (data, type) {
            if (type === 'display' && data !== null) {
              return this.resultTableFactory.getInteractorLink(extractIds(data))
            }
            return data
          }.bind(this)
        },
        {
          data: this._columns.identifierB.key,
          defaultContent: '',
          title: this._columns.identifierB.name,
          render: function (data, type) {
            if (type === 'display' && data !== null) {
              return this.resultTableFactory.getInteractorLink(extractIds(data))
            }
            return data
          }.bind(this)
        },
        {
          data: this._columns.typeA.key,
          title: this._columns.typeA.name,
          render: this.resultTableFactory.cvRender('typeMIA')
        },
        {
          data: this._columns.typeB.key,
          title: this._columns.typeB.name,
          render: this.resultTableFactory.cvRender('typeMIB')
        },
        {
          data: this._columns.speciesA.key,
          title: this._columns.speciesA.name,
          render: this.resultTableFactory.speciesRender('taxIdA')
        },
        {
          data: this._columns.speciesB.key,
          title: this._columns.speciesB.name,
          render: this.resultTableFactory.speciesRender('taxIdB')
        },
        {
          data: this._columns.hostOrganism.key,
          title: this._columns.hostOrganism.name
        },
        {
          data: this._columns.detectionMethod.key,
          title: this._columns.detectionMethod.name,
          render: this.resultTableFactory.cvRender('detectionMethodMIIdentifier')
        },
        {
          data: this._columns.publicationIdentifiers.key,
          title: this._columns.publicationIdentifiers.name,
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                const data_s = d.split('(');
                const publicationId = data_s[0].trim();
                const publicationSource = data_s[1].slice(0, -1);

                let url = '';
                if (publicationSource === 'pubmed') {
                  url = 'https://europepmc.org/article/MED/' + publicationId;
                } else if (publicationSource === 'imex') {
                  url = ebiURL + '/intact/imex/main.xhtml?query=' + publicationId;
                } else if (publicationSource === 'doi') {
                  url = 'https://www.doi.org/' + publicationId;
                }

                return `<div><span class="detailsCell">
                            ${url !== '' ? `<a href="${url}" target="_blank">${publicationId}</a>` : publicationId}
                        </span></div>`;
              }).join('');
            }
          }
        },
        {
          data: this._columns.type.key,
          title: this._columns.type.name,
          render: this.resultTableFactory.cvRender('typeMIIdentifier')
        },
        {
          data: this._columns.ac.key,
          title: this._columns.ac.name,
          render: function (data, type, row, meta) {
            if (type === 'display' && data != null) {
              return '<div>' +
                '<span><a href="/intact-portal-view/details/interaction/' + data + '" style="white-space: nowrap">' + data + '</a></span>' +
                '</div>';
            }
          }
        },
        {
          data: this._columns.database.key,
          title: this._columns.database.name
        },
        {
          data: this._columns.confidenceValue.key,
          title: this._columns.confidenceValue.name,
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                if (!d.includes('intact-miscore')) return `<div><span class="detailsConfidencesCell">${d}</span></div>`
                const YELLOW_ORANGE_BROWN_PALETTE: string[] = [
                  'rgb(255,255,229)',
                  'rgb(255,247,188)',
                  'rgb(254,227,145)',
                  'rgb(254,196,79)',
                  'rgb(254,153,41)',
                  'rgb(236,112,20)',
                  'rgb(204,76,2)',
                  'rgb(153,52,4)',
                  'rgb(102,19,5)',
                  'rgb(54, 19, 3)'
                ];

                const YELLOW_ORANGE_BROWN_PALETTE_TEXT: string[] = [
                  'rgb(254,153,41)',
                  'rgb(254,153,41)',
                  'rgb(254,153,41)',
                  'rgb(254,153,41)',
                  'rgb(254,153,41)',
                  'rgb(236,112,20)',
                  'rgb(204,76,2)',
                  'rgb(153,52,4)',
                  'rgb(102,19,5)',
                  'rgb(54, 19, 3)'
                ];

                const YELLOW_ORANGE_BROWN_PALETTE_BG: string[] = [
                  'rgba(255,255,229,0.1)',
                  'rgba(255,247,188,0.1)',
                  'rgba(254,227,145,0.1)',
                  'rgba(254,196,79,0.1)',
                  'rgba(254,153,41,0.1)',
                  'rgba(236,112,20,0.1)',
                  'rgba(204,76,2,0.1)',
                  'rgba(153,52,4,0.1)',
                  'rgba(102,19,5,0.1)',
                  'rgba(54, 19,3,0.1)'
                ];

                const score = d.split(':');
                const paletteIndex = Math.floor(score[1] * 10);

                // noinspection CssInvalidPropertyValue
                return `<div>
                          <a class="detailsConfidencesCell table-list" target="_blank"
                          href="${environment.ebi_base_url}/intact-portal-view/documentation/docs#interaction_scoring"
                          style="background-color:${YELLOW_ORANGE_BROWN_PALETTE_BG[paletteIndex]};
                                 border:2px solid ${YELLOW_ORANGE_BROWN_PALETTE[paletteIndex]};
                                 color: ${YELLOW_ORANGE_BROWN_PALETTE_TEXT[paletteIndex]}">
                            ${d.replace('intact-miscore', 'MI Score')}
                          </a>
                        </div>`;
              }).join('');
            }
          }.bind(this)
        },
        {
          data: this._columns.expansionMethod.key,
          title: this._columns.expansionMethod.name,
          defaultContent: ' ',
          render: function (data, type, row, meta) {
            if (type === 'display' && data != null) {
              return `<div><a target="_blank" href="${environment.ebi_base_url}/intact-portal-view/documentation/docs#expansion_method" class="detailsExpansionsCell">${data}</a></div>`;
            }
          }
        },
        {
          data: this._columns.experimentalRoleA.key,
          title: this._columns.experimentalRoleA.name,
          defaultContent: ' ',
          render: this.resultTableFactory.cvRender('experimentalRoleMIIdentifierA')
        },
        {
          data: this._columns.experimentalRoleB.key,
          title: this._columns.experimentalRoleB.name,
          defaultContent: ' ',
          render: this.resultTableFactory.cvRender('experimentalRoleMIIdentifierB')
        },
        {
          data: this._columns.biologicalRoleA.key,
          title: this._columns.biologicalRoleA.name,
          defaultContent: ' ',
          render: this.resultTableFactory.cvRender('biologicalRoleMIIdentifierA')
        },
        {
          data: this._columns.biologicalRoleB.key,
          title: this._columns.biologicalRoleB.name,
          defaultContent: ' ',
          render: this.resultTableFactory.cvRender('biologicalRoleMIIdentifierB')
        },
        {
          data: this._columns.aliasesA.key,
          title: this._columns.aliasesA.name,
          defaultContent: ' ',
          render: function (data, type, row, meta) {
            if (data == null) return;
            const res = this.resultTableFactory.createRenderingButton(data, type, row, meta)
            const items = $.map(res.data, function (d, i) {
              // Anaplastic lymphoma kinase (MI:0302 (gene name synonym))
              const alias = extractCVValue(d);
              return `<div class="aliasesCell table-list">

                          <a class="detailsAliasesCell" target="_blank"
                             href="${ebiURL}/ols/ontologies/mi/terms?obo_id=${alias.type.identifier}">
                            ${alias.type.shortName}
                          </a>

                        <span>${alias.value}</span>
                      </div>`;
            }.bind(this)).join('');
            let html = '<div class="annotationsList">'.concat(items).concat('</div>');
            return res.addButton ? html.concat(res.button) : html;
          }.bind(this)
        },
        {
          data: this._columns.aliasesB.key,
          title: this._columns.aliasesB.name,
          defaultContent: ' ',
          render: function (data, type, row, meta) {
            if (data == null) return;
            const res = this.resultTableFactory.createRenderingButton(data, type, row, meta)
            const items = $.map(res.data, function (d, i) {
              // Anaplastic lymphoma kinase (MI:0302 (gene name synonym))
              const alias = extractCVValue(d);
              return `<div class="aliasesCell table-list">

                        <a class="detailsAliasesCell" target="_blank"
                           href="${ebiURL}/ols/ontologies/mi/terms?obo_id=${alias.type.identifier}">
                          ${alias.type.shortName}
                        </a>

                        <span>${alias.value}</span>
                      </div>`;
            }.bind(this)).join('');
            let html = '<div class="annotationsList">'.concat(items).concat('</div>');
            return res.addButton ? html.concat(res.button) : html;
          }.bind(this)
        },
        {
          data: this._columns.featureCount.key,
          title: this._columns.featureCount.name,
          render: function (data, type, row, meta) {
            if (type === 'display' && data != null) {
              return '<div class="alignCell">' +
                '<span>' + data + '</span>' +
                '</div>';
            }
          }
        },
        {
          data: this._columns.parameters.key,
          title: this._columns.parameters.name,
          defaultContent: ' ',
          render: function (data, type, row, meta) {
            if (type === 'display' && data != null) {
              return '<div class="parametersCell">' +
                '<span>' + data + '</span>' +
                '</div>';
            }
          }
        },
        {
          data: this._columns.annotationsA.key,
          title: this._columns.annotationsA.name,
          defaultContent: ' ',
          render: function (data, type, row, meta) {
            if (data == null) return;
            const res = this.resultTableFactory.createRenderingButton(data, type, row, meta)
            const items = $.map(res.data, function (d, i) {
              // figure legend (Supp fig 5Ii)
              const data_s = d.split('(');
              const annotationType = data_s[0].trim();
              const description = data_s[1].slice(0, -1);
              let cellClass = annotationType === 'comment' ? 'detailsCommentsCell' : 'detailsAllCell';
              return `<div class="annotationCell table-list">
                        <span class="${cellClass}">${annotationType}</span>
                        <div class="detailsCell annotationCellWidth">
                          ${description}
                        </div>
                      </div>`;
            }.bind(this)).join('');

            let html = '<div class="annotationsList">'.concat(items).concat('</div>');
            return res.addButton ? html.concat(res.button) : html;
          }.bind(this)
        },
        {
          data: this._columns.annotationsB.key,
          title: this._columns.annotationsB.name,
          defaultContent: ' ',
          render: function (data, type, row, meta) {
            if (data == null) return;
            const res = this.resultTableFactory.createRenderingButton(data, type, row, meta)
            const items = $.map(res.data, function (d, i) {
              // figure legend (Supp fig 5Ii)
              const data_s = d.split('(');
              const annotationType = data_s[0].trim();
              const description = data_s[1].slice(0, -1);

              let cellClass = annotationType === 'comment' ? 'detailsCommentsCell' : 'detailsAllCell';
              return `<div class="annotationCell table-list">
                        <div style="float:left; margin-right: 4px;">
                          <span class="${cellClass}">${annotationType}</span>
                        </div>
                        <div class="detailsCell annotationCellWidth">
                          ${description}
                        </div>
                      </div>`;
            }.bind(this)).join('');

            let html = '<div class="annotationsList">'.concat(items).concat('</div>');
            return res.addButton ? html.concat(res.button) : html;
          }.bind(this)
        },
        {
          data: this._columns.annotations.key,
          title: this._columns.annotations.name,
          defaultContent: ' ',
          render: function (data, type, row, meta) {
            if (data == null) return;
            const res = this.resultTableFactory.createRenderingButton(data, type, row, meta)

            const items = $.map(res.data, function (d, i) {
              // figure legend (Supp fig 5Ii)
              const data_s = d.split('(');
              const annotationType = data_s[0].trim();
              const description = data_s[1].slice(0, -1);

              let cellClass = 'detailsAllCell';
              if (annotationType === this.annotationsTypes[0]) {
                cellClass = "detailsFigureLegendCell";
              } else if (annotationType === this.annotationsTypes[1]) {
                cellClass = "detailsCommentsCell";
              } else if (annotationType === this.annotationsTypes[2]) {
                cellClass = "detailsCautionsCell";
              }
              return `<div class="annotationInteractionCell table-list">
                        <div style="float:left; margin-right: 4px;">
                          <span class="${cellClass}">${annotationType}</span>
                        </div>
                        <div class="detailsCell annotationInteractionCellWidth">
                          ${description}
                        </div>
                      </div>`;
            }.bind(this)).join('');

            let html = '<div class="annotationsList">'.concat(items).concat('</div>');
            return res.addButton ? html.concat(res.button) : html;
          }.bind(this)
        }
      ],
      drawCallback: function (settings) {
        $('#interactionsTableWidthMimic').width($("#interactionsTable").width());
        console.log(settings.json.data[0])
      }
    });
    this.resultTableFactory.makeTableHeaderSticky();
  }


  /************************* /
   /** GETTERS AND SETTERS ** /
   /*************************/

  public onPageChanged(pageIndex: number): void {
    this.pageChanged.emit(pageIndex);
  }


  get terms(): string {
    return this._terms;
  }

  set terms(value: string) {
    this._terms = value;
  }

  get batchSearchFilter(): boolean {
    return this._batchSearchFilter;
  }

  set batchSearchFilter(value: boolean) {
    this._batchSearchFilter = value;
  }

  get interactorSpeciesFilter(): string[] {
    return this._interactorSpeciesFilter;
  }

  set interactorSpeciesFilter(value: string[]) {
    this._interactorSpeciesFilter = value;
  }

  get interactorTypeFilter(): string[] {
    return this._interactorTypeFilter;
  }

  set interactorTypeFilter(value: string[]) {
    this._interactorTypeFilter = value;
  }

  get interactionTypeFilter(): string[] {
    return this._interactionTypeFilter;
  }

  set interactionTypeFilter(value: string[]) {
    this._interactionTypeFilter = value;
  }

  get interactionDetectionMethodFilter(): string[] {
    return this._detectionMethodFilter;
  }

  set interactionDetectionMethodFilter(value: string[]) {
    this._detectionMethodFilter = value;
  }

  get interactionHostOrganismFilter(): string[] {
    return this._hostOrganismFilter;
  }

  set interactionHostOrganismFilter(value: string[]) {
    this._hostOrganismFilter = value;
  }

  get negativeFilter(): boolean {
    return this._negativeFilter;
  }

  set negativeFilter(value: boolean) {
    this._negativeFilter = value;
  }

  get miScoreMin(): any {
    return this._miScoreMin;
  }

  set miScoreMin(value: any) {
    this._miScoreMin = value;
  }

  get miScoreMax(): any {
    return this._miScoreMax;
  }

  set miScoreMax(value: any) {
    this._miScoreMax = value;
  }

  get intraSpeciesFilter(): boolean {
    return this._intraSpeciesFilter;
  }

  set intraSpeciesFilter(value: boolean) {
    this._intraSpeciesFilter = value;
  }

  get columns(): Column[] {
    return this._columns;
  }

  get aliasesType(): string[] {
    return this._aliasesType;
  }

  set aliasesType(value: string[]) {
    this._aliasesType = value;
  }

  get annotationsTypes(): string[] {
    return this._annotationsTypes;
  }

  set annotationsTypes(value: string[]) {
    this._annotationsTypes = value;
  }

  get interactionSelected(): string {
    return this._interactionSelected;
  }

  set interactionSelected(value: string) {
    this._interactionSelected = value;
  }
}
