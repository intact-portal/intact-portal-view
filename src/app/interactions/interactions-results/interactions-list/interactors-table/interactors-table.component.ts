import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import * as $ from 'jquery';
import 'datatables.net';
import {environment} from '../../../../../environments/environment';

const baseURL = environment.intact_portal_ws;

@Component({
  selector: 'iv-interactors-table',
  templateUrl: './interactors-table.component.html',
  styleUrls: ['./interactors-table.component.css']
})
export class InteractorsTableComponent implements OnInit, OnChanges {

  @Output() interactorChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  @Input() interactorTab: boolean;

  private _term: string;
  private _interactorSpeciesFilter: string[];
  private _interactorTypeFilter: string[];
  private _interactionTypeFilter: string[];
  private _interactionDetectionMethodFilter: string[];
  private _interactionHostOrganismFilter: string[];
  private _negativeFilter: boolean;
  private _miScoreMin: any;
  private _miScoreMax: any;
  private _currentPageIndex: any;
  private _interactorSelected: string;

  dataTable: any;

  columnView = 'interactors_columnView';

  columnNames: string[] =
    ['Names',
    'Description',
    'Accession',
    'Type',
    'Species',
    'Interactions found in current search',
    'Total interactions in all IntAct'];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.filter(params => params.query)
      .subscribe(params => {
        this.term = params.query;
        this.interactorTypeFilter = params.interactorType ? params.interactorType.split('+') : [];
        this.interactorSpeciesFilter = params.interactorSpecies ? params.interactorSpecies.split('+') : [];
        this.interactionHostOrganismFilter = params.interactionHostOrganism ? params.interactionHostOrganism.split('+') : [];
        this.interactionTypeFilter = params.interactionType ? params.interactionType.split('+') : [];
        this.interactionDetectionMethodFilter = params.interactionDetectionMethod ? params.interactionDetectionMethod.split('+') : [];
        this.negativeFilter = params.negativeInteraction ? params.negativeInteraction : false;
        this.miScoreMin = params.miScoreMin ? params.miScoreMin : 0;
        this.miScoreMax = params.miScoreMax ? params.miScoreMax : 1;
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

  private initDataTable(): void {
    const table: any = $('#interactorsTable');
    this.dataTable = table.DataTable({
      bSort: false,
      searching: false,
      paging: true,
      lengthMenu: [10, 25, 50, 75, 100, 150],
      pageLength: 10,
      pagingType: 'full_numbers',
      processing: true,
      serverSide: true,
      dom: '<"top"flip>rt<"bottom"ifp>',
      scrollX: true,
      ajax: {
        url: `${baseURL}/interactor/datatables/` + this.term,
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
          // d.page = this.currentPageIndex - 1;
        }.bind(this)
      },
      columns: [
        {
          data: 'interactorAc', defaultContent: ' ', title: 'Select',
          render: function (data, type, full, meta) {
            if (type === 'display') {
              return '<div class="margin-left-large">' +
                '<input type="checkbox" id="' + full.interactorAc + '" name="check" value="' + data + '"/>' +
                '</div>';
            }
            return data;
          }
        },
        {data: 'interactorName', defaultContent: ' ', title: 'Names'},
        {data: 'interactorDescription', defaultContent: ' ', title: 'Description'},
        {data: 'interactorAc', defaultContent: ' ', title: 'Accession'},
        {data: 'interactorType', defaultContent: ' ', title: 'Type'},
        {data: 'interactorSpecies', defaultContent: ' ', title: 'Species'},
        {data: 'interactionSearchCount', defaultContent: ' ', title: 'Interactions found in current search'},
        {data: 'interactionCount', defaultContent: ' ', title: 'Total interactions in all IntAct'}
      ]
    });

    $('#interactorsTable').on('change', 'input[type=\'checkbox\']', (e) => {

      const interactorSel = e.currentTarget.id;

      if (this.interactorSelected !== interactorSel) {
        $('#' + this.interactorSelected + ':checkbox').prop('checked', false);

        // TODO: To find another way to do the highlighting
        $(table.dataTableSettings).each(function () {
          $(this.aoData).each(function () {
            $(this.nTr).removeClass('rowSelected');
          })
        });

        this.interactorSelected = interactorSel;
        $(e.target.parentNode.parentNode.parentElement).addClass('rowSelected');

        var interactorSelectedEvent = new CustomEvent('tableInteractorSelected', {
          bubbles: true,
          detail: {
            interactorId:this.interactorSelected

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

        var tableUnselectedEvent = new CustomEvent('tableUnselected', {
          bubbles: true
        });
        document.dispatchEvent(tableUnselectedEvent);
      }
    });

  }


  public onPageChanged(pageIndex: number): void {
    this.pageChanged.emit(pageIndex);
  }


  /************************* /
   /** GETTERS AND SETTERS ** /
   /*************************/

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
}
