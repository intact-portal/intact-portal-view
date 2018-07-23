import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InteractorsSearchResult} from '../../shared/model/interactions-results/interactor/interactors-search.model';

declare const $: any;

@Component({
  selector: 'iv-interactions-list',
  templateUrl: './interactions-list.component.html',
  styleUrls: ['./interactions-list.component.css']
})
export class InteractionsListComponent implements OnInit, AfterViewInit {

  private _interactorsSearch: InteractorsSearchResult;
  private _interactorsSelected: string[];

  @Output() interactorsChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('iv-interactions-list').foundation();
  }

  public onInteractorsSelectedChanged(interactors: string[]): void {
    this.interactorsSelected = interactors;
    console.info('Interactors selected so farrr: ' + interactors);
    this.interactorsChanged.emit(this.interactorsSelected);
  }

  /** GETTERS AND SETTERS **/

  get interactorsSearch(): InteractorsSearchResult {
    return this._interactorsSearch;
  }

  @Input()
  set interactorsSearch(value: InteractorsSearchResult) {
    this._interactorsSearch = value;
  }


  get interactorsSelected(): string[] {
    return this._interactorsSelected;
  }

  @Input()
  set interactorsSelected(value: string[]) {
    this._interactorsSelected = value;
  }
}
