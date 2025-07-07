import {AfterViewInit, Component, OnInit, input, output, viewChild, EventEmitter} from '@angular/core';
import {InteractionDetails} from '../../shared/model/interaction-details/interaction-details.model';
import {InteractionsDetailsService} from '../../shared/service/interactions-details.service';
import {ParticipantTableComponent} from './details/participant-table/participant-table.component';
import {FeaturesTableComponent} from './details/features-table/features-table.component';
import { HttpErrorResponse } from '@angular/common/http';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ResultTable} from '../../shared/model/interactions-results/result-table-interface';
import {ActivatedRoute} from '@angular/router';
import {FragmentService} from '../../shared/service/fragment.service';

@UntilDestroy()
@Component({
    selector: 'ip-details-tabs',
    templateUrl: './details-tabs.component.html',
    styleUrls: ['./details-tabs.component.css'],
    standalone: false
})
export class DetailsTabsComponent implements OnInit, AfterViewInit {

  readonly interactionAc = input.required<string>();
  readonly featureChanged = output<string>();
  readonly moleculeTypesCollected = output<Set<string>>();

  table: EventEmitter<ResultTable> = new EventEmitter<ResultTable>();
  href: string;

  private _currentPageIndex: number;

  private _interactionDetails: InteractionDetails;

  private _isTabParticipantActive = false;
  private _isTabFeatureActive = false;

  readonly participantTable = viewChild(ParticipantTableComponent);

  readonly featureTable = viewChild(FeaturesTableComponent);

  constructor(private interactionsDetailsService: InteractionsDetailsService, private route: ActivatedRoute, private fragment: FragmentService) {
  }

  ngOnInit() {
    this.requestInteractionDetails();

    // Initial setter if foundation is activated, every time there is a modification of fragments otherwise
    this.fragment.$onChange
      .pipe(untilDestroyed(this))
      .subscribe(value => {
        setTimeout(() => {
          switch (value) {
            case 'participants':
              this.isTabParticipantActive = true;
              this.isTabFeatureActive = false;
              this.table.emit(this.participantTable());
              break;
            case 'features':
              this.isTabParticipantActive = false;
              this.isTabFeatureActive = true;
              this.table.emit(this.featureTable());
              break;
            default:
              this.isTabParticipantActive = false;
              this.isTabFeatureActive = false;
              this.table.emit(null);
          }
        }, 0);
      });

    this.route.url.pipe(untilDestroyed(this))
      .subscribe((url) => {
        this.href = url.join('/');
      });
  }

  ngAfterViewInit(): void {
    $('ip-details-tabs').foundation();
    $('#details-tabs').on('change.zf.tabs', (e) => {
      if (e.namespace === 'tabs.zf') {
        if ($('#participants').hasClass('is-active') === true) {
          this.fragment.value = 'participants';
        } else if ($('#features').hasClass('is-active') === true) {
          this.fragment.value = 'features';
        } else if ($('#interactionDetails').hasClass('is-active') === true) {
          this.fragment.value = 'interactionDetails';
        }
      }
    });
  }


  private requestInteractionDetails() {
    this.interactionsDetailsService.getInteractionDetails(this.interactionAc())
      .pipe(untilDestroyed(this))
      .subscribe(interactionDetails => {
        if (!(interactionDetails instanceof HttpErrorResponse)) {
          this.interactionDetails = interactionDetails;
        }
      })
  }

  get interactionDetails(): InteractionDetails {
    return this._interactionDetails;
  }

  set interactionDetails(value: InteractionDetails) {
    this._interactionDetails = value;
  }

  get currentPageIndex(): number {
    return this._currentPageIndex;
  }

  set currentPageIndex(value: number) {
    this._currentPageIndex = value;
  }

  get isTabParticipantActive(): boolean {
    return this._isTabParticipantActive;
  }

  set isTabParticipantActive(value: boolean) {
    this._isTabParticipantActive = value;
  }

  get isTabFeatureActive(): boolean {
    return this._isTabFeatureActive;
  }

  set isTabFeatureActive(value: boolean) {
    this._isTabFeatureActive = value;
  }

  /** EVENT EMITTERS **/

  public onFeatureSelectedChanged(featureAc: string): void {
    this.featureChanged.emit(featureAc);
  }
}
