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
        console.log(this._term);
        console.log(this._moleculesFilter);
    });
  }

  public onMoleculesFilterChanged(filter: string[]): void {
    this.moleculesFilter = filter;
    this.updateURLParams();
  }

  private updateURLParams(): void {
    const params: NavigationExtras = {};
    params['query'] = this._term;

    if (this._moleculesFilter !== undefined && this._moleculesFilter.length !== 0) {
      params['moleculeType'] = this.prepareFiltersForParams(this.moleculesFilter);
    }

    this.router.navigate([], { queryParams: params });
  }

  private prepareFiltersForParams(filter: string[]): string {
    return filter.toString().replace(/,/g, '+');
  }

  /** GETTERS AND SETTERS **/

  get moleculesFilter(): string[] {
    return this._moleculesFilter;
  }

  set moleculesFilter(value: string[]) {
    this._moleculesFilter = value;
  }


  get term(): string {
    return this._term;
  }

  set term(value: string) {
    this._term = value;
  }
}
