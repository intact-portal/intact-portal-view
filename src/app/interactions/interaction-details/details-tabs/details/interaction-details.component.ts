import {Component, Input, OnInit} from '@angular/core';
import {InteractionDetails} from '../../../shared/model/interaction-details/interaction-details.model';

@Component({
  selector: 'iv-interaction-details',
  templateUrl: './interaction-details.component.html',
  styleUrls: ['./interaction-details.component.css']
})
export class InteractionDetailsComponent implements OnInit {

  @Input() interactionDetails: InteractionDetails;

  constructor() { }

  ngOnInit() {
  }

}
