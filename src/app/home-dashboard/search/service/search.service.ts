import {Observable, Subject, throwError as observableThrowError} from 'rxjs';

import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {ParamMap, Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Pagination} from '../../shared/pagination.model';
import {Interactor} from '../../../interactions/shared/model/interactions-results/interactor/interactor.model';
import {Interactome} from '../../../interactomes/interactome.model';
import {ColorMIQLPipe} from '../../advanced-search/colorMIQL.pipe';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

const baseURL = environment.intact_portal_ws;


@Injectable()
export class SearchService {
  private tmp_title: string;
  private first_init = true;
  private _token: string;
  private _query: string;
  private _title: string;
  private _isBatchSearch = false;
  private _isAdvancedSearch = false;
  private searchSubject: Subject<string> = new Subject<string>();
  public $searchObserver: Observable<string> = this.searchSubject.asObservable();

  private static localTokenId = token => `intact-batch-search-${token}`;

  constructor(private router: Router, private http: HttpClient, private reporter: GoogleAnalyticsService) {
  }

  search(query: string, title?: string) {
    this._query = query;
    this._isBatchSearch = false;
    this._title = title || this.tmp_title || query;
    this.updateAdvancedSearch(query);
    this.searchSubject.next(query);
    this.router.navigate(['search'], {queryParams: {query}});
  }

  batchSearch(query: string) {
    this._query = query;
    this._isBatchSearch = true;

    this.manageTokens();
    this.searchSubject.next(query);
    this.router.navigate(['search'], {queryParams: {token: this._token, batchSearch: true}});
  }

  private manageTokens() {
    this._token = this.genToken(5);
    const query = this._query;
    const title = this._title;
    localStorage.setItem(SearchService.localTokenId(this._token), JSON.stringify({query, title}));
    const tokens: string[] = JSON.parse(localStorage.getItem('intact-tokens') || '[]');
    tokens.push(this._token);
    if (tokens.length > 10) {
      localStorage.removeItem(SearchService.localTokenId(tokens.shift()));
    }
    localStorage.setItem('intact-tokens', JSON.stringify(tokens))
  }

  private rand = () => Math.random().toString(36).substr(2);
  private genToken = (length) => (this.rand() + this.rand() + this.rand() + this.rand()).substr(0, length);

  speciesSearch(interactome: Interactome) {
    this._query = `species:${interactome.taxid}`;
    this._title = `${interactome.name}`;
    this._isBatchSearch = false;
    this._isAdvancedSearch = true
    this.searchSubject.next(this._query);
    this.router.navigate(['search'], {queryParams: {query: this._query}});
  }

