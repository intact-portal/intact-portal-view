import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InteractorsSearchResult } from '../../../shared/model/interactions-results/interactor/interactors-search.model';
import {InteractorsSearchService} from '../../../shared/service/interactors-search.service';
import {InteractionsSearchResult} from '../../../shared/model/interactions-results/interaction/interactions-search.model';

declare const $: any;

@Component({
  selector: 'iv-interactors-table',
  templateUrl: './interactors-table.component.html',
  styleUrls: ['./interactors-table.component.css']
})
export class InteractorsTableComponent implements OnInit, AfterViewInit {

  private _interactorsSearch: InteractorsSearchResult;
  private _interactionsSearch: InteractionsSearchResult;
  private _interactorsSelected: string[]=[];

  private _interactionCount: number;

  @Output() interactorsChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor( public interactorsSearchService: InteractorsSearchService ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

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

  getInteractionCountPerInteractor(interactor: string) {

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

  get interactionsSearch(): InteractionsSearchResult {
    return this._interactionsSearch;
  }

  @Input()
  set interactionsSearch(value: InteractionsSearchResult) {
    this._interactionsSearch = value;
  }

  /*** INTERACTORS SELECTED **/

  get interactorsSelected(): string[] {
    return this._interactorsSelected;
  }

  set interactorsSelected(value: string[]) {
    this._interactorsSelected = value;
  }

  public onPageChanged(pageIndex: number): void {
    this.pageChanged.emit(pageIndex);
  }

  get interactionCount(): number {
    return this._interactionCount;
  }

  set interactionCount(value: number) {
    this._interactionCount = value;
  }
}
