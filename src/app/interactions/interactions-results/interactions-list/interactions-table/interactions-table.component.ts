import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
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
  private _speciesNameFilter: string[];
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

  private _columnNames: string[] = ['Molecule A', 'Molecule B', 'Species A', 'Species B', 'Detection Method', 'Publication Id',
    'Interaction Type', 'Interaction Ac', 'Database', 'Confidence Value', 'Expansion Method',
    'Experimental Role A', 'Experimental Role B', 'Interactor Type A', 'Interactor Type B'];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.queryParams.filter(params => params.query)
      .subscribe(params => {
        this.term = params.query;
        this.interactorTypeFilter = params.interactorType ? params.interactorType.split('+') : [];
        this.speciesNameFilter = params.species ? params.species.split('+') : [];
        this.hostOrganismFilter = params.hostOrganism ? params.hostOrganism.split('+') : [];
        this.interactionTypeFilter = params.interactionType ? params.interactionType.split('+') : [];
        this.detectionMethodFilter = params.detectionMethod ? params.detectionMethod.split('+') : [];
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
      lengthMenu: [5, 10, 25, 50, 75, 100],
      pageLength: 5,
      pagingType: 'full_numbers',
      processing: true,
      serverSide: true,
      dom: '<"top"li>rt<"bottom"p><"clear">',
      scrollX: true,
      ajax: {
        url: `${baseURL}/interaction/datatables/` + this.term,
        type: 'POST',
        data: function (d) {
          d.page = d.start / d.length;
          d.pageSize = d.length;
          d.interactorType = this.interactorTypeFilter;
          d.species = this.speciesNameFilter;
          d.interactionType = this.interactionTypeFilter;
          d.detectionMethod = this.detectionMethodFilter;
          d.hostOrganism = this.hostOrganismFilter;
          d.negativeInteraction = this.negativeFilter;
          d.miScoreMin = this.miScoreMin;
          d.miScoreMax = this.miScoreMax;
        }.bind(this)
      },
      columns: [
        {
          data: 'binaryInteractionId', defaultContent: ' ', title: 'Select',
          render: function (data, type, full, meta) {
            if (type === 'display') {
              return '<div>' +
                '<input type="checkbox" id="' + full.binaryInteractionId + '" name="check" value="' + data + '"/>' +
                ' <span class="margin-left-medium">' +
                '   <a href="/intact-view/details/interaction/' + full.interactionAc + '">' +
                '     <i class="icon icon-common icon-search-document"></i>' +
                '   </a>' +
                ' </span>' +
                '</div>';
            }
            return data;
          }
        },
        {data: 'moleculeA', defaultContent: ' ', title: 'Molecule A'},
        {data: 'moleculeB', defaultContent: ' ', title: 'Molecule B'},
        {data: 'speciesA', defaultContent: ' ', title: 'Species A'},
        {data: 'speciesB', defaultContent: ' ', title: 'Species B'},
        {data: 'interactionDetectionMethod', defaultContent: ' ', title: 'Detection Method'},
        {
          data: 'publicationIdentifiers', defaultContent: ' ', title: 'Publication Identifiers',
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
        {data: 'interactionType', defaultContent: ' ', title: 'Interaction Type'},
        {data: 'interactionAc', defaultContent: ' ', title: 'Interaction Ac'},
        {data: 'sourceDatabase', defaultContent: ' ', title: 'Database'},
        {
          data: 'confidenceValues', defaultContent: ' ', title: 'Confidence Value',
          render: function (data, type, row, meta) {
            if (type === 'display') {
              return $.map(data, function (d, i) {
                return '<div>' +
                  '<span class="detailsConfidencesCell">' + d + '</span>' +
                  '</div>';
              }).join('');
            }
          }
        },
        {data: 'expansionMethod', defaultContent: ' ', title: 'Expansion Method'},
        {data: 'experimentalRoleA', defaultContent: ' ', title: 'Experimental Role A'},
        {data: 'experimentalRoleB', defaultContent: ' ', title: 'Experimental Role B'},
        {data: 'typeA', defaultContent: ' ', title: 'Interactor Type A'},
        {data: 'typeB', defaultContent: ' ', title: 'Interactor Type B'}
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

        //this.interactionChanged.emit(this.interactionSelected);
        const interactionSelectedEvent = new CustomEvent('tableInteractionSelected', {
          bubbles: true,
          detail: {
            interactionId:this.interactionSelected

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

  get speciesNameFilter(): string[] {
    return this._speciesNameFilter;
  }

  set speciesNameFilter(value: string[]) {
    this._speciesNameFilter = value;
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

  get detectionMethodFilter(): string[] {
    return this._detectionMethodFilter;
  }

  set detectionMethodFilter(value: string[]) {
    this._detectionMethodFilter = value;
  }

  get hostOrganismFilter(): string[] {
    return this._hostOrganismFilter;
  }

  set hostOrganismFilter(value: string[]) {
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
