import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment';
import {NetworkLegend} from "../model/interaction-legend/network-legend";
import {GoogleAnalyticsService} from "../../../shared/service/google-analytics/google-analytics.service";
import {FilterService} from "./filter.service";
import {SearchService} from "../../../home-dashboard/search/service/search.service";

const baseURL = environment.intact_portal_ws;


@Injectable()
export class NetworkSearchService {

  constructor(private http: HttpClient, private reporter: GoogleAnalyticsService, private search: SearchService, private filters: FilterService) {
  }

  getInteractionNetwork(query: string,
                        batchSearchFilter: boolean,
                        interactorSpeciesFilter: string[],
                        interactorTypeFilter: string[],
                        interactionDetectionMethodFilter: string[],
                        interactionTypeFilter: string[],
                        interactionHostOrganismFilter: string[],
                        negativeFilter: any,
                        miScoreMin: any,
                        miScoreMax: any,
                        intraSpeciesFilter: boolean,
                        compoundGraph: boolean): Observable<{ data: { data: any, group: string }[], legend: NetworkLegend }> {

    query = query.trim();

    const params = new HttpParams()
      .set('query', query)
      .set('batchSearch', batchSearchFilter.toString())
      .set('interactorSpeciesFilter', interactorSpeciesFilter.toString())
      .set('interactorTypeFilter', interactorTypeFilter.toString())
      .set('interactionDetectionMethodFilter', interactionDetectionMethodFilter.toString())
      .set('interactionTypeFilter', interactionTypeFilter.toString())
      .set('interactionHostOrganismFilter', interactionHostOrganismFilter.toString())
      .set('isNegativeFilter', negativeFilter.toString()) // By default should be always false
      .set('minMiScore', miScoreMin.toString())
      .set('maxMiScore', miScoreMax.toString())
      .set('interSpecies', intraSpeciesFilter.toString()) // TODO Noe change the name of the param in the web service the meaning is the opposite
      .set('isCompound', compoundGraph.toString());

    return this.http.post(`${baseURL}/network/getInteractions`, params)
      .catch(NetworkSearchService.handleError);
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
