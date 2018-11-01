import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {InteractionsSearchResult} from '../model/interactions-results/interaction/interactions-search.model';
import {current} from 'codelyzer/util/syntaxKind';

@Injectable()
export class InteractionsSearchService {

  // public loading = false;
  private _totalElements = 0;
  private _page: number = 1;
  private _pageSize: number = 20;

  constructor(private http: HttpClient) { }

  // getAllInteractions(query: string): Observable<InteractionsSearchResult> {
  //   // const params = new HttpParams()
  //   //   .set('query', query);
  //   query = query.trim();
  //   // const options =  query ?
  //   //   {params: new HttpParams().append('query', query)} : {};
  //
  //   return this.http.get('/interactionService/interactions/findInteractions/' + query)
  //     .catch(this.handleError);
  // }

  getAllInteractionsAndFacetsQuery(query: string,
                                   interactionSpeciesFilter: string[],
                                   interactionTypeFilter: string[],
                                   detectionMethodFilter: string[],
                                   organismFilter: string[],
                                   miScoreMin: any,
                                   miScoreMax: any,
                                   negativeFilter: any,
                                   currentPageIndex = 0, pageSize = 20): Observable<InteractionsSearchResult> {

    query = query.trim();

    currentPageIndex = currentPageIndex - 1;

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

  // get startIndex() {
  //   return this.page * this._pageSize;
  // }

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
    if (err.error instanceof Error) {
      return Observable.throw(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }
}
