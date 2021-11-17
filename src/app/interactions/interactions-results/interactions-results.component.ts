import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {InteractionsSearchService} from '../shared/service/interactions-search.service';
import {ProgressBarComponent} from '../../layout/loading-indicators/progress-bar/progress-bar.component';
import {SearchService} from '../../home-dashboard/search/service/search.service';
import {Filter, FilterService} from '../shared/service/filter.service';
import {NetworkViewService} from '../shared/service/network-view.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {NegativeFilterStatus} from './interactions-filters/negative-filter/negative-filter-status.model';
import {InteractionSearchResult} from '../shared/model/interactions-results/interaction/interaction-search-result.model';
import {InteractionsSearchResultData} from '../shared/model/interactions-results/interaction/interactions-search-data.model';

@UntilDestroy()
@Component({
  selector: 'ip-interactions-results',
  templateUrl: './interactions-results.component.html',
  styleUrls: ['./interactions-results.component.css']
})
export class InteractionsResultsComponent implements OnInit {

  private _hasResults = true;

  interactionsSearch: InteractionsSearchResultData;

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

    this.route.queryParamMap
      .pipe(untilDestroyed(this))
      .subscribe(paramMap => {
        this.search.fromParams(paramMap);
        this.filters.fromParams(paramMap);
        this.requestInteractionsResults();
      });

    this.filters.updates.pipe(untilDestroyed(this)).subscribe(() => this.updateURLParams());
    this.view.updates.pipe(untilDestroyed(this)).subscribe(() => this.updateURLParams());

  }

  private requestInteractionsResults() {
    this._hasResults = true;
    this.interactionsSearchService.queryFacets()
      .pipe(untilDestroyed(this))
      .subscribe((interactionsSearch) => {
        this.interactionsSearch = interactionsSearch;
        if (interactionsSearch.totalElements !== 0) {
          this.filters.initFacets(interactionsSearch.facetResultPage);
        } else if (interactionsSearch.facetResultPage.negative.find(value => value.value === 'true')?.valueCount > 0) {
          this.filters.initFacets(interactionsSearch.facetResultPage);
          this.filters.updateFilter(Filter.NEGATIVE, NegativeFilterStatus.POSITIVE_AND_NEGATIVE, true)
        } else {
          this._hasResults = false;
        }
        ProgressBarComponent.hideWithoutDelay();
      });
  }

  /** END OF EVENT EMITTERS **/

  private updateURLParams(): void {
    this.router.navigate([], {
      queryParams: {
        ...this.search.toURLParams(), ...this.filters.toParams(), ...this.view.toParams()
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
      const terms = this.title.split(/\s/);
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


}
