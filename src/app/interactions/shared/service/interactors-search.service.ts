import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { InteractorsSearchResult } from '../model/interactions-results/interactors-search.model';
import { environment } from '../../../../environments/environment';

const interactorBaseURL = environment.interactor_base_url;

@Injectable()
export class InteractorsSearchService {

  constructor(private http: HttpClient) { }

  /**
   * Find an interactor based on indexed term
   * @param query
   * @param format
   * @returns {Observable<InteractorsSearchResult>}
   */
  getAllInteractors(): Observable<InteractorsSearchResult> {

    return this.http.get('/interactorService' + '/getAll')
      .catch(this.handleError);

    // return this.http.get(baseURL + '/search/' + query, {params: params})
    //   .catch(this.handleError);
    // return null;
  }

  getAllInteractorsAndFacets(): Observable<InteractorsSearchResult> {
    return this.http.get('/interactorService' + '/getAllTaxIdFacets')
      .catch(this.handleError);
  }

  /**
   * Find an interactor based on indexed term
   * @param query
   * @param format
   * @returns {Observable<InteractorsSearchResult>}
   */
  findInteractors(query: string, format = 'json'): Observable<InteractorsSearchResult> {
    return this.http.get(interactorBaseURL + '/search/' + query)
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
