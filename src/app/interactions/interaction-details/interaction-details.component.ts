import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { InteractionDetails } from '../shared/model/interaction-details/interaction-details.model';
import {InteractionsDetailsService} from '../shared/service/interactions-details.service';

@Component({
  selector: 'iv-interactions-details',
  templateUrl: './interaction-details.component.html',
  styleUrls: ['./interaction-details.component.css']
})
export class InteractionDetailsComponent implements OnInit {

  private _interactionAc: string;
  private _interactionDetails: InteractionDetails;

  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private router: Router,
              private interactionsDetailsService: InteractionsDetailsService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.interactionAc = params['id'];
        this.titleService.setTitle('Interaction - ' + this.interactionAc);

        this.requestInteractionDetails();
      })

  }

  private requestInteractionDetails() {
    // TODO
    // this.interactionsDetailsService.getDetailsByInteractionAc(this.interactionAc)
    //   .subscribe(interactionDetails => {
    //     this.interactionDetails = interactionDetails;
    // })
  }

  get interactionAc(): string {
    return this._interactionAc;
  }

  set interactionAc(value: string) {
    this._interactionAc = value;
  }

  get interactionDetails(): InteractionDetails {
    return this._interactionDetails;
  }

  set interactionDetails(value: InteractionDetails) {
    this._interactionDetails = value;
  }
}
