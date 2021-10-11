import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {InteractionDetails} from '../../shared/model/interaction-details/interaction-details.model';
import {InteractionsDetailsService} from '../../shared/service/interactions-details.service';
import {ParticipantTableComponent} from './details/participant-table/participant-table.component';
import {FeaturesTableComponent} from './details/features-table/features-table.component';
import {SubscriberComponent} from '../../../shared/utils/observer-utils';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'ip-details-tabs',
  templateUrl: './details-tabs.component.html',
  styleUrls: ['./details-tabs.component.css']
})
export class DetailsTabsComponent extends SubscriberComponent implements OnInit, AfterViewInit {

  @Input() interactionAc: string;
  @Output() featureChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() moleculeTypesCollected: EventEmitter<Set<string>> = new EventEmitter<Set<string>>();

  private _currentPageIndex: number;

  private _interactionDetails: InteractionDetails;

  private _isTabParticipantActive = false;
  private _isTabFeatureActive = false;

  @ViewChild(ParticipantTableComponent, { static: true })
  participantTable: ParticipantTableComponent;

  @ViewChild(FeaturesTableComponent, { static: true })
  featureTable: FeaturesTableComponent;

  constructor(private interactionsDetailsService: InteractionsDetailsService) {
    super()
  }

  ngOnInit() {
    $('ip-details-tabs').foundation();
    this.requestInteractionDetails();
  }

  ngAfterViewInit(): void {
    $('#details-tabs').on('change.zf.tabs', () => {
      if ($('#participants').hasClass('is-active') === true) {
        this.isTabParticipantActive = true;
        this.isTabFeatureActive = false;
      } else if ($('#features').hasClass('is-active') === true) {
        this.isTabParticipantActive = false;
        this.isTabFeatureActive = true;
      } else {
        this.isTabParticipantActive = false;
        this.isTabFeatureActive = false;
      }
    });
  }


  private requestInteractionDetails() {
    this.subscribe(
      this.interactionsDetailsService.getInteractionDetails(this.interactionAc), interactionDetails => {
        if (!(interactionDetails instanceof HttpErrorResponse)) this.interactionDetails = interactionDetails;
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
