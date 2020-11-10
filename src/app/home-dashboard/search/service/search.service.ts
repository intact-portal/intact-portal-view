import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Pagination} from "../../shared/pagination.model";
import {Interactor} from "../../../interactions/shared/model/interactions-results/interactor/interactor.model";

const baseURL = environment.intact_portal_ws;


@Injectable()
export class SearchService {
  private _query: string;
  private _title:string;
  private _isBatchSearch = false;


  constructor(private router: Router, private http: HttpClient) {
  }

  search(query: string) {
    this._query = query;
    this._isBatchSearch = false;
    this.router.navigate(['search'], {queryParams: {query}});
  }

  batchSearch(query: string) {
    this._query = query;
    this._isBatchSearch = true;
    this.router.navigate(['search']);
  }

  speciesSearch(specieName: string) {
    this._query = '*'
    this._isBatchSearch = false;
    this.router.navigate(['search'], {queryParams: {query: '*', interactorSpecies: specieName, miScoreMin: 0, miScoreMax: 1, page: 1}});
  }

  resolveSearch(query: string, page = 0, pageSize = 50): Observable<{ [term: string]: Pagination<Interactor[]> }> {
    this._query = query.trim();

    const params = new HttpParams()
      .append('query', query)
      .append('page', page.toString())
      .append('pageSize', pageSize.toString());

    return this.http.post<{ [term: string]: Pagination<Interactor[]> }>(`${baseURL}/interactor/list/resolve`, params)
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

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get isBatchSearch(): boolean {
    return this._isBatchSearch;
  }
}