  resolveSearch(query: string, page = 0, pageSize = 50): Observable<{ [term: string]: Pagination<Interactor[]> }> {
    this._query = query.trim();

    const params = new HttpParams()
      .append('query', query)
      .append('page', page.toString())
      .append('pageSize', pageSize.toString());

    return this.http.post<{ [term: string]: Pagination<Interactor[]> }>(`${baseURL}/interactor/list/resolve`, params).pipe(
      catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse | any): Observable<any> {
    this.reporter.exception(err);
    if (err.error instanceof Error) {
      return observableThrowError(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }


  get query(): string {
    return this._query;
  }

  get spacedQuery(): string {
    return this._query.replace(/\n/g, ' ')
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

  get isAdvancedSearch(): boolean {
    return this._isAdvancedSearch;
  }

  private updateAdvancedSearch(query: string) {
    this._isAdvancedSearch = ColorMIQLPipe.isMIQL(query);
  }

  fromParams(params: ParamMap) {
    if (params.has('query')) {
      this._query = params.get('query');
      this.updateAdvancedSearch(this._query)
    } else if (params.has('token')) {
      this._token = params.get('token');
      const mem = JSON.parse(localStorage.getItem(SearchService.localTokenId(this._token)));
      if (mem) {
        this._query = mem.query;
        this._title = mem.title;
      } else {
        this.router.navigate([''])
      }
    }
    if (params.has('batchSearch')) {
      this._isBatchSearch = params.get('batchSearch') === 'true';
    }
  }

  toURLParams(params: any = {}): any {
    if (this.isBatchSearch) {
      params.token = this._token;
      params.batchSearch = this.isBatchSearch;
    } else if (this.query) {
      params.query = this.query.trim();
    }

    return params;
  }

  toParams(params: any = {}): any {
    if (this.query) {
      params.query = this.query.trim();
    }
    if (this.isBatchSearch) {
      params.batchSearch = this.isBatchSearch;
    }
    if (this.isAdvancedSearch) {
      params.advancedSearch = this.isAdvancedSearch;
    }
    return params;
  }

  searchSuggestions(searchBox: JQuery<HTMLInputElement>): JQuery<HTMLInputElement> {
    let updatingPages = false;
    let ignoreChange = false;
    let currentPage = 0;
    let data: Pagination<any[]>;
    let bloodhound: Bloodhound<Interactor>;
    let suggestionQuery;
    bloodhound = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        url: `${baseURL}/interactor/findInteractor/%QUERY?page=0&pageSize=10`,
        prepare: (query, settings) => {
          if (!ignoreChange) {
            suggestionQuery = query;
            settings.url = settings.url.replace('%QUERY', query);
            settings.url = settings.url.replace('page=0', `page=${currentPage}`)
          }
          console.log(settings.url)
          return settings;
        },
        transform: (response: any) => {
          data = response;
          return data.content;
        }
      }
    });

    bloodhound.initialize();

    const limit = 20;
    searchBox.typeahead({
        hint: true,
        highlight: true,
        minLength: 3
      },
      {
        name: 'interactors',
        limit: limit,
        source: bloodhound,
        display: function (item: Interactor) {
          return item.interactorAc;
        },
        templates: {
          header: () => `<h4 class="category-name">Interactors (${data.totalElements} found)</h4>`,
          footer: () => {
            if (data.totalPages > 1) {
              return `<div class="alignCell">
                        <button class="button" id="prev" ${data.first ? 'disabled' : ''}><i class="icon icon-common icon-previous-page"></i></button>
                        <button class="button" id="next" ${data.last ? 'disabled' : ''}><i class="icon icon-common icon-next-page"></i></button>
                      </div>`;
            }
          },
          notFound: '<div class="noResultsSuggestions"> No results found for Interactors</div>',
          suggestion: (item: Interactor) =>
            `<div class="flex-row" role="rowgroup">
               <div class="flex-cell first" role="cell">${item.interactorAc}</div>
               <div class="flex-cell" role="cell">
                ${item.interactorName === null ? item.interactorPreferredIdentifier : `${item.interactorName} (${item.interactorPreferredIdentifier})`}
               </div>
               <div class="flex-cell" role="cell"><i>"${item.interactorDescription}"</i> </div>
               <div class="flex-cell" role="cell">${item.interactorSpecies}</div>
               <div class="flex-cell" role="cell"><span class="labelWrapper">${item.interactorType}</span></div>
               <div class="flex-cell" role="cell"><span class="interactionsWrapper nowrap">${item.interactionCount} interactions</span></div>
             </div>`,
        }
      }
    ).on('typeahead:selected', (ev, item) => {
      // Noe: So far I can't find in the documentation a way to know the dataset of the item selected. This code should improve with that information
      let id;
      if (item.interactorAc === undefined) {
        // We assume is an interaction
        id = item.ac;
      } else {
        id = item.interactorAc;
      }
      this.search(id, `${suggestionQuery} · ${item.interactorName === null ? item.interactorPreferredIdentifier : `${item.interactorName} (${item.interactorPreferredIdentifier})`}`);
    }).on('typeahead:cursorchange', (ev, item) => {
      this.tmp_title = item ? `${suggestionQuery} · ${item.interactorName === null ? item.interactorPreferredIdentifier : `${item.interactorName} (${item.interactorPreferredIdentifier})`}` : null;
    })

    const updateAutosuggestion = () => {
      const val = searchBox.typeahead('val');
      console.log(searchBox, val)
      if (val) {
        updatingPages = true;
        ignoreChange = true;
        searchBox.typeahead('val', val + ' ');
        ignoreChange = false;
        searchBox.typeahead('val', val);
        console.log(searchBox[0].id)
        updatingPages = false;
      }
    }

    $(document).on('click', '#prev', () => {
      currentPage--;
      updateAutosuggestion();
    })
    $(document).on('click', '#next', () => {
      currentPage++;
      // console.log(currentPage)
      updateAutosuggestion();
    });
    searchBox.on('input', () => {
      currentPage = 0;
      this.tmp_title = null;
    })
    return searchBox;
  }
}
