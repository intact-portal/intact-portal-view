import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {InteractionDetails} from '../../shared/model/interaction-details/interaction-details.model';

declare const $: any;

@Component({
  selector: 'iv-details',
  templateUrl: './details-dashboard.component.html',
  styleUrls: ['./details-dashboard.component.css']
})
export class DetailsDashboardComponent implements OnInit, AfterViewInit {

  @Input() interactionDetails: InteractionDetails;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    $('iv-details').foundation();
  }

}
