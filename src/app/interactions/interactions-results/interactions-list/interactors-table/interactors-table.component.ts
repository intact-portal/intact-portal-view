import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'iv-interactors-table',
  templateUrl: './interactors-table.component.html',
  styleUrls: ['./interactors-table.component.css']
})
export class InteractorsTableComponent implements OnInit {

  @Output() interactorChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  private _term: string;
  private _speciesNameFilter: string[];
  private _interactorTypeFilter: string[];
  private _interactionTypeFilter: string[];
  private _detectionMethodFilter: string[];
  private _hostOrganismFilter: string[];
  private _negativeFilter: boolean;
  private _miScoreMin: any;
  private _miScoreMax: any;
  private _currentPageIndex: any;
  private _interactorSelected: string;

  dataTable: any;

  columnView = 'interactors_columnView';

  columnNames: string[] = ['Names', 'Description', 'Accession', 'Type', 'Species', 'Interactions', 'Interactions in total'];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
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
        this.currentPageIndex = params.page ? Number(params.page) : 1;

        if (this.dataTable !== undefined) {
          const table: any = $('#interactorsTable');
          this.dataTable = table.DataTable().ajax.reload();
        }
      });

    this.initDataTable();
  }

  private initDataTable(): void {
    const table: any = $('#interactorsTable');
    this.dataTable = table.DataTable({
      bSort: false,
      searching: false,
      paging: true,
      lengthMenu: [10, 25, 50, 75, 100],
      pageLength: 10,
      pagingType: 'full_numbers',
      processing: true,
      serverSide: true,
      dom: '<"top"li>rt<"bottom"p><"clear">',
      ajax: {
        url: '/interactorService/interactor/datatables/' + this.term,
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
          // d.page = this.currentPageIndex - 1;
        }.bind(this)
      },
      columns: [
        {
          data: 'interactorId', defaultContent: ' ', title: 'Select',
          render: function (data, type, full, meta) {
            if (type === 'display') {
              return '<div class="margin-left-large">' +
                '<input type="checkbox" id="' + full.interactorId + '" name="check" value="' + data + '"/>' +
                '</div>';
            }
            return data;
          }
        },
        {data: 'interactorName', defaultContent: ' ', title: 'Names'},
        {data: 'description', defaultContent: ' ', title: 'Description'},
        {data: 'interactorId', defaultContent: ' ', title: 'Accession'},
        {data: 'interactorType', defaultContent: ' ', title: 'Type'},
        {data: 'species', defaultContent: ' ', title: 'Species'},
        {data: 'interactionSearchCount', defaultContent: ' ', title: 'Interactions'},
        {data: 'interactionCount', defaultContent: ' ', title: 'Interactions in total'}
      ]
    });
    //
    //
    // $('#interactorsTable').on( 'page.dt', function () {
    //
    //   const info = this.dataTable.page.info();
    //   const currentPage = info.page;
    //   console.log('Current page --- ' , info.page + 1);
    //   // this.dataTable.page(currentPage).draw('page');
    //
    //   // this.onPageChanged(info.page + 1);
    // }.bind(this));
    //


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

        this.interactorChanged.emit(this.interactorSelected);

      } else {
        // None is selected, remove class
        this.interactorSelected = undefined;
        $(table.dataTableSettings).each(function () {
          $(this.aoData).each(function () {
            $(this.nTr).removeClass('rowSelected');
          })
        });

        this.interactorChanged.emit(this.interactorSelected);
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
