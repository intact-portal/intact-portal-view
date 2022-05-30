import {AfterViewInit, Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {InteractionsTableComponent} from './interactions-table/interactions-table.component';
import {InteractorsTableComponent} from './interactors-table/interactors-table.component';
import {ActivatedRoute, Router} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {zip} from 'rxjs/internal/observable/zip';
import {ResultTable} from '../../shared/model/interactions-results/result-table-interface';

@UntilDestroy()
@Component({
  selector: 'ip-interactions-list',
  templateUrl: './interactions-list.component.html',
  styleUrls: ['./interactions-list.component.css']
})
export class InteractionsListComponent implements OnInit, AfterViewInit {
  private _isTabInteractionActive = false;
  private _isTabInteractorActive = false;

  @ViewChild(InteractionsTableComponent, {static: true})
  interactionsTable: InteractionsTableComponent;

  @ViewChild(InteractorsTableComponent, {static: true})
  interactorsTable: InteractorsTableComponent;

  table: EventEmitter<ResultTable> = new EventEmitter<ResultTable>();

  href: string;

  constructor(public router: Router, public route: ActivatedRoute) {
  }

  ngOnInit() {
    // Initial setter if foundation is activated, every time there is a modification of fragments otherwise
    this.route.fragment
      .pipe(untilDestroyed(this))
      .subscribe(value => {
        setTimeout(() => {
          switch (value) {
            case 'interactor':
              this._isTabInteractionActive = false;
              this._isTabInteractorActive = true;
              this.table.emit(this.interactorsTable);
              break;
            case 'interaction':
            default:
              this._isTabInteractionActive = true;
              this._isTabInteractorActive = false;
              this.table.emit(this.interactionsTable);
              break;
          }
        }, 0);
      });


    zip(
      this.route.url,
      this.route.queryParams
    ).pipe(untilDestroyed(this))
      .subscribe(([url, queryParams]) => {
        this.href = url.toString();

        const paramList = Object.keys(queryParams);
        if (paramList.length > 0) {
          this.href += `?${paramList.map(param => `${param}=${queryParams[param]}`).join('&')}`;
        }
      });
  }

  ngAfterViewInit() {
    $('ip-interactions-list').foundation();
    $('#search-results-tabs').on('change.zf.tabs', (e) => {
      if (e.namespace === 'tabs.zf') {
        setTimeout(() => {
            if ($('#interactions').hasClass('is-active') === true) {
              this.isTabInteractionActive = true;
              this.isTabInteractorActive = false;
              $('[aria-describedby="interactorsTable_info"]').css('visibility', 'hidden');
              $('[aria-describedby="interactionsTable_info"]').css('visibility', 'visible');
              this.table.emit(this.interactionsTable);
            } else if ($('#interactor').hasClass('is-active') === true) {
              this.isTabInteractionActive = false;
              this.isTabInteractorActive = true;
              $('[aria-describedby="interactorsTable_info"]').css('visibility', 'visible');
              $('[aria-describedby="interactionsTable_info"]').css('visibility', 'hidden');
              this.table.emit(this.interactorsTable);
            }
          }, 0);
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
