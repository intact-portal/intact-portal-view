import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {InteractionsSearchResult} from '../model/interactions-results/interaction/interactions-search.model';
import {environment} from '../../../../environments/environment';

const baseURL = environment.intact_portal_ws;

@Injectable()
export class InteractionsSearchService {

  private _totalElements = 0;
  private _page = 1;
  private _pageSize = 20;

  constructor(private http: HttpClient) {
  }

  getAllInteractionsAndFacetsQuery(query: string,
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
                                   currentPageIndex = 1, pageSize = 10): Observable<InteractionsSearchResult> {

    query = query.trim();
    this.page = currentPageIndex;

    currentPageIndex = currentPageIndex - 1;

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
      .set('page', currentPageIndex.toString())
      .set('pageSize', pageSize.toString());

    const options = query ? {params: params} : {};

    return this.http.get(`${baseURL}/interaction/findInteractionWithFacet`, options)
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
    if (err.error instanceof Error) {
      return Observable.throw(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }
}
