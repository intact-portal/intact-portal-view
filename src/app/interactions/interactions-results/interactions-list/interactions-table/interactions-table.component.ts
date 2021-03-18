import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {environment} from '../../../../../environments/environment';
import {extractAlias, extractAnnotation, extractId} from "../../../../shared/utils/string-utils";
import {TableFactoryService} from "../../../shared/service/table-factory.service";
import {InteractionTable} from "../../../shared/model/tables/interaction-table.model";
import {Column} from "../../../shared/model/tables/column.model";
import {NetworkSelectionService} from "../../../shared/service/network-selection.service";
import {ResultTable} from "../../../shared/model/interactions-results/result-table-interface";
import {SearchService} from "../../../../home-dashboard/search/service/search.service";


const baseURL = environment.intact_portal_ws;
const ebiURL = environment.ebi_url;

@Component({
  selector: 'ip-interactions-table',
  templateUrl: './interactions-table.component.html',
  styleUrls: ['./interactions-table.component.css']
})
export class InteractionsTableComponent implements OnInit, OnChanges, AfterViewInit, ResultTable {

  @Output() interactionChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  @Input() interactionTab: boolean;

  private _query: string;
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
  dataTable: DataTables.Api;

  columnView = 'interactions_columnView';

  private _columns = new InteractionTable();

