import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {SearchService} from '../../../home-dashboard/search/service/search.service';

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

  @ViewChild('query', { static: true })
  query: ElementRef;

  ngOnInit() {
    $('ip-local-search').foundation();
  }

  ngAfterViewInit(): void {
    this.searchService.searchSuggestions($('#localSearchBox .typeahead'));
  }

  search(query: string, typeOfButton: string) {
    if (query) {
      this.searchService.search(query);
      this.query.nativeElement.blur();
      if (typeOfButton === 'enter' || typeOfButton === 'button') {
        this.searchService.title = query;
      }
    }
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

}
