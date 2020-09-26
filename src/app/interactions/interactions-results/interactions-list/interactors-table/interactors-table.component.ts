import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import * as $ from 'jquery';
import 'datatables.net';
import {environment} from '../../../../../environments/environment';

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

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
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
          const table: any = $('#interactorsTable');
          this.dataTable = table.DataTable().ajax.reload();
        }
      });

    this.initDataTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.interactorTab.currentValue) {

      // This fixes the alignment between the th and td when we have activated scrollX:true
      const table: any = $('#interactorsTable');
      this.dataTable = table.DataTable().columns.adjust().draw();
    }
  }

  ngAfterViewInit(): void {

    $('#interactorsTable').on('change', 'input[type=\'checkbox\']', (e) => {
      const table: any = $('#interactorsTable');
      const interactorSel = e.currentTarget.id;

      if (this.interactorSelected !== interactorSel) {
        $('#' + this.interactorSelected + ':checkbox').prop('checked', false);
        $('#' + this.interactorSelected + ':checkbox').closest('tr').removeClass('rowSelected');

        this.interactorSelected = interactorSel;
        $('#' + this.interactorSelected + ':checkbox').prop('checked', true);
        $('#' + this.interactorSelected + ':checkbox').closest('tr').addClass('rowSelected');

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
    $('#interactorsTable').on( 'draw.dt', function () {
      if (this.interactorSelected !== undefined) {
        const selector = $('#' + this.interactorSelected + ':checkbox');
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

    $('#interactorsTable tbody').on('click', 'button.showMore', function () {
      const table: any = $('#interactorsTable');
      const interactionsT = table.DataTable();

      const rowIndex = $(this).parents('tr');
      const row = interactionsT.row(rowIndex).node();
      const col = $('#' + this.id).data('col');

      const dataCell = interactionsT.cell(row, col).data();
      interactionsT.cell(row, col).data(dataCell);

      $('button#' + this.id + '.showMore').hide();
      $('button#' + this.id + '.showLess').show();
    });

    $('#interactorsTable tbody').on('click', 'button.showLess', function () {
      // tslint:disable-next-line:no-shadowed-variable
      const table: any = $('#interactorsTable');
      const interactionsT = table.DataTable();

      const rowIndex = $(this).parents('tr');
      const row = interactionsT.row(rowIndex).node();
      const col = $('#' + this.id).data('col');

      const htmlCollection = row.children[col].children[0].children;
      for (let i = htmlCollection.length - 1; i >= 2; --i) {
        htmlCollection[i].remove();
      }

      $('button#' + this.id + '.showMore').show();
      $('button#' + this.id + '.showLess').hide();
    });
  }

  private initDataTable(): void {
    const table: any = $('#interactorsTable');
    this.dataTable = table.DataTable({
      bSort: false,
      searching: false,
      paging: true,
      lengthMenu: [25, 50, 75, 100, 150, 200, 500],
      pageLength: 25,
      pagingType: 'full_numbers',
      processing: true,
      serverSide: true,
      dom: '<"top"flip>rt<"bottom"ifp>',
      scrollX: true,
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
          // d.page = this.currentPageIndex - 1;
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
          title: this.columnNames[4]
        },
        {
          data: 'interactorSpecies',
          defaultContent: ' ',
          title: this.columnNames[5]
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
            if (type === 'display' && data != null) {

              const html = '<div class="aliasesList">';
              const loadMoreButton = '<div class="aliasesList"> ' +
                '<button type="button" id="row' + meta.row + 'col' + meta.col + '" data-col="' + meta.col + '" class="showMore">Show more</button> </div>'
              const loadLessButton = '<div class="aliasesList"> ' +
                '<button type="button" id="row' + meta.row + 'col' + meta.col + '" data-col="' + meta.col + '" class="showLess" >Show less</button> </div>'

              const items = $.map(data, function (d, i) {

                // Anaplastic lymphoma kinase (MI:0302 (gene name synonym))
                const data_s = d.split('(');
                const aliasName = data_s[0].trim();
                const aliasId = data_s[1];
                const aliasType = data_s[2].slice(0, -2);

                if (this.aliasesType.includes(aliasType)) {
                  return '<div class="aliasesCell">' +
                    '<div style="float:left; margin-right: 4px;"><span class="detailsAliasesCell">' + aliasType + '</span></div>' +
                    '<div class="detailsCell aliasesCellWidth">' +
                    '<a class="xrefLinkCell" target="_blank" href="' + ebiURL + '/ols/ontologies/mi/terms?obo_id=' + aliasId + '">' + aliasName + '</a></div> ' +
                    '</div>';
                } else {
                  return  '<div class="aliasesCell">' +
                    '<div class="detailsCell aliasesCellWidth">' +
                    '<a class="xrefLinkCell" target="_blank" href="' + ebiURL + '/ols/ontologies/mi/terms?obo_id=' + aliasId + '">' + aliasName + '</a></div> ' +
                    '</div>';
                }
              }.bind(this)).join('');

              if (data.length > 2) {
                return html.concat(items).concat('</div>').concat(loadLessButton).concat(loadMoreButton);
              } else {
                return html.concat(items).concat('</div>');
              }
            }
          }.bind(this)
        },
        {
          data: 'interactorAltIds',
          defaultContent: ' ',
          title: this.columnNames[8],
          render: function (data, type, row, meta) {
            if (type === 'display' && data != null) {
              const html = '<div class="aliasesList">';
              const loadMoreButton = '<div class="aliasesList"> ' +
                '<button type="button" id="row' + meta.row + 'col' + meta.col + '" data-col="' + meta.col + '" class="showMore">Show more</button> </div>'
              const loadLessButton = '<div class="aliasesList"> ' +
                '<button type="button" id="row' + meta.row + 'col' + meta.col + '" data-col="' + meta.col + '" class="showLess" >Show less</button> </div>'

              const items = $.map(data, function (d, i) {

                // Anaplastic lymphoma kinase (MI:0302 (gene name synonym))
                const data_s = d.split('(');
                const altId = data_s[0].trim();
                const database = data_s[1].slice(0, -1).trim();

                let url = '';
                if (database === 'uniprotkb') {
                  url = 'https://www.uniprot.org/uniprot/' + altId;
                } else if (database === 'intact') {
                  url = '/intact-portal-view/details/interaction/' + altId;
                } else if (database === 'dip') {
                  const id = altId.replace('DIP-', '');
                  url = 'https://dip.doe-mbi.ucla.edu/dip/DIPview.cgi?PK=' + id;
                }

                return '<div class="aliasesCell">' +
                    '<div class="detailsCell aliasesCellWidth"><a href="' + url + '" target="_blank">' + altId + '</a></div> ' +
                    '</div>';
              }).join('');

              if (data.length > 2) {
                return html.concat(items).concat('</div>').concat(loadLessButton).concat(loadMoreButton);
              } else {
                return html.concat(items).concat('</div>');
              }
            }
          }
        },
        {
          data: 'interactionSearchCount',
          defaultContent: ' ',
          title: this.columnNames[9],
          render: function (data, type, row, meta) {
            if (type === 'display' && data != null) {
              return '<div class="alignCell">' +
                '<span>' + data + '</span>' +
                '</div>';
            }
          }
        },
        {
          data: 'interactionCount',
          defaultContent: ' ',
          title: this.columnNames[10],
          render: function (data, type, row, meta) {
            if (type === 'display' && data != null) {
              return '<div class="alignCell">' +
                '<span>' + data + '</span>' +
                '</div>';
            }
          }
        }
      ],
      drawCallback: function( settings ) {
        const api = this.api();
        api.rows().every( function ( rowIdx, tableLoop, rowLoop ) {
          const d = this.data();
          const n = this.node();

          if (d.interactorAlias != null) {
            const htmlCollection = n.children[7].children[0].children;
            for (let i = htmlCollection.length - 1; i >= 2; --i) {
              htmlCollection[i].remove();
            }

            $('button#row' + n.sectionRowIndex + 'col7.showMore').show();
            $('button#row' + n.sectionRowIndex + 'col7.showLess').hide();
          }
          if (d.interactorAltIds != null) {
            const htmlCollection = n.children[8].children[0].children;
            for (let i = htmlCollection.length - 1; i >= 2; --i) {
              htmlCollection[i].remove();
            }

            $('button#row' + n.sectionRowIndex + 'col8.showMore').show();
            $('button#row' + n.sectionRowIndex + 'col8.showLess').hide();
          }
        });
      }
    });
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
