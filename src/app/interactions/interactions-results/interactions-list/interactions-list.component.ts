import {AfterViewInit, Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {InteractionsTableComponent} from './interactions-table/interactions-table.component';
import {InteractorsTableComponent} from './interactors-table/interactors-table.component';
import {ActivatedRoute, Router} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {zip} from 'rxjs';
import {ResultTable} from '../../shared/model/interactions-results/result-table-interface';
import {FragmentService} from '../../shared/service/fragment.service';

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

  constructor(public router: Router, public route: ActivatedRoute, public fragment: FragmentService) {
  }

  ngOnInit() {
    // Initial setter if foundation is activated, every time there is a modification of fragments otherwise
    this.fragment.$onChange
      .pipe(untilDestroyed(this))
      .subscribe(value => {
        setTimeout(() => {
          switch (value) {
            case 'interactors':
              this._isTabInteractionActive = false;
              this._isTabInteractorActive = true;
              $('[aria-describedby="interactorsTable_info"]').css('visibility', 'visible');
              $('[aria-describedby="interactionsTable_info"]').css('visibility', 'hidden');
              this.table.emit(this.interactorsTable);
              break;
            case 'interactions':
            default:
              this._isTabInteractionActive = true;
              this._isTabInteractorActive = false;
              $('[aria-describedby="interactorsTable_info"]').css('visibility', 'hidden');
              $('[aria-describedby="interactionsTable_info"]').css('visibility', 'visible');
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
            this.fragment.value = 'interactions';
          } else if ($('#interactors').hasClass('is-active') === true) {
            this.fragment.value = 'interactors';
          }
        }, 0);
      }
    });
    setTimeout(() => this.table.emit(this.interactionsTable), 0);
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
