import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SearchService} from './service/search.service';

declare const Bloodhound;
declare const $: any;

@Component({
  selector: 'iv-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('iv-search').foundation();
    this.searchSuggestions();
  }

  search(query: string, typeOfButton: string) {
    this.searchService.search(query);

    localStorage.removeItem('participants_columnView_columns');
    localStorage.removeItem('features_columnView_columns');
  }

  private searchSuggestions(): void {

    const interactorsData = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('interactorId'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        url: '/interactorService/interactor/findInteractor/%QUERY',
        wildcard: '%QUERY',
        transform: function (data) {
          return data.content;
        }
      }
    });
    interactorsData.initialize();

    const interactionsData = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('authors'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        url: '/interactionService/interaction/findInteractions/%QUERY',
        wildcard: '%QUERY',
        transform: function (data) {
          return data.content;
        }
      }
    });
    interactionsData.initialize();

    const jsonTermsData = [
      {
        'dbOntology': 'PSI-MI',
        'termId': 'MI:0007',
        'termName': 'anti tag coip',
        'description': 'anti tag coimmunoprecipitation',
        'label': 'Interaction Detection Method',
        'interactions': '6'
      },
      {
        'dbOntology': 'NCBI',
        'termId': '9606',
        'termName': 'Homo sapiens',
        'description': 'Human',
        'label': 'Interactor Species',
        'interactions': '6'
      },
      {
        'dbOntology': 'PSI-MI',
        'termId': 'MI:0326',
        'termName': 'protein',
        'description': 'protein',
        'label': 'Interactor Type',
        'interactions': '6'
      },
      {
        'dbOntology': 'GO',
        'termId': 'GO:0016032',
        'termName': 'viral process',
        'description': 'viral process',
        'label': 'Interactor Xref',
        'interactions': '1'
      }
    ];

    const termsData = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('dbOntology'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: jsonTermsData
    });
    termsData.initialize();



    $('#searchBox .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
      },
      {
        name: 'terms',
        source: termsData,
        display: function (item) {
          return item.dbOntology;
        },
        templates: {
          header: '<h4 class="category-name" style="margin-top:-3px;">Terms</h4>',
          notFound: '<div class="noResultsSuggestions"> No results found for Terms</div>',
          suggestion: function (item) {
            return '<div class="row">' +
                      '<div class="columns small-1">' + item.dbOntology + '</div>' +
                      '<div class="columns small-1">' + item.termId + '</div>' +
                      '<div class="columns small-2">' + item.termName + '</div>' +
                      '<div class="columns small-3"> <i>"' + item.description + '"</i> </div>' +
                      '<div class="columns small-3"><span class="labelWrapper">' + item.label + '</span></div>' +
                      '<div class="columns small-2"><span class="interactionsWrapper">' + item.interactions +
                          ' interactions' + '</span></div>' +
              '</div>'
          }
        }
      },
      {
        name: 'interactors',
        source: interactorsData,
        display: function (item) {
         return item.interactorId
        },
        templates: {
          header: '<h4 class="category-name">Interactors</h4>',
          notFound: '<div class="noResultsSuggestions"> No results found for Interactors</div>',
          suggestion: function (item) {
            return '<div class="row">' +
              '<div class="columns small-2">' + item.interactorId + '</div>' +
              '<div class="columns small-2"><i>"' + item.description + '"</i> </div>' +
              '<div class="columns small-2">' + item.interactorName + '</div>' +
              '<div class="columns small-2">' + item.species + '</div>' +
              '<div class="columns small-2"><span class="labelWrapper">' + item.interactorType + '</span></div>' +
              '<div class="columns small-2"><span class="interactionsWrapper">' + item.interactionCount + ' interactions' +
              '</span></div>' +
              '</div>'
          },

        }
      },
      {
        name: 'interactions',
        source: interactionsData,
        display: function (item) {
          return item.interactionIdentifiers;
        },
        templates: {
          header: '<h4 class="category-name">Interactions</h4>',
          notFound: '<div class="noResultsSuggestions"> No results found for Interactions</div>',
          suggestion: function (item) {
            // TODO: FIX THIS WHEN THE WS RETURN interactionCount
            return (item.interactionCount === null) ? '<div class="row">' +
              '<div class="columns small-3">' + item.firstAuthor + '</div>' +
              '<div class="columns small-3">' + item.publicationIdentifiers + '</div>' +
              '<div class="columns small-2">' + item.interactionIdentifiers + '</div>' +
              '<div class="columns small-2"><span class="labelWrapper">' + item.interactionType + '</span></div>' +
              '<div class="columns small-2"><span class="interactionsWrapper">' + ' 1 interaction' + '</span></div>' +
              '</div>' :

              '<div class="row">' +
              '<div class="columns small-4">' + item.firstAuthor + '</div>' +
              '<div class="columns small-2">' + item.publicationIdentifiers + '</div>' +
              '<div class="columns small-3">' + item.interactionIdentifiers + '</div>' +
              '<div class="columns small-2"><span class="interactionsWrapper">' + item.interactionCount + ' interactions' + '</span></div>'
              + '</div>'
          },

          footer: '<div class="suggestions-footer">' +
                  '  <a><i class="icon icon-functional" data-icon="+"></i></a> Show more results' +
                  '</div>'
        }
      }
      );
  }

}
