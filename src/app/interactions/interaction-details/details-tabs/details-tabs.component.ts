import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {InteractionDetails} from '../../shared/model/interaction-details/interaction-details.model';
import {InteractionsDetailsService} from '../../shared/service/interactions-details.service';

declare const $: any;

@Component({
  selector: 'iv-details-tabs',
  templateUrl: './details-tabs.component.html',
  styleUrls: ['./details-tabs.component.css']
})
export class DetailsTabsComponent implements OnInit, AfterViewInit {

  @Input() interactionAc: string;

  private _interactionDetails: InteractionDetails;

  constructor(private interactionsDetailsService: InteractionsDetailsService) { }

  ngOnInit() {
    this.requestInteractionDetails();
  }

  ngAfterViewInit(): void {
    $('iv-details').foundation();
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
}
