import {AfterViewInit, Component, ElementRef, viewChild} from '@angular/core';
import {SearchService} from '../../../home-dashboard/search/service/search.service';

@Component({
    selector: 'ip-local-search',
    templateUrl: './local-search.component.html',
    styleUrls: ['./local-search.component.css'],
    standalone: false
})
export class LocalSearchComponent implements AfterViewInit {

  constructor(private searchService: SearchService) {
  }

  readonly query = viewChild<ElementRef<HTMLInputElement>>('query');

  ngAfterViewInit(): void {
    $('ip-local-search').foundation();
    this.searchService.searchSuggestions($(this.query().nativeElement));
  }

  search(query: string, actionType: string) {
    if (query) {
      this.searchService.search(query);
      this.query().nativeElement.blur();
    }
  }


}
