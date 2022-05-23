import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {SearchService} from '../../../home-dashboard/search/service/search.service';

@Component({
  selector: 'ip-local-search',
  templateUrl: './local-search.component.html',
  styleUrls: ['./local-search.component.css']
})
export class LocalSearchComponent implements AfterViewInit {

  constructor(private location: Location,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private searchService: SearchService) {
  }

  @ViewChild('query', {static: true})
  query: ElementRef<HTMLInputElement>;

  ngAfterViewInit(): void {
    $('ip-local-search').foundation();
    this.searchService.searchSuggestions($(this.query.nativeElement));
  }

  search(query: string, actionType: string) {
    if (query) {
      this.searchService.search(query);
      this.query.nativeElement.blur();
    }
  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

}
