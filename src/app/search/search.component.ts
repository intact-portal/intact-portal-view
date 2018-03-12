import {AfterViewInit, Component, OnInit} from '@angular/core';

declare const Bloodhound;
declare const $: any;

@Component({
  selector: 'iv-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('iv-search').foundation();
    this.searchSuggestions();
  }

  private searchSuggestions(): void {

    const jsonInteractorsData = [
      {
        'interactorId': 'P06730',
        'interactorName': 'EIF4E',
        'interactorType': 'protein',
        'description': 'Eukaryotic translation initiation factor 4E',
        'species': 'Homo sapiens (Human)',
        'interactions': '6'
      },
      {
        'interactorId': 'Q13541',
        'interactorName': '4EBP1',
        'interactorType': 'protein',
        'description': 'Eukaryotic translation initiation factor 4E-binding protein 1',
        'species': 'Homo sapiens (Human)',
        'interactions': '1'
      },
      {
        'interactorId': 'P63165',
        'interactorName': 'SUMO1',
        'interactorType': 'protein',
        'description': 'Small ubiquitin-related modifier 1',
        'species': 'Homo sapiens (Human)',
        'interactions': '5'
      }
    ];

    const interactorsData = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('interactorId'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: jsonInteractorsData
    });
    interactorsData.initialize();


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

    const jsonInteractionsData = [
      {
        'author': 'pu et al. (2010)',
        'publicationId': ['20224576', 'IM-15679', 'MINT-7718689', '10.1038/embor.2010.18'],
        'interactions': '6',
        'interactionsIds': []
      },
      {
        'author': 'pu et al. (2010)',
        'publicationId': ['20224576', 'IM-15679', 'MINT-7718689', '10.1038/embor.2010.18'],
        'interactions': '1',
        'interactionsIds': ['EBI-7852615', 'IM-15679-1', 'MINT-7718752']
      }
      ];

    const interactionsData = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('author'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: jsonInteractionsData
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
          return item.interactorId + ' ' + item.interactorName + ' ' + item.interactorType +
            ' ' + item.description + ' ' + item.species + ' ' + item.interactions + ' interactions'
        },
        templates: {
          header: '<h4 class="category-name">Interactors</h4>',
          notFound: '<div class="noResultsSuggestions"> No results found for Interactors</div>',
          suggestion: function (item) {

            return '<div class="row">' +
              '<div class="columns small-1">' + item.interactorId + '</div>' +
              '<div class="columns small-1">' + item.interactorName + '</div>' +
              '<div class="columns small-3"><i>"' + item.description + '"</i> </div>' +
              '<div class="columns small-3">' + item.species + '</div>' +
              '<div class="columns small-2"><span class="labelWrapper">' + item.interactorType + '</div>' +
              '<div class="columns small-2"><span class="interactionsWrapper">' + item.interactions + ' interactions' + '</span></div>' +
              '</div>'

          },

        }
      }, {
        name: 'interactions',
        source: interactionsData,
        display: function (item) {
          return item.author;
        },
        templates: {
          header: '<h4 class="category-name">Interactions</h4>',
          notFound: '<div class="noResultsSuggestions"> No results found for Interactions</div>',
          suggestion: function (item) {

            return (item.interactionsIds.length === 0) ? '<div class="row">' +
              '<div class="columns small-2">' + item.author + '</div>' +
              '<div class="columns small-4">' + item.publicationId + '</div>' +
              '<div class="columns small-3"></div>' +
              '<div class="columns small-2"><span class="interactionsWrapper">' + item.interactions + ' interactions' + '</span></div>' +
              '</div>' :

              '<div class="row">' +
              '<div class="columns small-2">' + item.author + '</div>' +
              '<div class="columns small-4">' + item.publicationId + '</div>' +
              '<div class="columns small-3">' + item.interactionsIds + '</div>' +
              '<div class="columns small-2"><span class="interactionsWrapper">' + item.interactions + ' interactions' + '</span></div>' +
              '</div>'

          },

          footer: '<div class="suggestions-footer">' +
                  '  <a><i class="icon icon-functional" data-icon="+"></i></a> Show more results' +
                  '</div>'
        }
      }
      );
  }

}
