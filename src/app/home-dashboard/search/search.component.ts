import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SearchService} from './service/search.service';
import {environment} from '../../../environments/environment';
import {Pagination} from '../shared/pagination.model';
import {Interactor} from '../../interactions/shared/model/interactions-results/interactor/interactor.model';


const baseURL = environment.intact_portal_ws;

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
      this.searchService.search(query);

      if (typeOfButton === 'enter' || typeOfButton === 'button' || typeOfButton === 'example') {
        this.searchService.title = query;
      }
    }
  }
}
