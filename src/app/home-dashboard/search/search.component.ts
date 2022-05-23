import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {SearchService} from './service/search.service';

@Component({
  selector: 'ip-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterViewInit {

  constructor(private searchService: SearchService) {
  }

  @ViewChild('query', {static: true})
  query: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    $('ip-search').foundation();
    this.searchService.searchSuggestions($(this.query.nativeElement));
  }

  search(query: string, typeOfButton: string) {
    if (query) {
      this.searchService.search(query);
    }
  }
}