  constructor(private route: ActivatedRoute, private tableFactory: TableFactoryService, private networkSelection: NetworkSelectionService, private search: SearchService) {
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.query = params.query ? params.query : this.search.query;
        this.batchSearchFilter = params.batchSearch ? params.batchSearch : this.search.isBatchSearch;
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
          const table: any = $('#interactionsTable');
          this.dataTable = table.DataTable().ajax.reload();
        }
      });

    this.initDataTable();
    this.networkSelection.registerSelectionListener(this.dataTable, this);
    this.tableFactory.enableShowButtons();
    this.tableFactory.initTopSlider('interactionsTable');
    this.tableFactory.initShadowBorder('interactionsTable');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.interactionTab.currentValue) {
      // This fixes the alignment between the th and td when we have activated scrollX:true
      const table = $('#interactionsTable');
      this.dataTable = table.DataTable().columns.adjust().draw();
    }
  }

  ngAfterViewInit(): void {
    let interactionsTable = $('#interactionsTable');
    interactionsTable.on('change', 'input[type=\'checkbox\']', (e) => {
      const interactionSel = e.currentTarget.id;

      if (this.interactionSelected !== interactionSel) {
        let previousCheckbox = $(`#${this.interactionSelected}:checkbox`);
        previousCheckbox.prop('checked', false);

        this.interactionSelected = interactionSel;
        let newCheckbox = $(`#${interactionSel}:checkbox`);
        newCheckbox.prop('checked', true);

        const interactionSelectedEvent = new CustomEvent('tableInteractionSelected', {
          bubbles: true,
          detail: {
            interactionId: this.interactionSelected
          }
        });
        document.dispatchEvent(interactionSelectedEvent);
      } else {
        const tableUnselectEvent = new CustomEvent('tableUnselected', {
          bubbles: true,
        });
        document.dispatchEvent(tableUnselectEvent);
      }
    });

    // When table redrawn keep row selection synchronization between tables
    interactionsTable.on('draw.dt', function () {
      if (this.interactionSelected !== undefined) {
        let previousCheckbox = $(`#${this.interactionSelected}:checkbox`);
        previousCheckbox.prop('checked', true);
        previousCheckbox.closest('tr').addClass('rowSelected');
        const interactionSelectedEvent = new CustomEvent('tableInteractionSelected', {
          bubbles: true,
          detail: {
            interactionId: this.interactionSelected
          }
        });

        document.dispatchEvent(interactionSelectedEvent);
      }
    }.bind(this));
  }

  clearTableSelection() {
    if (!this.interactionSelected) return;
    let selectedInteraction = $(`#${this.interactionSelected}:checkbox`);
    if (selectedInteraction.length > 0) {
      selectedInteraction.prop('checked', false);
      this.interactionSelected = undefined;
    }
  }

  updateTable() {
    const table: any = $('#interactionsTable');
    this.dataTable = table.DataTable().columns.adjust().draw();
  }

  private initDataTable(): void {
    const table = $('#interactionsTable');
    this.dataTable = table.DataTable({
        ordering: false,
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
          data: (d: any) => {
            d.page = d.start / d.length;
            d.pageSize = d.length;
            d.query = this.query;
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
            d.binaryInteractionId = this.networkSelection.binaryInteractionIds;
            d.interactorAc = this.networkSelection.interactorAcs;
          }
        },
        columns: [
          {
            data: this._columns.id.key,
            title: this._columns.id.name,
            render: function (data, type, full) {
              if (type === 'display') {
                return `<div>
                        <input type="checkbox" id="${full.binaryInteractionId}" name="check" value="${data}"/>
                        <span class="margin-left-medium">
                          <a href="${environment.context_path}/details/interaction/${full.ac}" class="icon-link tool-tip" target="_blank">
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
            render: (data, type) => {
              if (type === 'display' && data !== null) {
                return this.tableFactory.identifierRender(extractId(data))
              }
              return data
            }
          },
          {
            data: this._columns.identifierB.key,
            defaultContent: '',
            title: this._columns.identifierB.name,
            render: (data, type) => {
              if (type === 'display' && data !== null) {
                return this.tableFactory.identifierRender(extractId(data))
              }
              return data
            }
          },
          {
            data: this._columns.typeA.key,
            title: this._columns.typeA.name,
            render: this.tableFactory.cvRender('typeMIA')
          },
          {
            data: this._columns.typeB.key,
            title: this._columns.typeB.name,
            render: this.tableFactory.cvRender('typeMIB')
          },
          {
            data: this._columns.speciesA.key,
            title: this._columns.speciesA.name,
            render: this.tableFactory.speciesRender('taxIdA')
          },
          {
            data: this._columns.speciesB.key,
            title: this._columns.speciesB.name,
            render: this.tableFactory.speciesRender('taxIdB')
          },
          {
            data: this._columns.hostOrganism.key,
            title: this._columns.hostOrganism.name,
            render: this.tableFactory.speciesRender('hostOrganismTaxId')
          },
          {
            data: this._columns.detectionMethod.key,
            title: this._columns.detectionMethod.name,
            render: this.tableFactory.cvRender('detectionMethodMIIdentifier')
          },
          {
            data: this._columns.publicationIdentifiers.key,
            title: this._columns.publicationIdentifiers.name,
            render: this.tableFactory.enlistWithButtons((d) => {
              const data_s = d.split('(');
              const publicationId: string = data_s[0].trim();
              const publicationSource = data_s[1].slice(0, -1);
              let url = '';
              if (publicationSource === 'pubmed' && !publicationId.includes('unassigned')) {
                url = 'https://europepmc.org/article/MED/' + publicationId;
              } else if (publicationSource === 'imex') {
                url = ebiURL + '/intact/imex/main.xhtml?query=' + publicationId;
              } else if (publicationSource === 'doi') {
                url = 'https://www.doi.org/' + publicationId;
              } else {
                return;
              }

              return `<div><span class="detailsCell">
                          ${url !== '' ? `<a href="${url}" target="_blank">${publicationId}</a>` : publicationId}
                      </span></div>`;
            }, 'alignCell', false)
          },
          {
            data: this._columns.type.key,
            title: this._columns.type.name,
            render: this.tableFactory.cvRender('typeMIIdentifier')
          },
          {
            data: this._columns.ac.key,
            title: this._columns.ac.name,
            render: function (data, type) {
              if (type === 'display' && data != null) {
                return '<div>' +
                  '<span><a href="${environment.context_path}/details/interaction/' + data + '" style="white-space: nowrap">' + data + '</a></span>' +
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
            render: this.tableFactory.enlistWithButtons((d: string) => {

              if (!d.includes('intact-miscore')) {
                let [name, value] = d.split(/[()]/);
                let fixed = parseFloat(value).toFixed(2);
                return `<div class="tag-cell-container vertical-flex"><span class="detailsExpansionsCell tag-cell centered">${name}:${fixed}</span></div>`
              }
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
              const paletteIndex = Math.floor(parseFloat(score[1]) * 10);

              // noinspection CssInvalidPropertyValue
              return `<div class="tag-cell-container vertical-flex">
                          <a class="detailsConfidencesCell tag-cell centered" target="_blank"
                          href="${environment.ebi_base_url}${environment.context_path}/documentation/docs#interaction_scoring"
                          style="background-color:${YELLOW_ORANGE_BROWN_PALETTE_BG[paletteIndex]};
                                 border:1px solid ${YELLOW_ORANGE_BROWN_PALETTE[paletteIndex]};
                                 color: ${YELLOW_ORANGE_BROWN_PALETTE_TEXT[paletteIndex]}">
                            ${d.replace('intact-miscore', 'MI Score')}
                          </a>
                        </div>`;
            }, '', false)
          },
          {
            data: this._columns.expansionMethod.key,
            title: this._columns.expansionMethod.name,
            defaultContent: ' ',
            render: function (data, type) {
              if (type === 'display' && data != null) {
                return `<div style="display: flex">
                        <a target="_blank" class="tag-cell detailsExpansionsCell"
                           href="${environment.ebi_base_url}${environment.context_path}/documentation/docs#expansion_method" >
                            ${data}
                        </a>
                      </div>`;
              }
            }
          },
          {
            data: this._columns.experimentalRoleA.key,
            title: this._columns.experimentalRoleA.name,
            defaultContent: ' ',
            render: this.tableFactory.cvRender('experimentalRoleMIIdentifierA')
          },
          {
            data: this._columns.experimentalRoleB.key,
            title: this._columns.experimentalRoleB.name,
            defaultContent: ' ',
            render: this.tableFactory.cvRender('experimentalRoleMIIdentifierB')
          },
          {
            data: this._columns.biologicalRoleA.key,
            title: this._columns.biologicalRoleA.name,
            defaultContent: ' ',
            render: this.tableFactory.cvRender('biologicalRoleMIIdentifierA')
          },
          {
            data: this._columns.biologicalRoleB.key,
            title: this._columns.biologicalRoleB.name,
            defaultContent: ' ',
            render: this.tableFactory.cvRender('biologicalRoleMIIdentifierB')
          },
          {
            data: this._columns.aliasesA.key,
            title: this._columns.aliasesA.name,
            defaultContent: ' ',
            render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.aliasRender(extractAlias(d)))
          },
          {
            data: this._columns.aliasesB.key,
            title: this._columns.aliasesB.name,
            defaultContent: ' ',
            render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.aliasRender(extractAlias(d)))
          },
          {
            data: this._columns.featureCount.key,
            title: this._columns.featureCount.name,
            render: function (data, type) {
              if (type === 'display' && data != null) {
                return `<div class="alignCell"><span>${data}</span></div>`;
              }
            }
          },
          {
            data: this._columns.parameters.key,
            title: this._columns.parameters.name,
            defaultContent: ' ',
            render: function (data, type) {
              if (type === 'display' && data != null) {
                return `<div class="parametersCell"><span>${data}</span></div>`;
              }
            }
          },
          {
            data: this._columns.annotationsA.key,
            title: this._columns.annotationsA.name,
            defaultContent: ' ',
            render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.annotationRender(new Map([
              ['comment', {class: 'detailsCommentsCell', symbol: 'icon-comment'}],
              ['default', {class: 'detailsAllCell', symbol: 'icon-tag'}]
            ]))(extractAnnotation(d)), 'annotationsList')
          },
          {
            data: this._columns.annotationsB.key,
            title: this._columns.annotationsB.name,
            defaultContent: ' ',
            render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.annotationRender(new Map([
              ['comment', {class: 'detailsCommentsCell', symbol: 'icon-comment'}],
              ['default', {class: 'detailsAllCell', symbol: 'icon-tag'}]
            ]))(extractAnnotation(d)), 'annotationsList')
          },
          {
            data: this._columns.annotations.key,
            title: this._columns.annotations.name,
            defaultContent: ' ',
            render: this.tableFactory.enlistWithButtons((d) => this.tableFactory.annotationRender(new Map([
              ['figure legend', {class: 'detailsFigureLegendCell', symbol: 'icon-image'}],
              ['comment', {class: 'detailsCommentsCell', symbol: 'icon-comment'}],
              ['caution', {class: 'detailsCautionsCell', symbol: 'icon-exclamation-triangle'}],
              ['default', {class: 'detailsAllCell', symbol: 'icon-tag'}]
            ]))(extractAnnotation(d)), 'annotationsList')
          }
        ],
        drawCallback: function () {
          $('#interactionsTableWidthMimic').width($("#interactionsTable").width());
          $('.table-list').parent('td').css('vertical-align', 'top');
          $('.collapse-panel').css('display', 'none');
        }
      }
    );
  }


  /************************* /
   /** GETTERS AND SETTERS ** /
   /*************************/

  onPageChanged(pageIndex: number): void {
    this.pageChanged.emit(pageIndex);
  }


  get query(): string {
    return this._query;
  }

  set query(value: string) {
    this._query = value;
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

  get interactionSelected(): string {
    return this._interactionSelected;
  }

  set interactionSelected(value: string) {
    this._interactionSelected = value;
  }
}
