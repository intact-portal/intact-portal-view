import {Component, Input, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

import 'rxjs/add/operator/filter';
import {InteractionsSearchResultData} from '../shared/model/interactions-results/interaction/interactions-search-data.model';
import {InteractionsSearchService} from '../shared/service/interactions-search.service';
import {ProgressBarComponent} from "../../layout/loading-indicators/progress-bar/progress-bar.component";
import {EFilter} from "./interactions-filters/interactions-filters.component";
import {SearchService} from "../../home-dashboard/search/service/search.service";

@Component({
  selector: 'ip-interactions-results',
  templateUrl: './interactions-results.component.html',
  styleUrls: ['./interactions-results.component.css']
})
export class InteractionsResultsComponent implements OnInit {
  private _query: string;
  private _batchSearch: boolean;
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

  private _interactionsSearch: InteractionsSearchResultData;

  // Interactors selected checkboxes list from the results-list
  @Input() interactorSelected: string;
  @Input() interactionSelected: string;

  // private _termsSearch: any;
  private _hasResults = true;

  constructor(private titleService: Title,
              public search: SearchService,
              private route: ActivatedRoute,
              private router: Router,
              private interactionsSearchService: InteractionsSearchService) {
  }

  ngOnInit() {
    this.titleService.setTitle('IntAct - Search Results');

    this.route.queryParams
      .subscribe(params => {
        this.query = params.query ? params.query : this.search.query;
        this.batchSearch = this.search.isBatchSearch;
        this.interactorSpeciesFilter = params.interactorSpecies ? params.interactorSpecies.split('+') : [];
        this.interactorTypeFilter = params.interactorType ? params.interactorType.split('+') : [];
        this.interactionTypeFilter = params.interactionType ? params.interactionType.split('+') : [];
        this.interactionDetectionMethodFilter = params.interactionDetectionMethod ? params.interactionDetectionMethod.split('+') : [];
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
      this.query,
      this.batchSearch,
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
      this.interactionsSearch = interactionsSearch.data;
      ProgressBarComponent.hideWithoutDelay();
      if (this.interactionsSearch.totalElements !== 0) {
        this._hasResults = true;
        this.interactionsSearchService.totalElements = this.interactionsSearch.totalElements;
      } else {
        this._hasResults = false;
      }
    })
  }

  /** EVENT EMITTERS **/

  public onInteractorSpeciesFilterChanged(filter: string[]): void {
    this.interactorSpeciesFilter = filter;
    this.resetSelection();
    this.updateURLParams();
  }

  public onInteractorTypeFilterChanged(filter: string[]): void {
    this.interactorTypeFilter = filter;
    this.resetSelection()
    this.updateURLParams();
  }

  public onInteractionTypeFilterChanged(filter: string[]): void {
    this.interactionTypeFilter = filter;
    this.resetSelection()
    this.updateURLParams();
  }

  public onInteractionDetectionMethodFilterChanged(filter: string[]): void {
    this.interactionDetectionMethodFilter = filter;
    this.resetSelection()
    this.updateURLParams();
  }

  public onInteractionHostOrganismFilterChanged(filter: string[]): void {
    this.interactionHostOrganismFilter = filter;
    this.resetSelection()
    this.updateURLParams();
  }

  public onInteractionNegativeFilterChanged(filter: boolean): void {
    this.negativeFilter = filter;
    this.resetSelection()
    this.updateURLParams();
  }

  public onInteractionMiScoreMinFilterChanged(filter: any): void {
    this.miScoreMin = filter;
    this.resetSelection()
    this.updateURLParams();
  }

  public onInteractionMiScoreMaxFilterChanged(filter: any): void {
    this.miScoreMax = filter;
    this.resetSelection()
    this.updateURLParams();
  }

  public onInteractionIntraSpeciesFilterChanged(filter: boolean): void {
    this.intraSpeciesFilter = filter;
    this.resetSelection()
    this.updateURLParams();
  }

  private resetSelection() {
    this.interactorSelected = undefined;
    this.interactionSelected = undefined;
  }

  onResetFilter(filter: EFilter) {
    switch (filter) {
      case EFilter.SPECIES:
        this.interactorSpeciesFilter = [];
        this.intraSpeciesFilter = false;
        break;
      case EFilter.INTERACTOR_TYPE:
        this.interactorTypeFilter = [];
        break;
      case EFilter.INTERACTION_TYPE:
        this.interactionTypeFilter = [];
        break;
      case EFilter.DETECTION_METHOD:
        this.interactionDetectionMethodFilter = [];
        break;
      case EFilter.HOST_ORGANISM:
        this.interactionHostOrganismFilter = [];
        break;
      case EFilter.NEGATIVE:
        this.negativeFilter = false;
        break
      case EFilter.MI_SCORE:
        this.miScoreMin = 0;
        this.miScoreMax = 1;
        break;
    }
    this.resetSelection()
    this.updateURLParams();
  }

  public onResetAllFilters(): void {
    this.interactorSpeciesFilter = [];
    this.interactorTypeFilter = [];
    this.interactionDetectionMethodFilter = [];
    this.interactionTypeFilter = [];
    this.interactionHostOrganismFilter = [];
    this.negativeFilter = false;
    this.miScoreMin = 0;
    this.miScoreMax = 1;
    this.intraSpeciesFilter = false;
    this.resetSelection()
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
    if (!this.batchSearch) {
      params['query'] = this.query;
    }
    params['page'] = this.currentPageIndex;

    if (this.batchSearch !== undefined && this.batchSearch !== false) {
      params['batchSearch'] = this.batchSearch;
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

    this.router.navigate([], {queryParams: params});
  }

  private prepareFiltersForParams(filter: string[]): string {
    return filter.toString().replace(/,/g, '+');
  }

  /** GETTERS AND SETTERS **/
  get title(): string {
    return this.search.title ? this.search.title : this.query;
  }

  get isLongTitle(): boolean {
    return this.title.length > 50;
  }

  get shortTerms(): string {
    if (!this.isLongTitle) {
      return this.title;
    } else {
      let terms = this.title.split(/\s/);
      let last = terms.pop();
      while (last.length === 0 || !last.trim()) {
        last = terms.pop();
      }
      return `${terms.shift()} ... ${last}`
    }
  }

  get hasResults(): boolean {
    return this._hasResults;
  }

  get query(): string {
    return this._query;
  }

  set query(value: string) {
    this._query = value;
  }

  get batchSearch(): boolean {
    return this._batchSearch;
  }

  set batchSearch(value: boolean) {
    this._batchSearch = value;
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

  get interactionsSearch(): InteractionsSearchResultData {
    return this._interactionsSearch;
  }

  set interactionsSearch(value: InteractionsSearchResultData) {
    this._interactionsSearch = value;
  }
}
