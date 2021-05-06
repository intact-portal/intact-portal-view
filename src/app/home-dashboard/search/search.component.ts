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
    this.searchService.searchSuggestions();
  }

  search(query: string, typeOfButton: string) {
    this.searchService.search(query);

    if (typeOfButton === 'enter' || typeOfButton === 'button') {
      this.searchService.title = query;
    }
  }
}
