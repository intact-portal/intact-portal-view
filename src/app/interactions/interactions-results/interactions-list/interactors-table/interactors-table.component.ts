import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import * as $ from 'jquery';
import 'datatables.net';
import {environment} from '../../../../../environments/environment';
import {extractCVValue, extractIds} from "../../../../shared/utils/string-utils";
import {ResultTableFactoryService} from "../../../shared/service/result-table-factory.service";

const baseURL = environment.intact_portal_ws;
const ebiURL = environment.ebi_url;

@Component({
  selector: 'ip-interactors-table',
  templateUrl: './interactors-table.component.html',
  styleUrls: ['./interactors-table.component.css']
})
export class InteractorsTableComponent implements OnInit, OnChanges, AfterViewInit {

  @Output() interactorChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  @Input() interactorTab: boolean;

  private _terms: string;
  private _batchSearchFilter: boolean;
  private _interactorSpeciesFilter: string[];
  private _interactorTypeFilter: string[];
  private _interactionDetectionMethodFilter: string[];
  private _interactionTypeFilter: string[];
  private _interactionHostOrganismFilter: string[];
  private _negativeFilter: boolean;
  private _miScoreMin: any;
  private _miScoreMax: any;
  private _intraSpeciesFilter: boolean;
  private _currentPageIndex: any;
  private _interactorSelected: string;

  dataTable: any;

  columnView = 'interactors_columnView';
  table: any;

  private _columnNames: string[] = [
    'Select',
    'Accession',
    'Name',
    'Preferred Id.',
    'Type',
    'Species',
    'Description',
    'Alias',
    'Alternative Ids',
    'Interactions found in current search',
    'Total interactions in all IntAct'
  ];

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

  private binaryInteractionIds: number[];
  private interactorAcs: string[];

  constructor(private route: ActivatedRoute, private resultTableFactory: ResultTableFactoryService) {
  }

