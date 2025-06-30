import {AfterViewInit, Component, ElementRef, viewChild} from '@angular/core';
import {SearchService} from './service/search.service';

@Component({
    selector: 'ip-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    standalone: false
})
export class SearchComponent implements AfterViewInit {

  constructor(private searchService: SearchService) {
  }

  readonly query = viewChild<ElementRef<HTMLInputElement>>('query');

  ngAfterViewInit() {
    $('ip-search').foundation();
    this.searchService.searchSuggestions($(this.query().nativeElement));
  }

  search(query: string, typeOfButton: string) {
    if (query) {
      this.searchService.search(query);
    }
  }
}
