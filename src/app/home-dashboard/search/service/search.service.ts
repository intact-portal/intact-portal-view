import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

const baseURL = environment.intact_portal_ws;


@Injectable()
export class SearchService {

  private _query: string;

  constructor(private router: Router, private http: HttpClient) {
  }

  search(query: string) {
    this._query = query;
    this.router.navigate(['search'], {queryParams: {query}});
  }

  batchSearch(query: string) {
    this._query = query;
    this.router.navigate(['search'], {queryParams: {query: query, batchSearch: 'true'}});
  }

  resolveSearch(query: string): Observable<any> {

    this._query = query.trim();

    const params = new HttpParams()
      .append('query', query);

    return this.http.post<string>(`${baseURL}` + '/interactor/list/resolve', params)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse | any): Observable<any> {
    if (err.error instanceof Error) {
      return Observable.throw(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }

  get query(): string {
    return this._query;
  }

  set query(value: string) {
    this._query = value;
  }
}
