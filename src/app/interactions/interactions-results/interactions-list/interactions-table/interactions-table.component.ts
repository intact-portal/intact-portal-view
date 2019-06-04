import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InteractionsSearchResult} from '../../../shared/model/interactions-results/interaction/interactions-search.model';
import {InteractionsSearchService} from '../../../shared/service/interactions-search.service';
import {ActivatedRoute} from '@angular/router';
// declare const $: any;
import * as $ from 'jquery';
import 'datatables.net';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'iv-interactions-table',
  templateUrl: './interactions-table.component.html',
  styleUrls: ['./interactions-table.component.css']
})
export class InteractionsTableComponent implements OnInit, AfterViewInit {

  private _interactionsSearch: InteractionsSearchResult;

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

  dataTable: any;

  constructor( private route: ActivatedRoute ) {
  }

  ngOnInit() {
    console.log('Interaction type filter here', this.interactionTypeFilter);

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

        console.log('Params here: ', params);

        if (this.dataTable !== undefined) {
          const table: any = $('#interactionsTable');
          this.dataTable = table.DataTable().ajax.reload();
        }

      });

    this.initDataTable();
  }

  ngAfterViewInit(): void {
    console.log('After view is called ', this.interactionTypeFilter);
  }

  private initDataTable(): void {
    const table: any = $('#interactionsTable');
    this.dataTable = table.DataTable({
      bSort: false,
      searching: false,
      paging: true,
      lengthMenu: [ 10, 25, 50, 75, 100 ],
      pageLength: 10,
      pagingType: 'full_numbers',
      processing: true,
      serverSide: true,
      dom: '<"top"li>rt<"bottom"p><"clear">',
      ajax: {
        url: '/interactionService/interaction/datatables/' + this.term,
        type: 'POST',
        data: function ( d ) {
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
        {data: 'interactionAc', defaultContent: ' ', title: 'Select',
          render: function (data, type, full, meta) {
            if (type === 'display') {
              return '<div>' +
                '<input type="checkbox" id="' + full.interactionAc + '" name="check" value="' + data + '"/>' +
                ' <span class="margin-left-medium">' +
                '   <a href="/details/interaction/' + full.interactionAc + '">' +
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
        {data: 'publicationIdentifiers', defaultContent: ' ', title: 'Publication Identifiers',
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
        {data: 'confidenceValues', defaultContent: ' ', title: 'Confidence Value',
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


  }
    // openDetailsPage(interaction: Interaction) {
  //   this.router.navigate(['/details/interaction', interaction.ac]);
  // }

  /************************* /
   /** GETTERS AND SETTERS ** /
   /*************************/

  get interactionsSearch(): InteractionsSearchResult {
    return this._interactionsSearch;
  }

  @Input()
  set interactionsSearch(value: InteractionsSearchResult) {
    this._interactionsSearch = value;
    console.log(this._interactionsSearch);

  }

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
}
