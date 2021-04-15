import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {InteractionsSearchResultData} from '../shared/model/interactions-results/interaction/interactions-search-data.model';
import {InteractionsSearchService} from '../shared/service/interactions-search.service';
import {ProgressBarComponent} from "../../layout/loading-indicators/progress-bar/progress-bar.component";
import {SearchService} from "../../home-dashboard/search/service/search.service";
import {FilterService} from "../shared/service/filter.service";
import {NetworkViewService} from "../shared/service/network-view.service";

@Component({
  selector: 'ip-interactions-results',
  templateUrl: './interactions-results.component.html',
  styleUrls: ['./interactions-results.component.css']
})
export class InteractionsResultsComponent implements OnInit {

  private _currentPageIndex: number;

  private _interactionsSearch: InteractionsSearchResultData;

  private _hasResults = true;

  constructor(private titleService: Title,
              public search: SearchService,
              private route: ActivatedRoute,
              private router: Router,
              private interactionsSearchService: InteractionsSearchService,
              private view: NetworkViewService,
              public filters: FilterService) {
  }

  ngOnInit() {
    this.titleService.setTitle('IntAct - Search Results');

    this.route.queryParamMap.subscribe(paramMap => {
      this.currentPageIndex = paramMap.has('page') ? Number(paramMap.get('page')) : 1
      this.search.fromParams(paramMap);
      this.filters.fromParams(paramMap);
      this.requestInteractionsResults();
    })

    this.filters.updates.subscribe(() => this.updateURLParams());
    this.view.updates.subscribe(() => this.updateURLParams());

  }

  private requestInteractionsResults() {
    this.interactionsSearchService.getAllInteractionsAndFacetsQuery(
      this.currentPageIndex
    ).subscribe(interactionsSearch => {
      this.interactionsSearch = interactionsSearch.data;
      if (this.interactionsSearch.totalElements !== 0) {
        this._hasResults = true;
        this.filters.initFacets(this.interactionsSearch.facetResultPage);
        this.interactionsSearchService.totalElements = this.interactionsSearch.totalElements;
      } else {
        this._hasResults = false;
      }
      ProgressBarComponent.hideWithoutDelay();
    })
  }


  public onPageChanged(pageIndex: number): void {
    this.currentPageIndex = pageIndex;
    this.updateURLParams();
  }

  /** END OF EVENT EMITTERS **/

  private updateURLParams(): void {
    this.router.navigate([], {
      queryParams: {
        ...this.search.toURLParams(), ...this.filters.toParams(), ...this.view.toParams(),
        page: this.currentPageIndex
      }
    });
  }


  /** GETTERS AND SETTERS **/
  get title(): string {
    return this.search.title ? this.search.title : this.search.query;
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
