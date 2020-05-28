import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

import 'rxjs/add/operator/filter';
import {InteractionsSearchResult} from '../shared/model/interactions-results/interaction/interactions-search.model';
import {InteractionsSearchService} from '../shared/service/interactions-search.service';

@Component({
  selector: 'ip-interactions-results',
  templateUrl: './interactions-results.component.html',
  styleUrls: ['./interactions-results.component.css']
})
export class InteractionsResultsComponent implements OnInit {

  private _terms: string;
  private _batchSearchFilter: boolean;
  private _interactorSpeciesFilter: string[];
  private _interactorTypeFilter: string[];
  private _detectionMethodFilter: string[];
  private _interactionTypeFilter: string[];
  private _hostOrganismFilter: string[];
  private _negativeFilter: boolean;
  private _intraSpeciesFilter: boolean;
  private _miScoreMin: any;
  private _miScoreMax: any;

  private _currentPageIndex: number;

  private _interactionsSearch: InteractionsSearchResult;

  // Interactors selected checkboxes list from the results-list
  @Input() interactorSelected: string;
  @Input() interactionSelected: string;

  // private _termsSearch: any;

  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private router: Router,
              private interactionsSearchService: InteractionsSearchService) { }

  ngOnInit() {
    this.titleService.setTitle('IntAct - Search Results');

    this.route.queryParams
      .filter(params => params.query)
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
        this.interactorSelected = params.interactorSelected ? params.interactorSelected.split('+') : undefined;
        this.interactionSelected = params.interactionSelected ? params.interactionSelected.split('+') : undefined;
        this.currentPageIndex = params.page ? Number(params.page) : 1;

        this.requestInteractionsResults();
    });
  }

  private requestInteractionsResults() {
    this.interactionsSearchService.getAllInteractionsAndFacetsQuery(
      this.terms,
      this.batchSearchFilter,
      this.interactorSpeciesFilter,
      this.interactorTypeFilter,
      this.interactionDetectionMethodFilter,
      this.interactionTypeFilter,
      this.interactionHostOrganismFilter,
      this.negativeFilter,
      this.miScoreMin,
      this.miScoreMax,
      this.intraSpeciesFilter,
      this.currentPageIndex
    ).subscribe(interactionsSearch => {
      this.interactionsSearch = interactionsSearch;
      if (this.interactionsSearch.totalElements !== 0 ) {
        this.interactionsSearchService.totalElements = this.interactionsSearch.totalElements;
      }
    })
  }

  /** EVENT EMITTERS **/

  public onInteractorSpeciesFilterChanged(filter: string[]): void {
    this.interactorSpeciesFilter = filter;
    this.interactorSelected = undefined;
    this.interactionSelected = undefined;
    this.updateURLParams();
  }

  public onInteractorTypeFilterChanged(filter: string[]): void {
    this.interactorTypeFilter = filter;
    this.interactorSelected = undefined;
    this.interactionSelected = undefined;
    this.updateURLParams();
  }

  public onInteractionTypeFilterChanged(filter: string[]): void {
    this.interactionTypeFilter = filter;
    this.interactorSelected = undefined;
    this.interactionSelected = undefined;
    this.updateURLParams();
  }

  public onInteractionDetectionMethodFilterChanged(filter: string[]): void {
    this.interactionDetectionMethodFilter = filter;
    this.interactorSelected = undefined;
    this.interactionSelected = undefined;
    this.updateURLParams();
  }

  public onInteractionHostOrganismFilterChanged(filter: string[]): void {
    this.interactionHostOrganismFilter = filter;
    this.interactorSelected = undefined;
    this.interactionSelected = undefined;
    this.updateURLParams();
  }

  public onInteractionNegativeFilterChanged(filter: boolean): void {
    this.negativeFilter = filter;
    this.interactorSelected = undefined;
    this.interactionSelected = undefined;
    this.updateURLParams();
  }

  public onInteractionMiScoreMinFilterChanged(filter: any): void {
    this.miScoreMin = filter;
    this.interactorSelected = undefined;
    this.interactionSelected = undefined;
    this.updateURLParams();
  }

  public onInteractionMiScoreMaxFilterChanged(filter: any): void {
    this.miScoreMax = filter;
    this.interactorSelected = undefined;
    this.interactionSelected = undefined;
    this.updateURLParams();
  }

  public onInteractionIntraSpeciesFilterChanged(filter: boolean): void {
    this.intraSpeciesFilter = filter;
    this.interactorSelected = undefined;
    this.interactionSelected = undefined;
    this.updateURLParams();
  }

  public onResetAllFilters(): void {
    this.interactorTypeFilter = [];
    this.interactorSpeciesFilter = [];
    this.interactionDetectionMethodFilter = [];
    this.interactionTypeFilter = [];
    this.interactionHostOrganismFilter = [];
    this.negativeFilter = false;
    this.miScoreMin = 0;
    this.miScoreMax = 1;
    this.intraSpeciesFilter = false;
    this.interactorSelected = undefined;
    this.interactionSelected = undefined;
    this.updateURLParams();
  }

  public onInteractorSelectedChanged(interactor: string): void {
      this.interactorSelected = interactor;
      this.updateURLParams();
  }
  public onInteractionsSelectedChanged(interaction: string): void {
    this.interactionSelected = interaction;
    this.updateURLParams();
  }

  public onPageChanged(pageIndex: number): void {
    this.currentPageIndex = pageIndex;
    // this.interactionsSearchService.page = pageIndex;
    // this.interactorsSearchService.page = pageIndex;
    this.updateURLParams();
  }

  /** END OF EVENT EMITTERS **/

  private updateURLParams(): void {
    const params: NavigationExtras = {};
    params['query'] = this.terms;
    params['page'] = this.currentPageIndex;

    if (this.batchSearchFilter !== undefined && this.batchSearchFilter !== false) {
      params['batchSearch'] = this.batchSearchFilter;
    }
    if (this.interactorTypeFilter !== undefined && this.interactorTypeFilter.length !== 0) {
      params['interactorType'] = this.prepareFiltersForParams(this.interactorTypeFilter);
    }
    if (this.interactorSpeciesFilter !== undefined && this.interactorSpeciesFilter.length !== 0) {
      params['interactorSpecies'] = this.prepareFiltersForParams(this.interactorSpeciesFilter);
    }
    if (this.interactionDetectionMethodFilter !== undefined && this.interactionDetectionMethodFilter.length !== 0) {
      params['interactionDetectionMethod'] = this.prepareFiltersForParams(this.interactionDetectionMethodFilter);
    }
    if (this.interactionTypeFilter !== undefined && this.interactionTypeFilter.length !== 0) {
      params['interactionType'] = this.prepareFiltersForParams(this.interactionTypeFilter);
    }
    if (this.interactionHostOrganismFilter !== undefined && this.interactionHostOrganismFilter.length !== 0) {
      params['interactionHostOrganism'] = this.prepareFiltersForParams(this.interactionHostOrganismFilter);
    }
    if (this.negativeFilter !== undefined && this.negativeFilter !== false) {
      params['negativeInteraction'] = this.negativeFilter;
    }
    if (this.miScoreMin !== undefined && this.miScoreMin !== '') {
      params['miScoreMin'] = this.miScoreMin;
    }
    if (this.miScoreMax !== undefined && this.miScoreMax !== '') {
      params['miScoreMax'] = this.miScoreMax;
    }
    if (this.intraSpeciesFilter !== undefined && this.intraSpeciesFilter !== false) {
      params['intraSpecies'] = this.intraSpeciesFilter;
    }

    this.router.navigate([], { queryParams: params });
  }

  private prepareFiltersForParams(filter: string[]): string {
    return filter.toString().replace(/,/g, '+');
  }


  /** GETTERS AND SETTERS **/

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

  get currentPageIndex(): number {
    return this._currentPageIndex;
  }

  set currentPageIndex(value: number) {
    this._currentPageIndex = value;
  }

  get interactionsSearch(): InteractionsSearchResult {
    return this._interactionsSearch;
  }

  set interactionsSearch(value: InteractionsSearchResult) {
    this._interactionsSearch = value;
  }

}
