import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import { InteractorsSearchResult } from '../../../shared/model/interactions-results/interactors-search.model';

@Component({
  selector: 'iv-interactors-table',
  templateUrl: './interactors-table.component.html',
  styleUrls: ['./interactors-table.component.css']
})
export class InteractorsTableComponent implements OnInit {

  private _interactorsSearch: InteractorsSearchResult;

  constructor() { }

  ngOnInit() {
    console.log('Interactors passed ' + this.interactorsSearch)
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
