import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {InteractorsSearchResult} from '../../shared/model/interactions-results/interactors-search.model';

declare const $: any;

@Component({
  selector: 'iv-interactions-list',
  templateUrl: './interactions-list.component.html',
  styleUrls: ['./interactions-list.component.css']
})
export class InteractionsListComponent implements OnInit, AfterViewInit {

  private _interactorsSearch: InteractorsSearchResult;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('iv-interactions-list').foundation();
  }


  /** GETTERS AND SETTERS **/

  get interactorsSearch(): InteractorsSearchResult {
    return this._interactorsSearch;
  }

  @Input()
  set interactorsSearch(value: InteractorsSearchResult) {
    this._interactorsSearch = value;
    console.log(this._interactorsSearch);
  }
}
