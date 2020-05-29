import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import * as $ from 'jquery';
import 'datatables.net';
import {environment} from '../../../../../environments/environment';

const baseURL = environment.intact_portal_ws;

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

  private _columnNames: string[] = [
    'Select',
    'Molecule A',
    'Molecule B',
    'Interactor Type A',
    'Interactor Type B',
    'Species A',
    'Species B',
    'Detection Method',
    'Publication Ids',
    'Interaction Type',
    'Interaction Ac',
    'Database',
    'Confidence Value',
    'Expansion Method',
    'Experimental Role A',
    'Experimental Role B',
    'Biological Role A',
    'Biological Role B',
    'Aliases A',
    'Aliases B',
    'Feature count',
    'Parameters',
    'Annotations A',
    'Annotations B',
    'Interaction Annotations'
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

  private _annotationsTypes: string[] = [
    'figure legend',
    'comment',
    'caution'
  ];
  constructor(private route: ActivatedRoute) {
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

    this.initDataTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.interactionTab.currentValue) {

      // This fixes the alignment between the th and td when we have activated scrollX:true
      const table: any = $('#interactionsTable');
      this.dataTable = table.DataTable().columns.adjust().draw();
    }
  }

  ngAfterViewInit(): void {

    $('#interactionsTable').on('change', 'input[type=\'checkbox\']', (e) => {
      const table: any = $('#interactionsTable');
      const interactionSel = e.currentTarget.id;

      if (this.interactionSelected !== interactionSel) {
        $('#' + this.interactionSelected + ':checkbox').prop('checked', false);
        $('#' + this.interactionSelected + ':checkbox').closest('tr').removeClass('rowSelected');

        this.interactionSelected = interactionSel;
        $('#' + this.interactionSelected + ':checkbox').prop('checked', true);
        $('#' + this.interactionSelected + ':checkbox').closest('tr').addClass('rowSelected');

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
    $('#interactionsTable').on( 'draw.dt', function () {
      if (this.interactionSelected !== undefined) {
        const selector = $('#' + this.interactionSelected + ':checkbox');
        selector.prop('checked', true);
        selector.closest('tr').addClass('rowSelected');

        const interactionSelectedEvent = new CustomEvent('tableInteractionSelected', {
          bubbles: true,
          detail: {
            interactionId: this.interactionSelected
          }
        });

        document.dispatchEvent(interactionSelectedEvent);
      }
    }.bind(this));


    $('#interactionsTable tbody').on('click', 'button.showMore', function () {
      const table: any = $('#interactionsTable');
      const interactionsT = table.DataTable();

      const rowIndex = $(this).parents('tr');
      const row = interactionsT.row(rowIndex).node();
      const col = $('#' + this.id).data('col');

      const dataCell = interactionsT.cell(row, col).data();
      interactionsT.cell(row, col).data(dataCell);

      $('button#' + this.id + '.showMore').hide();
      $('button#' + this.id + '.showLess').show();
    });

    $('#interactionsTable tbody').on('click', 'button.showLess', function () {
      // tslint:disable-next-line:no-shadowed-variable
      const table: any = $('#interactionsTable');
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
    const table: any = $('#interactionsTable');
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
        }.bind(this)
      },
      columns: [
        {
          data: 'binaryInteractionId',
          defaultContent: ' ',
          title: this.columnNames[0],
          render: function (data, type, full, meta) {
            if (type === 'display') {
              return '<div>' +
                '<input type="checkbox" id="' + full.binaryInteractionId + '" name="check" value="' + data + '"/>' +
                ' <span class="margin-left-medium">' +
                '   <a href="/intact-portal-view/details/interaction/' + full.ac + '">' +
                '     <i class="icon icon-common icon-search-document"></i>' +
                '   </a>' +
                ' </span>' +
                '</div>';
            }
            return data;
          }
        },
        {
          data: 'moleculeA',
          defaultContent: ' ',
          title: this.columnNames[1]
        },
        {
          data: 'moleculeB',
          defaultContent: ' ',
          title: this.columnNames[2]
        },
        {
          data: 'typeA',
          defaultContent: ' ',
          title: this.columnNames[3]
        },
        {
          data: 'typeB',
          defaultContent: ' ',
          title: this.columnNames[4]
        },
        {
          data: 'speciesA',
          defaultContent: ' ',
          title: this.columnNames[5]
        },
        {
          data: 'speciesB',
          defaultContent: ' ',
          title: this.columnNames[6]
        },

        {
          data: 'detectionMethod',
          defaultContent: ' ',
          title: this.columnNames[7]
        },
        {
          data: 'publicationIdentifiers',
          defaultContent: ' ',
          title: this.columnNames[8],
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return '<div>' +
                  '<span class="detailsCell">' + d + '</span>' +
                  '</div>';
              }).join('');
            }
          }
        },
        {
          data: 'type',
          defaultContent: ' ',
          title: this.columnNames[9]
        },
        {
          data: 'ac',
          defaultContent: ' ',
          title: this.columnNames[10]
        },
        {
          data: 'sourceDatabase',
          defaultContent: ' ',
          title: this.columnNames[11]
        },
        {
          data: 'confidenceValues',
          defaultContent: ' ',
          title: this.columnNames[12],
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {

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
                  'rgba(54,19,3,0.1)'
                ];

                const score = d.split(':');
                const paletteIndex = Math.floor(score[1] * 10);

                return '<div>' +
                  '<span class="detailsConfidencesCell" ' +
                  'style="background-color:' + YELLOW_ORANGE_BROWN_PALETTE_BG[paletteIndex] + ';' +
                  'color:' + YELLOW_ORANGE_BROWN_PALETTE[paletteIndex] + '">' + d + '</span>' +
                  '</div>';
              }).join('');
            }
          }
        },
        {
          data: 'expansionMethod',
          defaultContent: ' ',
          title: this.columnNames[13],
          render: function (data, type, row, meta) {
            if (type === 'display' && data != null) {
              return '<div>' +
                '<span class="detailsExpansionsCell">' + data + '</span>' +
                '</div>';
            }
          }
        },
        {
          data: 'experimentalRoleA',
          defaultContent: ' ',
          title: this.columnNames[14]
        },
        {
          data: 'experimentalRoleB',
          defaultContent: ' ',
          title: this.columnNames[15]
        },
        {
          data: 'biologicalRoleA',
          defaultContent: ' ',
          title: this.columnNames[16]
        },
        {
          data: 'biologicalRoleB',
          defaultContent: ' ',
          title: this.columnNames[17]
        },
        {
          data: 'aliasesA',
          defaultContent: ' ',
          title: this.columnNames[18],
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
                    '<div class="detailsCell aliasesCellWidth">' + aliasName + '</div> ' +
                    '</div>';
                } else {
                  return  '<div class="aliasesCell">' +
                    '<div class="detailsCell aliasesCellWidth">' + aliasName + '</div>' +
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
          data: 'aliasesB',
          defaultContent: ' ',
          title: this.columnNames[19],
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
                    '<div class="detailsCell aliasesCellWidth">' + aliasName + '</div> ' +
                    '</div>';
                } else {
                  return  '<div class="aliasesCell">' +
                    '<div class="detailsCell aliasesCellWidth">' + aliasName + '</div>' +
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
          data: 'featureCount',
          defaultContent: ' ',
          title: this.columnNames[20],
          render: function (data, type, row, meta) {
            if (type === 'display' && data != null) {
              return '<div class="alignCell">' +
                '<span>' + data + '</span>' +
                '</div>';
            }
          }
        },
        {
          data: 'parameters',
          defaultContent: ' ',
          title: this.columnNames[21],
          render: function (data, type, row, meta) {
            if (type === 'display' && data != null) {
              return '<div class="parametersCell">' +
                '<span>' + data + '</span>' +
                '</div>';
            }
          }
        },
        {
          data: 'annotationsA',
          defaultContent: ' ',
          title: this.columnNames[22],
          render: function (data, type, row, meta) {
            if (type === 'display' && data !== null) {
              const html = '<div class="annotationsList">';
              const loadMoreButton = '<div> ' +
                '<button type="button" id="row' + meta.row + 'col' + meta.col + '" data-col="' + meta.col + '" class="showMore">Show more</button> </div>'
              const loadLessButton = '<div> ' +
                '<button type="button" id="row' + meta.row + 'col' + meta.col + '" data-col="' + meta.col + '" class="showLess" >Show less</button> </div>'

              const items = $.map(data, function (d, i) {
                // figure legend (Supp fig 5Ii)
                const data_s = d.split('(');
                const annotationType = data_s[0].trim();
                const description = data_s[1].slice(0, -1);

                if (annotationType === 'comment') {
                  return '<div class="annotationCell">' +
                    '<div style="float:left; margin-right: 4px;"><span class="detailsCommentsCell">' + annotationType + '</span></div> ' +
                    '<div class="detailsCell annotationCellWidth">' + description + '</div>' +
                    '</div>';
                } else {
                  return '<div class="annotationCell">' +
                    '<div style="float:left; margin-right: 4px;"><span class="detailsAllCell">' + annotationType + '</span></div> ' +
                    '<div class="detailsCell annotationCellWidth">' + description + '</div>' +
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
          data: 'annotationsB',
          defaultContent: ' ',
          title: this.columnNames[23],
          render: function (data, type, row, meta) {
            if (type === 'display' && data !== null) {
              const html = '<div class="annotationsList">';
              const loadMoreButton = '<div> ' +
                '<button type="button" id="row' + meta.row + 'col' + meta.col + '" data-col="' + meta.col + '" class="showMore">Show more</button> </div>'
              const loadLessButton = '<div> ' +
                '<button type="button" id="row' + meta.row + 'col' + meta.col + '" data-col="' + meta.col + '" class="showLess" >Show less</button> </div>'

              const items = $.map(data, function (d, i) {
                // figure legend (Supp fig 5Ii)
                const data_s = d.split('(');
                const annotationType = data_s[0].trim();
                const description = data_s[1].slice(0, -1);

                if (annotationType === 'comment') {
                  return '<div class="annotationCell">' +
                    '<div style="float:left; margin-right: 4px;"><span class="detailsCommentsCell">' + annotationType + '</span></div> ' +
                    '<div class="detailsCell annotationCellWidth">' + description + '</div>' +
                    '</div>';
                } else {
                  return '<div class="annotationCell">' +
                    '<div style="float:left; margin-right: 4px;"><span class="detailsAllCell">' + annotationType + '</span></div> ' +
                    '<div class="detailsCell annotationCellWidth">' + description + '</div>' +
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
          data: 'annotations',
          defaultContent: ' ',
          title: this.columnNames[24],
          render: function (data, type, row, meta) {
            if (type === 'display' && data !== null) {

              const html = '<div class="annotationsList">';
              const loadMoreButton = '<div> ' +
                '<button type="button" id="row' + meta.row + 'col' + meta.col + '" data-col="' + meta.col + '" class="showMore">Show more</button> </div>'
              const loadLessButton = '<div> ' +
                '<button type="button" id="row' + meta.row + 'col' + meta.col + '" data-col="' + meta.col + '" class="showLess" >Show less</button> </div>'

              const items = $.map(data, function (d, i) {
                // figure legend (Supp fig 5Ii)
                const data_s = d.split('(');
                const annotationType = data_s[0].trim();
                const description = data_s[1].slice(0, -1);

                if (annotationType === this.annotationsTypes[0]) {
                  return '<div class="annotationInteractionCell">' +
                    '<div style="float:left; margin-right: 4px;"><span class="detailsFigureLegendCell">' + annotationType + '</span></div> ' +
                    '<div class="detailsCell annotationInteractionCellWidth">' + description + '</div>' +
                    '</div>';
                } else if (annotationType === this.annotationsTypes[1]) {
                  return '<div class="annotationInteractionCell">' +
                    '<div style="float:left; margin-right: 4px;"><span class="detailsCommentsCell">' + annotationType + '</span></div> ' +
                    '<div class="detailsCell annotationInteractionCellWidth">' + description + '</div>' +
                    '</div>';
                } else if (annotationType === this.annotationsTypes[2]) {
                  return '<div class="annotationInteractionCell">' +
                    '<div style="float:left; margin-right: 4px;"><span class="detailsCautionsCell">' + annotationType + '</span></div> ' +
                    '<div class="detailsCell annotationInteractionCellWidth">' + description + '</div>' +
                    '</div>';
                } else {
                  return '<div class="annotationInteractionCell">' +
                    '<div style="float:left; margin-right: 4px;"><span class="detailsAllCell">' + annotationType + '</span></div> ' +
                    '<div class="detailsCell annotationInteractionCellWidth">' + description + '</div>' +
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
        }
      ],
      drawCallback: function( settings ) {
        const api = this.api();
        api.rows().every( function ( rowIdx, tableLoop, rowLoop ) {
          const d = this.data();
          const n = this.node();

          if (d.aliasesA != null) {
            const htmlCollection = n.children[18].children[0].children;
            for (let i = htmlCollection.length - 1; i >= 2; --i) {
              htmlCollection[i].remove();
            }

            $('button#row' + n.sectionRowIndex + 'col18.showMore').show();
            $('button#row' + n.sectionRowIndex + 'col18.showLess').hide();
          }

          if (d.aliasesB != null) {
            const htmlCollection = n.children[19].children[0].children;
            for (let i = htmlCollection.length - 1; i >= 2; --i) {
              htmlCollection[i].remove();
            }

            $('button#row' + n.sectionRowIndex + 'col19.showMore').show();
            $('button#row' + n.sectionRowIndex + 'col19.showLess').hide();
          }

          if (d.annotationsA != null) {
            const htmlCollection = n.children[22].children[0].children;
            for (let i = htmlCollection.length - 1; i >= 2; --i) {
              htmlCollection[i].remove();
            }

            $('button#row' + n.sectionRowIndex + 'col22.showMore').show();
            $('button#row' + n.sectionRowIndex + 'col22.showLess').hide();
          }

          if (d.annotationsB != null) {
            const htmlCollection = n.children[23].children[0].children;
            for (let i = htmlCollection.length - 1; i >= 2; --i) {
              htmlCollection[i].remove();
            }

            $('button#row' + n.sectionRowIndex + 'col23.showMore').show();
            $('button#row' + n.sectionRowIndex + 'col23.showLess').hide();
          }
          if (d.annotations != null) {
            const htmlCollection = n.children[24].children[0].children;
            for (let i = htmlCollection.length - 1; i >= 2; --i) {
              htmlCollection[i].remove();
            }

            $('button#row' + n.sectionRowIndex + 'col24.showMore').show();
            $('button#row' + n.sectionRowIndex + 'col24.showLess').hide();
          }
        });
      }
    });


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

  get columnNames(): string[] {
    return this._columnNames;
  }

  set columnNames(value: string[]) {
    this._columnNames = value;
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

