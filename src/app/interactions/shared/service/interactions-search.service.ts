import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {InteractionsSearchResult} from '../model/interactions-results/interaction/interactions-search.model';

@Injectable()
export class InteractionsSearchService {

  constructor(private http: HttpClient) { }

  getAllInteractions(query: string): Observable<InteractionsSearchResult> {
    // const params = new HttpParams()
    //   .set('query', query);
    query = query.trim();
    // const options =  query ?
    //   {params: new HttpParams().append('query', query)} : {};

    return this.http.get('/interactionService/interactions/findInteractions/' + query)
      .catch(this.handleError);
  }

  getAllInteractionsAndFacetsQuery(query: string,
                                   interactionSpeciesFilter: string[],
                                   interactionTypeFilter: string[],
                                   detectionMethodFilter: string[],
                                   organismFilter: string[],
                                   miScoreMin: any,
                                   miScoreMax: any,
                                   negativeFilter: any,
                                   currentPageIndex = 1, pageSize = 20): Observable<InteractionsSearchResult> {

    query = query.trim();

    const params = new HttpParams()
      .set('interactionTypeFilter', interactionTypeFilter.toString())
      .set('species', interactionSpeciesFilter.toString())
      .set('detectionMethodFilter', detectionMethodFilter.toString())
      .set('hostOrganismFilter', organismFilter.toString())
      .set('minMiscore', miScoreMin.toString())
      .set('maxMiscore', miScoreMax.toString())
      .set('isNegativeFilter', negativeFilter.toString())
      .set('page', currentPageIndex.toString())
      .set('pageSize', pageSize.toString());

    const options = query ? {params: params} : {};

    return this.http.get('/interactionService/interactions/findInteractionWithFacet/' + query, options)
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
