import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InteractionsSearchResult} from '../../../shared/model/interactions-results/interaction/interactions-search.model';
import {InteractionsSearchService} from '../../../shared/service/interactions-search.service';

declare const $: any;

@Component({
  selector: 'iv-interactions-table',
  templateUrl: './interactions-table.component.html',
  styleUrls: ['./interactions-table.component.css']
})
export class InteractionsTableComponent implements OnInit, AfterViewInit {

  private _interactionsSearch: InteractionsSearchResult;

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor( public interactionsSearchService: InteractionsSearchService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   // $(document).trigger('enhance.tablesaw');
    //
    //   console.log('HELLOWW I am being called the last one - FROM INTERACTIONS');
    //   console.log('--------------------------------------------');
    //
    //   $('.tablesaw').each(function(index) {
    //     $(this).data('tablesaw').destroy();
    //     $(this).data('tablesaw').refresh();
    //   });
    // }, 20);
  }

  /************************* /
   /** GETTERS AND SETTERS ** /
   /*************************/

  get interactionsSearch(): InteractionsSearchResult {
    return this._interactionsSearch;
  }

  @Input()
  set interactionsSearch(value: InteractionsSearchResult) {
    this._interactionsSearch = value;
    console.log(this._interactionsSearch);

  }

  public onPageChanged(pageIndex: number): void {
    this.pageChanged.emit(pageIndex);
  }

}
