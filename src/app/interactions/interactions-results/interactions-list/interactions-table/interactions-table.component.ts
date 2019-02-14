import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InteractionsSearchResult} from '../../../shared/model/interactions-results/interaction/interactions-search.model';
import {InteractionsSearchService} from '../../../shared/service/interactions-search.service';
import {Interaction} from '../../../shared/model/interactions-results/interaction/interaction.model';
import {Router} from '@angular/router';

declare const $: any;

@Component({
  selector: 'iv-interactions-table',
  templateUrl: './interactions-table.component.html',
  styleUrls: ['./interactions-table.component.css']
})
export class InteractionsTableComponent implements OnInit {

  private _interactionsSearch: InteractionsSearchResult;

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor( public interactionsSearchService: InteractionsSearchService,
               private router: Router) {
  }

  ngOnInit() {
  }

  // openDetailsPage(interaction: Interaction) {
  //   this.router.navigate(['/details/interaction', interaction.ac]);
  // }

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
