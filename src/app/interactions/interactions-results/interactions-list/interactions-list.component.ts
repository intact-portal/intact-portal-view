import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InteractorsSearchResult} from '../../shared/model/interactions-results/interactor/interactors-search.model';
import {InteractionsSearchResult} from '../../shared/model/interactions-results/interaction/interactions-search.model';

declare const $: any;

@Component({
  selector: 'iv-interactions-list',
  templateUrl: './interactions-list.component.html',
  styleUrls: ['./interactions-list.component.css']
})
export class InteractionsListComponent implements OnInit, AfterViewInit {

  @Input() interactorsSearch: InteractorsSearchResult;
  @Input() interactionsSearch: InteractionsSearchResult;
  private _interactorsSelected: string[];

  @Output() interactorsChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('iv-interactions-list').foundation();
  }

  /** EVENT EMITTERS **/

  public onInteractorsSelectedChanged(interactors: string[]): void {
    this.interactorsSelected = interactors;
    this.interactorsChanged.emit(interactors);
  }

  /** GETTERS AND SETTERS **/

  get interactorsSelected(): string[] {
    return this._interactorsSelected;
  }

  @Input()
  set interactorsSelected(value: string[]) {
    this._interactorsSelected = value;
  }
}
