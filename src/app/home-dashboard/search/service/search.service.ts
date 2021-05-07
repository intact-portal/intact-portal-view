import {Injectable} from '@angular/core';
import {ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Pagination} from '../../shared/pagination.model';
import {Interactor} from '../../../interactions/shared/model/interactions-results/interactor/interactor.model';
import {GoogleAnalyticsService} from '../../../shared/service/google-analytics/google-analytics.service';
import {Interactome} from '../../../interactomes/interactome.model';

const baseURL = environment.intact_portal_ws;


@Injectable()
export class SearchService {
  private _token: string;
  private _query: string;
  private _title: string;
  private _isBatchSearch = false;

  private static localTokenId = token => `intact-batch-search-${token}`;

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
    this._query = interactome.taxid.toString();
    this._title = `${interactome.name}`;
    this._isBatchSearch = false;
    this.router.navigate(['search'], {queryParams: {query: this._query, interactorSpeciesFilter: interactome.name}});
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

  fromParams(params: ParamMap) {
    if (params.has('query')) {
      this._query = params.get('query');
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
    return params;
  }

  searchSuggestions(searchBox: JQuery): void {
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
            `<div class="row expanded">
               <div class="columns large-2 show-for-large">${item.interactorAc}</div>
               <div class="columns small-6 medium-3 large-2">
                ${item.interactorName === null ? item.interactorPreferredIdentifier : `${item.interactorName} (${item.interactorPreferredIdentifier})`}
               </div>
               <div class="columns large-2 show-for-large"><i>"${item.interactorDescription}"</i> </div>
               <div class="columns small-6 medium-3 large-2">${item.interactorSpecies}</div>
               <div class="columns medium-3 large-2 show-for-medium"><span class="labelWrapper">${item.interactorType}</span></div>
               <div class="columns medium-3 large-2 show-for-medium"><span class="interactionsWrapper nowrap">${item.interactionCount} interactions</span></div>
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
      this.title = `${suggestionQuery} · ${item.interactorName === null ? item.interactorPreferredIdentifier : `${item.interactorName} (${item.interactorPreferredIdentifier})`}`;
      this.search(id);
    });
    const updateAutosuggestion = () => {
      updatingPages = true;
      const val = searchBox.typeahead('val');
      ignoreChange = true;
      searchBox.typeahead('val', val + ' ');
      ignoreChange = false;
      searchBox.typeahead('val', val);
      updatingPages = false;
    }
    $(document).on('click', '#prev', () => {
      currentPage--;
      updateAutosuggestion();
    })
    $(document).on('click', '#next', () => {
      currentPage++;
      updateAutosuggestion();
    });
    searchBox.on('input', () => {
      currentPage = 0;
    })
  }
}
