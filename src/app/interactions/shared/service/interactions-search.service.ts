import {Observable, throwError as observableThrowError} from 'rxjs';

import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {InteractionSearchResult} from '../model/interactions-results/interaction/interaction-search-result.model';
import {FilterService} from './filter.service';
import {SearchService} from '../../../home-dashboard/search/service/search.service';
import {InteractionsSearchResultData} from '../model/interactions-results/interaction/interactions-search-data.model';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

const baseURL = environment.intact_portal_ws;

@Injectable()
export class InteractionsSearchService {

  constructor(private http: HttpClient, private reporter: GoogleAnalyticsService, private search: SearchService, private filters: FilterService) {
  }

  queryFacets(): Observable<InteractionsSearchResultData> {
    const params = new HttpParams({fromObject: {...this.search.toParams(), ...this.filters.toParams()}});

    return this.http.post<InteractionSearchResult>(`${baseURL}/interaction/findInteractionFacets`, params).pipe(
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse | any): Observable<any> {
    this.reporter.exception(err);
    if (err.error instanceof Error) {
      return observableThrowError(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }
}
