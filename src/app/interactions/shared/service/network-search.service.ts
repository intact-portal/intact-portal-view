import {Observable, throwError as observableThrowError} from 'rxjs';
import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {NetworkLegend} from '../model/interaction-legend/network-legend';
import {FilterService} from './filter.service';
import {SearchService} from '../../../home-dashboard/search/service/search.service';
import {catchError} from 'rxjs/operators';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

const baseURL = environment.intact_portal_ws;


@Injectable()
export class NetworkSearchService {

  constructor(private http: HttpClient, private reporter: GoogleAnalyticsService, private search: SearchService, private filters: FilterService) {
  }

  getInteractionNetwork(compoundGraph: boolean): Observable<{ data: { data: any, group: string }[], legend: NetworkLegend }> {
    const params = new HttpParams({fromObject: {...this.filters.toParams(), ...this.search.toParams()}})
      .set('isCompound', compoundGraph.toString());
    return this.http.post(`${baseURL}/network/getInteractions`, params)
      .pipe(
        catchError(this.handleError),
      );
  }


  private handleError(err: HttpErrorResponse | any): Observable<any> {
    if (this.reporter) {
      this.reporter.exception(err);
    }
    if (!(err.error instanceof Error)) {
      console.error(err.message ? err.message : err.toString());
    }
    return observableThrowError(err);
  }
}
