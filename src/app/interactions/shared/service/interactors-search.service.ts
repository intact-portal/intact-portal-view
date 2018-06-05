import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { InteractorsSearchResult } from '../model/interactions-results/interactors-search.model';
import { environment } from '../../../../environments/environment';

// const interactorBaseURL = environment.interactor_base_url;

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
    return this.http.get('/interactorService/getAllTaxIdFacets')
      .catch(this.handleError);
  }

  getAllInteractorsAndFacetsQuery(query: string,
                                  speciesFilter: string[] = [],
                                  interactorTypeFilter: string[] = [],
                                  currentPageIndex = 1, pageSize = 20): Observable<InteractorsSearchResult> {
    let filters = '';
    if (speciesFilter.length !== 0) {
      filters += 'species_name_str:(' + '"' + speciesFilter.join('"AND"') + '"' + '),';
    }
    if (interactorTypeFilter.length !== 0) {
      filters += 'interactor_type_str:(' + '"' + speciesFilter.join('"AND"') + '"' + '),';
    }

    const params = new HttpParams()
      .set('first', currentPageIndex.toString())
      .set('number', pageSize.toString())
      .set('filters', filters);

    return this.http.get('/interactorService/getAllTaxIdFacets' + query, {params: params})
      .catch(this.handleError);
  }

  /**
   * Find an interactor based on indexed term
   * @param query
   * @param format
   * @returns {Observable<InteractorsSearchResult>}
   */
  // findInteractors(query: string, format = 'json'): Observable<InteractorsSearchResult> {
  //   return this.http.get(interactorBaseURL + '/search/' + query)
  //     .catch(this.handleError);
  // }


  private handleError(err: HttpErrorResponse | any): Observable<any> {
    if (err.error instanceof Error) {
      return Observable.throw(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }

}
