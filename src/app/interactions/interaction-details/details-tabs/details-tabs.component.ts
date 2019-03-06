import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {InteractionDetails} from '../../shared/model/interaction-details/interaction-details.model';
import {InteractionsDetailsService} from '../../shared/service/interactions-details.service';
import {ParticipantDetails} from '../../shared/model/interaction-details/participant-details.model';

declare const $: any;

@Component({
  selector: 'iv-details-tabs',
  templateUrl: './details-tabs.component.html',
  styleUrls: ['./details-tabs.component.css']
})
export class DetailsTabsComponent implements OnInit, AfterViewInit {

  @Input() interactionAc: string;

  private _interactionDetails: InteractionDetails;
  private _participantDetails: ParticipantDetails;

  constructor(private interactionsDetailsService: InteractionsDetailsService) { }

  ngOnInit() {
    this.requestInteractionDetails();
    this.requestParticipantDetails();
  }

  ngAfterViewInit(): void {
    $('iv-details-tabs').foundation();
  }

  private requestInteractionDetails() {
    this.interactionsDetailsService.getInteractionDetails(this.interactionAc)
      .subscribe(interactionDetails => {
        this.interactionDetails = interactionDetails;
        console.log(this.interactionDetails);
    })
  }

  private requestParticipantDetails() {
    this.interactionsDetailsService.getParticipantsDetails(this.interactionAc)
      .subscribe(participantDetails => {
        this.participantDetails = participantDetails;
        console.log(this.participantDetails);
      })
  }

  get interactionDetails(): InteractionDetails {
    return this._interactionDetails;
  }

  set interactionDetails(value: InteractionDetails) {
    this._interactionDetails = value;
  }

  get participantDetails(): ParticipantDetails {
    return this._participantDetails;
  }

  set participantDetails(value: ParticipantDetails) {
    this._participantDetails = value;
  }
}
