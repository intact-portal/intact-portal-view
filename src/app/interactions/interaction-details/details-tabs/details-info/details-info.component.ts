import {Component, Input, OnInit} from '@angular/core';
import {InteractionDetails} from '../../../shared/model/interaction-details/interaction-details.model';

@Component({
  selector: 'iv-details-info',
  templateUrl: './details-info.component.html',
  styleUrls: ['./details-info.component.css']
})
export class DetailsInfoComponent implements OnInit {

  @Input() interactionDetails: InteractionDetails;

  constructor() { }

  ngOnInit() {
  }

}
