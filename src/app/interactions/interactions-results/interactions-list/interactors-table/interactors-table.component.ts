import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InteractorsSearchResult } from '../../../shared/model/interactions-results/interactor/interactors-search.model';

import Tablesaw from 'tablesaw/dist/tablesaw.jquery.js';
declare const $: any;

@Component({
  selector: 'iv-interactors-table',
  templateUrl: './interactors-table.component.html',
  styleUrls: ['./interactors-table.component.css']
})
export class InteractorsTableComponent implements OnInit, AfterViewInit {

  private _interactorsSearch: InteractorsSearchResult;
  private _interactorsSelected: string[];

  @Output() interactorsChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // setTimeout(() => {
      // $(document).trigger('enhance.tablesaw');
      //
      // console.log('HELLOWW I am being called the last one');
      // console.log('--------------------------------------------');

      // $('.tablesaw').each(function(index) {
      //   $(this).data('tablesaw').destroy();
      //   $(this).data('tablesaw').refresh();
      // });
    // }, 20);
  }

  onSelected(interactor: string) {
    if (!this.interactorsSelected.includes(interactor)) {
      this.interactorsSelected.push(interactor);
    } else {
      this.interactorsSelected.splice(this.interactorsSelected.indexOf(interactor), 1);
    }

    console.info(this._interactorsSelected);

    this.interactorsChanged.emit(this.interactorsSelected);

  }

  isSelectedInteractor(interactor: string) {
    return this.interactorsSelected !== undefined ? this.interactorsSelected.indexOf(interactor) >= 0 : false;
  }

  /************************* /
  /** GETTERS AND SETTERS ** /
  /*************************/

  get interactorsSearch(): InteractorsSearchResult {
    return this._interactorsSearch;
  }

  @Input()
  set interactorsSearch(value: InteractorsSearchResult) {
    this._interactorsSearch = value;
    console.log(this._interactorsSearch);
  }

  /*** INTERACTORS SELECTED **/

  get interactorsSelected(): string[] {
    return this._interactorsSelected;
  }

  @Input()
  set interactorsSelected(value: string[]) {
    this._interactorsSelected = value;
  }

}
