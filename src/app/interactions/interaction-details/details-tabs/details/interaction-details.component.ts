import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InteractionDetails} from '../../../shared/model/interaction-details/interaction-details.model';


@Component({
  selector: 'ip-interaction-details',
  templateUrl: './interaction-details.component.html',
  styleUrls: ['./interaction-details.component.css']
})
export class InteractionDetailsComponent implements OnInit {

  @Input() interactionDetails: InteractionDetails;

  @Output() featureToEmit: EventEmitter<string> = new EventEmitter<string>();

  hover = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDetailsButton(): void {
    if ($('#detailsPanel').is(':visible')) {
      $('#detailsPanel').hide();
      $('i#toggleDetails').removeClass('icon-minus').addClass('icon-plus');
    } else {
      $('#detailsPanel').show();
      $('i#toggleDetails').removeClass('icon-plus').addClass('icon-minus');
    }
  }
}
