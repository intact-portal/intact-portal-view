import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'iv-interactions-results',
  templateUrl: './interactions-results.component.html',
  styleUrls: ['./interactions-results.component.css']
})
export class InteractionsResultsComponent implements OnInit {

  private _term: string;
  private _moleculesFilter: string[];
  private _speciesFilter: string[];
  private _interactionTypeFilter: string[];
  private _detectionMethodFilter: string[];

  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle('Intact - Search Results');

    this.route.queryParams
      .filter(params => params.query)
      .subscribe(params => {
        console.log(params);

        this._term = params.query;
        this._moleculesFilter = params.moleculeType ? params.moleculeType.split('+') : [];
        this._speciesFilter = params.species ? params.species.split('+') : [];
        this._interactionTypeFilter = params.interactionType ? params.interactionType.split('+') : [];
        this._detectionMethodFilter = params.detectionMethod ? params.detectionMethod.split('+') : [];
    });
  }

  public onMoleculesFilterChanged(filter: string[]): void {
    this.moleculesFilter = filter;
    this.updateURLParams();
  }

  public onSpeciesFilterChanged(filter: string[]): void {
    this.speciesFilter = filter;
    this.updateURLParams();
  }

  public onInteractionTypeFilterChanged(filter: string[]): void {
    this.interactionTypeFilter = filter;
    this.updateURLParams();
  }

  public onDetectionMethodFilterChanged(filter: string[]): void {
    this.detectionMethodFilter = filter;
    this.updateURLParams();
  }

  public onResetAllFilters(): void {
    this.moleculesFilter = [];
    this.speciesFilter = [];
    this.interactionTypeFilter = [];
    this.detectionMethodFilter = [];
    this.updateURLParams();
  }

  private updateURLParams(): void {
    const params: NavigationExtras = {};
    params['query'] = this._term;

    if (this.moleculesFilter !== undefined && this.moleculesFilter.length !== 0) {
      params['moleculeType'] = this.prepareFiltersForParams(this.moleculesFilter);
    }
    if (this.speciesFilter !== undefined && this.speciesFilter.length !== 0) {
      params['species'] = this.prepareFiltersForParams(this.speciesFilter);
    }
    if (this.interactionTypeFilter !== undefined && this.interactionTypeFilter.length !== 0) {
      params['interactionType'] = this.prepareFiltersForParams(this.interactionTypeFilter);
    }
    if (this.detectionMethodFilter !== undefined && this.detectionMethodFilter.length !== 0) {
      params['detectionMethod'] = this.prepareFiltersForParams(this.detectionMethodFilter);
    }

    this.router.navigate([], { queryParams: params });
  }

  private prepareFiltersForParams(filter: string[]): string {
    return filter.toString().replace(/,/g, '+');
  }

  /** GETTERS AND SETTERS **/

  get term(): string {
    return this._term;
  }

  set term(value: string) {
    this._term = value;
  }
  get moleculesFilter(): string[] {
    return this._moleculesFilter;
  }

  set moleculesFilter(value: string[]) {
    this._moleculesFilter = value;
  }

  get speciesFilter(): string[] {
    return this._speciesFilter;
  }

  set speciesFilter(value: string[]) {
    this._speciesFilter = value;
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
}
