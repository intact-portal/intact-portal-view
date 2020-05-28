import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InteractionDetails} from '../../shared/model/interaction-details/interaction-details.model';
import {InteractionsDetailsService} from '../../shared/service/interactions-details.service';

declare const $: any;

@Component({
  selector: 'ip-details-tabs',
  templateUrl: './details-tabs.component.html',
  styleUrls: ['./details-tabs.component.css']
})
export class DetailsTabsComponent implements OnInit, AfterViewInit {

  @Input() interactionAc: string;
  @Output() featureChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() participantChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

  private _currentPageIndex: number;

  private _interactionDetails: InteractionDetails;

  private _isTabParticipantActive = false;
  private _isTabFeatureActive = false;

  constructor(private interactionsDetailsService: InteractionsDetailsService) { }

  ngOnInit() {
    $('ip-details-tabs').foundation();

    this.requestInteractionDetails();
  }

  ngAfterViewInit(): void {

    $('#details-tabs').on('change.zf.tabs', function() {
      if ($('#participants').hasClass('is-active') === true) {
        this.isTabParticipantActive = true;
        this.isTabFeatureActive = false;
      } else if ($('#features').hasClass('is-active') === true) {
        this.isTabParticipantActive = false;
        this.isTabFeatureActive = true;
      }
    }.bind(this));
  }


  private requestInteractionDetails() {
    this.interactionsDetailsService.getInteractionDetails(this.interactionAc)
      .subscribe(interactionDetails => {
        this.interactionDetails = interactionDetails;
        console.log(this.interactionDetails);
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

  public onParticipantSelectedChanged(participantsSelected: string[]): void {
    this.participantChanged.emit(participantsSelected);
  }
}
