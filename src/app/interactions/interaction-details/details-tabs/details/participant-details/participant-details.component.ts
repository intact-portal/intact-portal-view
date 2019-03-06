import {Component, Input, OnInit} from '@angular/core';
import {ParticipantDetails} from '../../../../shared/model/interaction-details/participant-details.model';

import 'datatables.net';
import 'datatables.net-zf';

declare const $: any;

@Component({
  selector: 'iv-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.css']
})
export class ParticipantDetailsComponent implements OnInit {

  @Input() participantDetails: ParticipantDetails;

  constructor() { }

  ngOnInit() {
  }

}
