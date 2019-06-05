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

  @Output() interactorsChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() interactionChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  private _isTabAActive: boolean = false;
  private _isTabBActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('iv-interactions-list').foundation();

    if ($('#interactions').hasClass('is-active') === true) {
      this.isTabAActive = true;
      this.isTabBActive = false;
    }
  }

  /** EVENT EMITTERS **/

  public onInteractorsSelectedChanged(interactors: string[]): void {
    this.interactorsChanged.emit(interactors);
  }

  public onInteractionsSelectedChanged(interaction: string): void {
    this.interactionChanged.emit(interaction);
  }

  public onPageChanged(pageIndex: number): void {
    this.pageChanged.emit(pageIndex);
  }

  public resetPage(): void {
    this.pageChanged.emit(1);
  }

  public interactorsTabSelected(): void {
    if (!this.isTabBActive) {
      this.isTabBActive = true;
      this.isTabAActive = false;

      this.resetPage();
    }
  }

  public interactionsTabSelected(): void {
    if (!this.isTabAActive) {
      this.isTabAActive = true;
      this.isTabBActive = false;

      this.resetPage();
    }
  }

  /** GETTERS AND SETTERS **/

  get isTabAActive(): boolean {
    return this._isTabAActive;
  }

  set isTabAActive(value: boolean) {
    this._isTabAActive = value;
  }

  get isTabBActive(): boolean {
    return this._isTabBActive;
  }

  set isTabBActive(value: boolean) {
    this._isTabBActive = value;
  }
}
