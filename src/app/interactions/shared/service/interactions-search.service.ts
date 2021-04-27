import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment';
import {InteractionSearchResult} from '../model/interactions-results/interaction/interaction-search-result.model';
import {GoogleAnalyticsService} from '../../../shared/service/google-analytics/google-analytics.service';
import {FilterService} from './filter.service';
import {SearchService} from '../../../home-dashboard/search/service/search.service';
import {InteractionsSearchResultData} from '../model/interactions-results/interaction/interactions-search-data.model';

const baseURL = environment.intact_portal_ws;

@Injectable()
export class InteractionsSearchService {

  private _totalElements = 0;
  private _page = 1;
  private _pageSize = 20;

  constructor(private http: HttpClient, private reporter: GoogleAnalyticsService, private search: SearchService, private filters: FilterService) {
  }

  getAllInteractionsAndFacetsQuery(): Observable<InteractionsSearchResultData> {
        let params = new HttpParams({fromObject:{...this.search.toParams(), ...this.filters.toParams()}})

    return this.http.post<InteractionSearchResult>(`${baseURL}/interaction/findInteractionFacets`, params)
      .catch(this.handleError);
  }

  get totalPages() {
    try {
      return Math.ceil(this._totalElements / this._pageSize);
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  get page(): number {
    return this._page;
  }

  set page(value: number) {
    if (value !== this.page) {
      this._page = value;
    }
  }

  get totalElements(): number {
    return this._totalElements;
  }

  set totalElements(value: number) {
    this._totalElements = value;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(value: number) {
    this._pageSize = value;
  }

  private handleError(err: HttpErrorResponse | any): Observable<any> {
    this.reporter.reportError(err);
    if (err.error instanceof Error) {
      return Observable.throw(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }
}
