import {Injectable} from '@angular/core';
import {ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Pagination} from '../../shared/pagination.model';
import {Interactor} from '../../../interactions/shared/model/interactions-results/interactor/interactor.model';
import {GoogleAnalyticsService} from '../../../shared/service/google-analytics/google-analytics.service';

const baseURL = environment.intact_portal_ws;


@Injectable()
export class SearchService {
  private _token: string;
  private _query: string;
  private _title: string;
  private _isBatchSearch = false;


  constructor(private router: Router, private http: HttpClient, private reporter: GoogleAnalyticsService) {
  }

  search(query: string) {
    this._query = query;
    this._isBatchSearch = false;
    this.router.navigate(['search'], {queryParams: {query}});
  }

  batchSearch(query: string) {
    this._query = query;
    this._isBatchSearch = true;

    this.manageTokens();
    this.router.navigate(['search'], {queryParams: {token: this._token, batchSearch: true}});
  }

  private manageTokens() {
    this._token = this.genToken(5);
    let query = this._query;
    let title = this._title
    localStorage.setItem(SearchService.localTokenId(this._token), JSON.stringify({query, title}));
    let tokens: string[] = JSON.parse(localStorage.getItem('intact-tokens') || "[]");
    console.table(tokens);
    tokens.push(this._token);
    if (tokens.length > 10) localStorage.removeItem(SearchService.localTokenId(tokens.shift()));
    localStorage.setItem('intact-tokens', JSON.stringify(tokens))
  }

  private rand = () => Math.random().toString(36).substr(2);
  private genToken = (length) => (this.rand() + this.rand() + this.rand() + this.rand()).substr(0, length);

  speciesSearch(specieName: string) {
    this._query = '*'
    this._isBatchSearch = false;
    this.router.navigate(['search'], {queryParams: {query: '*', interactorSpecies: specieName}});
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
    this.reporter.reportError(err)
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

  fromParams(params: ParamMap) {
    if (params.has('query')) this._query = params.get('query');
    else if (params.has('token')) {
      this._token = params.get('token');
      let mem = JSON.parse(localStorage.getItem(SearchService.localTokenId(this._token)));
      if (mem) {
        this._query = mem.query;
        this._title = mem.title;
      } else {
        this.router.navigate([''])
      }
    }
    if (params.has('batchSearch')) this._isBatchSearch = params.get('batchSearch') === 'true';
  }

  toURLParams(params: any = {}): any {
    if (this.isBatchSearch) {
      params.token = this._token;
      params.batchSearch = this.isBatchSearch;
    } else if (this.query) params.query = this.query.trim();

    return params;
  }

  toParams(params: any = {}): any {
    if (this.query) params.query = this.query.trim();
    if (this.isBatchSearch) params.batchSearch = this.isBatchSearch;
    return params;
  }

  private static localTokenId(token) {
    return `intact-batch-search-${token}`;
  }
}
