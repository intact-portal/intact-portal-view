import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {environment} from '../../../../environments/environment';
import {NetworkLegend} from '../model/interaction-legend/network-legend';
import {GoogleAnalyticsService} from '../../../shared/service/google-analytics/google-analytics.service';
import {FilterService} from './filter.service';
import {SearchService} from '../../../home-dashboard/search/service/search.service';

const baseURL = environment.intact_portal_ws;


@Injectable()
export class NetworkSearchService {

  constructor(private http: HttpClient, private reporter: GoogleAnalyticsService, private search: SearchService, private filters: FilterService) {
  }

  getInteractionNetwork(compoundGraph: boolean): Observable<{ data: { data: any, group: string }[], legend: NetworkLegend }> {
    const params = new HttpParams({fromObject: {...this.filters.toParams(), ...this.search.toParams()}})
      .set('isCompound', compoundGraph.toString());
    return this.http.post(`${baseURL}/network/getInteractions`, params)
      .catch(this.handleError);
  }


  private handleError(err: HttpErrorResponse | any): Observable<any> {
    if (this.reporter) {
      this.reporter.reportError(err);
    }
    if (!(err.error instanceof Error)) {
      console.error(err.message ? err.message : err.toString());
    }
    return Observable.throw(err);
  }
}
