import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import * as $ from 'jquery';
import 'datatables.net';
import {environment} from '../../../../../environments/environment';

const baseURL = environment.intact_portal_ws;

@Component({
  selector: 'iv-interactions-table',
  templateUrl: './interactions-table.component.html',
  styleUrls: ['./interactions-table.component.css']
})
export class InteractionsTableComponent implements OnInit, OnChanges {

  @Output() interactionChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  @Input() interactionTab: boolean;

  private _term: string;
  private _interactorSpeciesFilter: string[];
  private _interactorTypeFilter: string[];
  private _interactionTypeFilter: string[];
  private _detectionMethodFilter: string[];
  private _hostOrganismFilter: string[];
  private _negativeFilter: boolean;
  private _miScoreMin: any;
  private _miScoreMax: any;
  private _interactionSelected: string;

  dataTable: any;

  columnView = 'interactions_columnView';

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
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.queryParams.filter(params => params.query)
      .subscribe(params => {
        this.term = params.query;
        this.interactorTypeFilter = params.interactorType ? params.interactorType.split('+') : [];
        this.interactorSpeciesFilter = params.interactorSpecies ? params.interactorSpecies.split('+') : [];
        this.interactionHostOrganismFilter = params.interactionHostOrganism ? params.interactionHostOrganism.split('+') : [];
        this.interactionTypeFilter = params.interactionType ? params.interactionType.split('+') : [];
        this.interactionDetectionMethodFilter = params.interactionDetectionMethod ? params.interactionDetectionMethod.split('+') : [];
        this.negativeFilter = params.negativeInteraction ? params.negativeInteraction : false;
        this.miScoreMax = params.miScoreMax ? params.miScoreMax : 1;
        this.miScoreMin = params.miScoreMin ? params.miScoreMin : 0;

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
        url: `${baseURL}/interaction/list/` + this.term,
        type: 'POST',
        data: function (d) {
          d.page = d.start / d.length;
          d.pageSize = d.length;
          d.interactorType = this.interactorTypeFilter;
          d.interactorSpecies = this.interactorSpeciesFilter;
          d.interactionType = this.interactionTypeFilter;
          d.interactionDetectionMethod = this.interactionDetectionMethodFilter;
          d.interactionHostOrganism = this.interactionHostOrganismFilter;
          d.negativeInteraction = this.negativeFilter;
          d.miScoreMin = this.miScoreMin;
          d.miScoreMax = this.miScoreMax;
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
                '   <a href="/intact/portal/details/interaction/' + full.ac + '">' +
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
          }},
        {
          data: 'experimentalRoleA',
          defaultContent: ' ',
          title: this.columnNames[14]
        },
        {
          data: 'experimentalRoleB',
          defaultContent: ' ',
          title: this.columnNames[15]
        }
      ]
    });

    $('#interactionsTable').on('change', 'input[type=\'checkbox\']', (e) => {

      const interactionSel = e.currentTarget.id;

      if (this.interactionSelected !== interactionSel) {
        $('#' + this.interactionSelected + ':checkbox').prop('checked', false);

        // TODO: To find another way to do the highlighting
        $(table.dataTableSettings).each(function () {
          $(this.aoData).each(function () {
            $(this.nTr).removeClass('rowSelected');
          })
        });

        this.interactionSelected = interactionSel;
        $(e.target.parentNode.parentNode.parentElement).addClass('rowSelected');

        // this.interactionChanged.emit(this.interactionSelected);
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

  }

  /************************* /
   /** GETTERS AND SETTERS ** /
   /*************************/

  public onPageChanged(pageIndex: number): void {
    this.pageChanged.emit(pageIndex);
  }


  get term(): string {
    return this._term;
  }

  set term(value: string) {
    this._term = value;
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

  get columnNames(): string[] {
    return this._columnNames;
  }

  set columnNames(value: string[]) {
    this._columnNames = value;
  }

  get interactionSelected(): string {
    return this._interactionSelected;
  }

  set interactionSelected(value: string) {
    this._interactionSelected = value;
  }
}
