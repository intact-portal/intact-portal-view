import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment';

const baseURL = environment.graph_ws;


@Injectable()
export class NetworkSearchService {

  constructor(private http: HttpClient) { }

  getInteractionNetwork(query: string,
                        hostOrganismFilter: string[],
                        interactorTypeFilter: string[],
                        speciesFilter: string[],
                        interactionTypeFilter: string[],
                        detectionMethodFilter: string[],
                        miScoreMin: any,
                        miScoreMax: any,
                        negativeFilter: any,
                        compoundGraph :boolean): Observable<any> {

    query = query.trim();

    const params = new HttpParams()
      .set('query', query)
      .set('interactionTypeFilter', interactionTypeFilter.toString())
      .set('interactorTypeFilter', interactorTypeFilter.toString())
      .set('speciesFilter', speciesFilter.toString())
      .set('hostOrganismFilter', hostOrganismFilter.toString())
      .set('detectionMethodFilter', detectionMethodFilter.toString())
      .set('minMiScore', miScoreMin.toString())
      .set('maxMiScore', miScoreMax.toString())
      .set('isNegativeFilter', negativeFilter.toString())
      .set('isCompound', compoundGraph.toString());


    const options = query ? {params: params} : {};


    return this.http.get(`${baseURL}/getJson`, options)
      .catch(this.handleError);
  }


  private handleError(err: HttpErrorResponse | any): Observable<any> {
    if (err.error instanceof Error) {
      return Observable.throw(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }
}
