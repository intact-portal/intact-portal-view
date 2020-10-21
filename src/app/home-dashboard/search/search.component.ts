import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SearchService} from './service/search.service';
import {environment} from '../../../environments/environment';
import {Pagination} from "../shared/pagination.model";

declare const Bloodhound;
declare const $: any;
const baseURL = environment.intact_portal_ws;

@Component({
  selector: 'ip-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {
  currentPage = 0;
  data: Pagination<any[]>;
  private updatingPages = false;
  private ignoreChange = false;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('ip-search').foundation();
    this.searchSuggestions();
  }

  private search(query: string, typeOfButton: string) {
    this.searchService.search(query);

    localStorage.removeItem('participants_columnView_columns');
    localStorage.removeItem('features_columnView_columns');
  }

  private searchBox: any;
  private bloodhound: any;

  private searchSuggestions(): void {

    this.bloodhound = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        url: `${baseURL}/interactor/findInteractor/%QUERY`,
        prepare: function (query, settings) {
          if (!this.ignoreChange) {
            console.log(this.currentPage);
            settings.url = settings.url.replace('%QUERY', query);
          }
          return settings;
        }.bind(this),
        transform: function (data) {
          this.data = data;
          return data.content;
        }.bind(this)
      }
    });
    const interactorsData = this.bloodhound;
    interactorsData.initialize();

    // const interactionsData = new Bloodhound({
    //   datumTokenizer: Bloodhound.tokenizers.whitespace,
    //   queryTokenizer: Bloodhound.tokenizers.whitespace,
    //   remote: {
    //     url: `${baseURL}` + '/interaction/findInteractions/%QUERY',
    //     wildcard: '%QUERY',
    //     transform: function (data) {
    //       return data.content;
    //     }
    //   }
    // });
    // interactionsData.initialize();

    // const jsonTermsData = [
    //   {
    //     'dbOntology': 'PSI-MI',
    //     'termId': 'MI:0007',
    //     'termName': 'anti tag coip',
    //     'description': 'anti tag coimmunoprecipitation',
    //     'label': 'Interaction Detection Method',
    //     'interactions': '6'
    //   },
    //   {
    //     'dbOntology': 'NCBI',
    //     'termId': '9606',
    //     'termName': 'Homo sapiens',
    //     'description': 'Human',
    //     'label': 'Interactor Species',
    //     'interactions': '6'
    //   },
    //   {
    //     'dbOntology': 'PSI-MI',
    //     'termId': 'MI:0326',
    //     'termName': 'protein',
    //     'description': 'protein',
    //     'label': 'Interactor Type',
    //     'interactions': '6'
    //   },
    //   {
    //     'dbOntology': 'GO',
    //     'termId': 'GO:0016032',
    //     'termName': 'viral process',
    //     'description': 'viral process',
    //     'label': 'Interactor Xref',
    //     'interactions': '1'
    //   }
    // ];
    //
    // const termsData = new Bloodhound({
    //   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('dbOntology'),
    //   queryTokenizer: Bloodhound.tokenizers.whitespace,
    //   local: jsonTermsData
    // });
    // termsData.initialize();

    const limit = 20;
    this.searchBox = $('#searchBox .typeahead');
    this.searchBox.typeahead({
        hint: true,
        highlight: true,
        minLength: 3
      },
      // { Uncomment and adapt in the future when we have the terms index in place
      //   name: 'terms',
      //   source: termsData,
      //   display: function (item) {
      //     return item.dbOntology;
      //   },
      //   templates: {
      //     header: '<h4 class="category-name" style="margin-top:-3px;">CV Terms</h4>',
      //     notFound: '<div class="noResultsSuggestions"> No results found for CV Terms</div>',
      //     suggestion: function (item) {
      //       return '<div class="row">' +
      //                 '<div class="columns small-1">' + item.dbOntology + '</div>' +
      //                 '<div class="columns small-1">' + item.termId + '</div>' +
      //                 '<div class="columns small-2">' + item.termName + '</div>' +
      //                 '<div class="columns small-3"> <i>"' + item.description + '"</i> </div>' +
      //                 '<div class="columns small-3"><span class="labelWrapper">' + item.label + '</span></div>' +
      //                 '<div class="columns small-2"><span class="interactionsWrapper">' + item.interactions +
      //                     ' interactions' + '</span></div>' +
      //         '</div>'
      //     }
      //   }
      // },
      {
        name: 'interactors',
        limit: limit,
        source: interactorsData,
        display: function (item) {
          return item.interactorAc
        },
        templates: {
          header: () => `<h4 class="category-name">Interactors (${this.data.totalElements} found)</h4>`,
          footer: () => {
            if (this.data.totalPages > 1) {
              return `<div class="alignCell">
                        <button class="button" id="prev" ${this.data.first ? 'disabled' : ''}><i class="icon icon-common icon-previous-page"></i></button>
                        <button class="button" id="next" ${this.data.last ? 'disabled' : ''}><i class="icon icon-common icon-next-page"></i></button>
                      </div>`;
            }
          },
          notFound: '<div class="noResultsSuggestions"> No results found for Interactors</div>',
          suggestion: function (item) {
            return `<div class="row ">
                <div class="columns small-2">${item.interactorAc}</div>
                <div class="columns small-2">
                  ${item.interactorName === null ? item.interactorPreferredIdentifier : `${item.interactorName} (${item.interactorPreferredIdentifier})`}
                </div>
                <div class="columns small-2"><i>"${item.interactorDescription}"</i> </div>
                <div class="columns small-2">${item.interactorSpecies}</div>
                <div class="columns small-2"><span class="labelWrapper">${item.interactorType}</span></div>
                <div class="columns small-2"><span class="interactionsWrapper nowrap">${item.interactionCount} interactions</span></div>
              </div>`
          },
        }
      }
      // {
      //   name: 'interactions',
      //   limit: 20,
      //   source: interactionsData,
      //   display: function (item) {
      //     return item.ac;
      //   },
      //   templates: {
      //     header: '<h4 class="category-name">Interactions</h4>',
      //     notFound: '<div class="noResultsSuggestions"> No results found for Interactions</div>',
      //     suggestion: function (item) {
      //       // TODO: FIX THIS WHEN THE WS RETURN interactionCount
      //       return (item.count === null) ? '<div class="row">' +
      //         '<div class="columns small-3">' + item.firstAuthor + '</div>' +
      //         '<div class="columns small-3">' + item.publicationIdentifiers + '</div>' +
      //         '<div class="columns small-2">' + item.ac + '</div>' +
      //         '<div class="columns small-2"><span class="labelWrapper">' + item.type + '</span></div>' +
      //         '<div class="columns small-2"><span class="interactionsWrapper">' + ' 1 interaction' + '</span></div>' +
      //         '</div>' :
      //
      //         '<div class="row">' +
      //         '<div class="columns small-4">' + item.firstAuthor + '</div>' +
      //         '<div class="columns small-2">' + item.publicationIdentifiers + '</div>' +
      //         '<div class="columns small-3">' + item.identifiers + '</div>' +
      //         '<div class="columns small-2"><span class="interactionsWrapper">' + item.count + ' interactions' + '</span></div>'
      //         + '</div>'
      //     },
      //     // Uncomment and adapt in the future when we can display more results
      //     // footer: '<div class="suggestions-footer">' +
      //     //         '  <a><i class="icon icon-functional" data-icon="+"></i></a> Show more results' +
      //     //         '</div>'
      //   }
      // }
    ).bind('typeahead:selected', (ev, item) => {
      // Noe: So far I can't find in the documentation a way to know the dataset of the item selected. This code should improve with that information
      let id;
      if (item.interactorAc === undefined) {
        // We assume is an interaction
        id = item.ac;
      } else {
        id = item.interactorAc;
      }
      this.search(id, '');
    });
    $(document).on('click', '#prev', () => this.previousPage())
    $(document).on('click', '#next', () => this.nextPage());
    this.searchBox.on('input', () => {
      this.currentPage = 0;
    })
  }


  nextPage() {
    this.currentPage += 1;
    this.updateAutosuggestion()
  }

  previousPage() {
    this.currentPage -= 1;
    this.updateAutosuggestion();
  }

  private updateAutosuggestion() {
    this.updatingPages = true;
    let val = this.searchBox.typeahead('val');
    this.ignoreChange = true;
    this.searchBox.typeahead('val', val + ' ');
    this.ignoreChange = false;
    this.searchBox.typeahead('val', val);
    this.updatingPages = false;
  }
}