  ngOnInit() {
    this.table = $('#interactorsTable');
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
        this.miScoreMin = params.miScoreMin ? params.miScoreMin : 0;
        this.miScoreMax = params.miScoreMax ? params.miScoreMax : 1;
        this.intraSpeciesFilter = params.intraSpecies ? params.intraSpecies : false;

        this.currentPageIndex = params.page ? Number(params.page) : 1;
        if (this.dataTable !== undefined) {
          this.dataTable = this.table.DataTable().ajax.reload();
        }

      });

    document.addEventListener('graph-interaction-selected', (e: any) => {
      this.binaryInteractionIds = e.detail.interactionIds();
      this.interactorAcs = [];
      this.dataTable.ajax.reload();
    });
    document.addEventListener('graph-interactor-selected', (e: any) => {
      this.binaryInteractionIds = [];
      this.interactorAcs = [e.detail.interactorId()];
      this.dataTable.ajax.reload();
    });
    document.addEventListener('graph-unselected', () => {
      this.binaryInteractionIds = [];
      this.interactorAcs = [];
      this.dataTable.ajax.reload();
    });
    this.initDataTable();
    // this.initScrollbars();
    this.resultTableFactory.initTopSlider('interactorsTable')
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.interactorTab.currentValue) {

      // This fixes the alignment between the th and td when we have activated scrollX:true
      this.table = $('#interactorsTable');
      this.dataTable = this.table.DataTable().columns.adjust().draw();
    }
  }

  ngAfterViewInit(): void {
    let interactorsTable = $('#interactorsTable');
    let selectedInteractorCheckbox = $(`#${this.interactorSelected}:checkbox`);
    interactorsTable.on('change', 'input[type=\'checkbox\']', (e) => {
      const table: any = interactorsTable;
      const interactorSel = e.currentTarget.id;

      if (this.interactorSelected !== interactorSel) {
        selectedInteractorCheckbox.prop('checked', false);
        selectedInteractorCheckbox.closest('tr').removeClass('rowSelected');

        this.interactorSelected = interactorSel;
        selectedInteractorCheckbox.prop('checked', true);
        selectedInteractorCheckbox.closest('tr').addClass('rowSelected');

        const interactorSelectedEvent = new CustomEvent('tableInteractorSelected', {
          bubbles: true,
          detail: {
            interactorId: this.interactorSelected
          }
        });
        document.dispatchEvent(interactorSelectedEvent);

      } else {
        // None is selected, remove class
        this.interactorSelected = undefined;
        $(table.dataTableSettings).each(function () {
          $(this.aoData).each(function () {
            $(this.nTr).removeClass('rowSelected');
          })
        });

        const tableUnselectedEvent = new CustomEvent('tableUnselected', {
          bubbles: true
        });
        document.dispatchEvent(tableUnselectedEvent);
      }
    });

    // When table redrawn keep row selection synchronization between tables
    interactorsTable.on('draw.dt', function () {
      if (this.interactorSelected !== undefined) {
        const selector = selectedInteractorCheckbox;
        selector.prop('checked', true);
        selector.closest('tr').addClass('rowSelected');

        const interactorSelectedEvent = new CustomEvent('tableInteractorSelected', {
          bubbles: true,
          detail: {
            interactorId: this.interactorSelected
          }
        });
        document.dispatchEvent(interactorSelectedEvent);
      }
    }.bind(this));

    interactorsTable.on('resize',() => $('#interactorsTableWidthMimic').width(interactorsTable.width()))

    let tableBody = $('#interactorsTable tbody');
    tableBody.on('click', 'button.showMore', function () {
      const table: any = interactorsTable;
      const interactorsT = table.DataTable();

      const rowIndex = $(this).parents('tr');
      const row = interactorsT.row(rowIndex).node();
      const col = $(`#${this.id}`).data('col');

      $(this).parents('td').html(interactorsT.cell(row, col).render('more')).show();
    });

    tableBody.on('click', 'button.showLess', function () {
      const table: any = interactorsTable;
      const interactorsT = table.DataTable();

      const rowIndex = $(this).parents('tr');
      const row = interactorsT.row(rowIndex).node();
      const col = $('#' + this.id).data('col');

      interactorsT.cell(row, col).render('less');
      $(this).parents('td').html(interactorsT.cell(row, col).render('less'))
    });

  }

  scrolling = false;

  private initScrollbars() {
    let tableWrapper = $('#interactorsTable_wrapper')
    let topScroll = $('#interactorsTableTopScroll');
    if (topScroll.length === 0) {
      topScroll = $('<div id="interactorsTableTopScroll"><div id="interactorsTableWidthMimic"></div></div>');
      topScroll.find('#interactorsTableWidthMimic').height(1);
      topScroll.css('overflow-x', 'auto')
      topScroll.css('overflow-y', 'hidden')
      topScroll.insertAfter(tableWrapper.find('div.top'));
    }

    let bodyScroll = tableWrapper.find('.dataTables_scrollBody');
    bodyScroll.scroll(function () {
      if (!this.scrolling) {
        this.scrolling = true;
        topScroll.scrollLeft(bodyScroll.scrollLeft()); // Synchronize  top scroller
      } else {
        this.scrolling = false;
      }
    }.bind(this));

    topScroll.scroll(function () {
      if (!this.scrolling) {
        this.scrolling = true;
        bodyScroll.scrollLeft(topScroll.scrollLeft())
      } else {
        this.scrolling = false;
      }
    }.bind(this));
  }

  private initDataTable(): void {
    const table: any = $('#interactorsTable');
    this.dataTable = table.DataTable({
      bSort: false,
      searching: false,
      paging: true,
      lengthMenu: [25, 50, 75, 100, 150, 200, 500],
      pageLength: 25,
      pagingType: 'numbers',
      processing: true,
      serverSide: true,
      dom: '<"top"flip>rt<"bottom"ifp>',
      scrollX: true,
      fixedHeader: false,
      ajax: {
        url: `${baseURL}/interaction/interactors/list/`,
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
          data: 'interactorAc',
          defaultContent: ' ',
          title: this.columnNames[0],
          render: function (data, type, full, meta) {
            if (type === 'display') {
              return '<div class="margin-left-large">' +
                '<input type="checkbox" id="' + full.interactorAc + '" name="check" value="' + data + '"/>' +
                '</div>';
            }
            return data;
          }
        },
        {
          data: 'interactorAc',
          defaultContent: ' ',
          title: this.columnNames[1]
        },
        {
          data: 'interactorName',
          defaultContent: ' ',
          title: this.columnNames[2]
        },
        {
          data: 'interactorPreferredIdentifier',
          defaultContent: ' ',
          title: this.columnNames[3]
        },
        {
          data: 'interactorType',
          defaultContent: ' ',
          title: this.columnNames[4],
          render: this.resultTableFactory.cvRender('interactorTypeMIIdentifier')
        },
        {
          data: 'interactorSpecies',
          defaultContent: ' ',
          title: this.columnNames[5],
          render: this.resultTableFactory.speciesRender('interactorTaxId')
        },
        {
          data: 'interactorDescription',
          defaultContent: ' ',
          title: this.columnNames[6]
        },
        {
          data: 'interactorAlias',
          defaultContent: ' ',
          title: this.columnNames[7],
          render: function (data, type, row, meta) {
            if (data == null) return;
            const res = this.resultTableFactory.createRenderingButton(data, type, row, meta)
            const items = $.map(res.data, function (d, i) {
              // Anaplastic lymphoma kinase (MI:0302 (gene name synonym))
              const alias = extractCVValue(d);
              return `<div class="aliasesCell">
                        <div style="float:left; margin-right: 4px;">
                          <a class="detailsAliasesCell" target="_blank"
                             href="${ebiURL}/ols/ontologies/mi/terms?obo_id=${alias.type.identifier}">
                            ${alias.type.shortName}
                          </a>
                        </div>
                        <span>${alias.value}</span>
                      </div>`;
            }.bind(this)).join('');
            let html = '<div class="annotationsList">'.concat(items).concat('</div>');
            return res.addButton ? html.concat(res.button) : html;
          }.bind(this)
        },
        {
          data: 'interactorAltIds',
          defaultContent: ' ',
          title: this.columnNames[8],
          render: function (data, type, row, meta) {
            if (data == null) return;
            const res = this.resultTableFactory.createRenderingButton(data, type, row, meta)
            const items = $.map(res.data, function (d, i) {
              // Q6FIE7 (uniprotkb)
              return this.resultTableFactory.getInteractorLink(extractIds(d));
            }.bind(this)).join('');

            let html = `<div class="aliasesList">${items}</div>`;
            return res.addButton ? html.concat(res.button) : html;
          }.bind(this)
        },
        {
          data: 'interactionSearchCount',
          defaultContent: ' ',
          title: this.columnNames[9],
          render: function (data, type, row, meta) {
            if (type === 'display' && data != null) {
              return `<div class="alignCell"><span>${data}</span></div>`;
            }
          }
        },
        {
          data: 'interactionCount',
          defaultContent: ' ',
          title: this.columnNames[10],
          render: function (data, type, row, meta) {
            if (type === 'display' && data != null) {
              return `<div class="alignCell"><span>${data}</span></div>`;
            }
          }
        }
      ],
      drawCallback: function (settings) {
        $('#interactorsTableWidthMimic').width($("#interactorsTable").width());
      }
    });
    this.resultTableFactory.makeTableHeaderSticky();
  }


  public onPageChanged(pageIndex: number): void {
    this.pageChanged.emit(pageIndex);
  }


  /************************* /
   /** GETTERS AND SETTERS ** /
   /*************************/

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
    return this._interactionDetectionMethodFilter;
  }

  set interactionDetectionMethodFilter(value: string[]) {
    this._interactionDetectionMethodFilter = value;
  }

  get interactionHostOrganismFilter(): string[] {
    return this._interactionHostOrganismFilter;
  }

  set interactionHostOrganismFilter(value: string[]) {
    this._interactionHostOrganismFilter = value;
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

  get columnNames(): string[] {
    return this._columnNames;
  }

  set columnNames(value: string[]) {
    this._columnNames = value;
  }

  get intraSpeciesFilter(): boolean {
    return this._intraSpeciesFilter;
  }

  set intraSpeciesFilter(value: boolean) {
    this._intraSpeciesFilter = value;
  }

  get currentPageIndex(): any {
    return this._currentPageIndex;
  }

  set currentPageIndex(value: any) {
    this._currentPageIndex = value;
  }

  get interactorSelected(): string {
    return this._interactorSelected;
  }

  set interactorSelected(value: string) {
    this._interactorSelected = value;
  }

  get aliasesType(): string[] {
    return this._aliasesType;
  }

  set aliasesType(value: string[]) {
    this._aliasesType = value;
  }
}
