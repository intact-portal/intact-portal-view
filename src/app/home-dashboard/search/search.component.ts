import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SearchService} from './service/search.service';

@Component({
  selector: 'ip-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('ip-search').foundation();
    this.searchService.searchSuggestions($('#searchBox .typeahead'));
  }

  search(query: string, typeOfButton: string) {
    if (query) {
      if (typeOfButton === 'enter' || typeOfButton === 'button' || typeOfButton === 'example') {
        this.searchService.title = query;
      }
      this.searchService.search(query);
    }
  }
}
