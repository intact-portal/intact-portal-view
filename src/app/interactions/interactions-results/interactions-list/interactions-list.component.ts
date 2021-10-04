import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {InteractionsTableComponent} from './interactions-table/interactions-table.component';
import {InteractorsTableComponent} from './interactors-table/interactors-table.component';

@Component({
  selector: 'ip-interactions-list',
  templateUrl: './interactions-list.component.html',
  styleUrls: ['./interactions-list.component.css']
})
export class InteractionsListComponent implements OnInit, AfterViewInit {
  private _isTabInteractionActive = false;
  private _isTabInteractorActive = false;

  @ViewChild(InteractionsTableComponent, { static: true })
  interactionsTable: InteractionsTableComponent;

  @ViewChild(InteractorsTableComponent, { static: true })
  interactorsTable: InteractorsTableComponent;

  constructor() {
  }

  ngOnInit() {
    $('ip-interactions-list').foundation();
  }

  ngAfterViewInit() {
    $('#search-results-tabs').on('change.zf.tabs', () => {
      if ($('#interactions').hasClass('is-active') === true) {
        this.isTabInteractionActive = true;
        this.isTabInteractorActive = false;
        $('[aria-describedby="interactorsTable_info"]').css('visibility', 'hidden');
        $('[aria-describedby="interactionsTable_info"]').css('visibility', 'visible');
      } else if ($('#interactor').hasClass('is-active') === true) {
        this.isTabInteractionActive = false;
        this.isTabInteractorActive = true;
        $('[aria-describedby="interactorsTable_info"]').css('visibility', 'visible');
        $('[aria-describedby="interactionsTable_info"]').css('visibility', 'hidden');
      }
    });
  }

  /** EVENT EMITTERS **/

  public interactorsTabSelected(): void {
    if (!this.isTabInteractorActive) {
      this.isTabInteractorActive = true;
      this.isTabInteractionActive = false;
    }
  }

  public interactionsTabSelected(): void {
    if (!this.isTabInteractionActive) {
      this.isTabInteractionActive = true;
      this.isTabInteractorActive = false;
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

  get isInteractionTableShown(): boolean {
    return this.isTabInteractionActive || !(this.isTabInteractionActive || this.isTabInteractorActive);
  }
}
