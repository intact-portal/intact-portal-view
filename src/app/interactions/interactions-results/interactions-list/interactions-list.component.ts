import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';

declare const $: any;

@Component({
  selector: 'iv-interactions-list',
  templateUrl: './interactions-list.component.html',
  styleUrls: ['./interactions-list.component.css']
})
export class InteractionsListComponent implements OnInit, AfterViewInit {

  @Output() interactorChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() interactionChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  private _isTabInteractionActive = false;
  private _isTabInteractorActive = false;

  dataTable: any;

  constructor() { }

  ngOnInit() {
    $('iv-interactions-list').foundation();
  }

  ngAfterViewInit() {

    $('#search-results-tabs').on('change.zf.tabs', function() {
      if ($('#interactions').hasClass('is-active') === true) {
        this.isTabInteractionActive = true;
        this.isTabInteractorActive = false;
      } else if ($('#interactor').hasClass('is-active') === true) {
        this.isTabInteractionActive = false;
        this.isTabInteractorActive = true;
      }
    }.bind(this));
  }

  /** EVENT EMITTERS **/

  public onInteractorSelectedChanged(interactor: string): void {
    this.interactorChanged.emit(interactor);
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
    if (!this.isTabInteractorActive) {
      this.isTabInteractorActive = true;
      this.isTabInteractionActive = false;

      this.resetPage();
    }
  }

  public interactionsTabSelected(): void {
    if (!this.isTabInteractionActive) {
      this.isTabInteractionActive = true;
      this.isTabInteractorActive = false;

      this.resetPage();
    }
  }

  /** GETTERS AND SETTERS **/

  get isTabInteractionActive(): boolean {
    return this._isTabInteractionActive;
  }

  set isTabInteractionActive(value: boolean) {
    this._isTabInteractionActive = value;
  }

  get isTabInteractorActive(): boolean {
    return this._isTabInteractorActive;
  }

  set isTabInteractorActive(value: boolean) {
    this._isTabInteractorActive = value;
  }
}
