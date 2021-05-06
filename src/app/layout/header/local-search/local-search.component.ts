import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {SearchService} from '../../../home-dashboard/search/service/search.service';
import {Interactor} from '../../../interactions/shared/model/interactions-results/interactor/interactor.model';
import {Pagination} from '../../../home-dashboard/shared/pagination.model';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'ip-local-search',
  templateUrl: './local-search.component.html',
  styleUrls: ['./local-search.component.css']
})
export class LocalSearchComponent implements OnInit, AfterViewInit {

  constructor(private location: Location,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private searchService: SearchService) {

  }

  ngOnInit() {
    $('ip-local-search').foundation();
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
      console.log('local search');
      this.searchService.searchSuggestions($('#localSearchBox .typeahead'));
    // })
  }

  search(query: string, typeOfButton: string) {
    if (query) {
      this.searchService.search(query);
      if (typeOfButton === 'enter' || typeOfButton === 'button') {
        this.searchService.title = query;
      }
    }
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

}
