import {Component, Input, OnInit} from '@angular/core';
import {NetworkLegend} from "../../../shared/model/interaction-legend/network-legend";

@Component({
    selector: 'ip-interactions-legend',
    templateUrl: './interactions-legend.component.html',
    styleUrls: ['./interactions-legend.component.css'],
    standalone: false
})
export class InteractionsLegendComponent implements OnInit {
  objectKeys = Object.keys;

  @Input() legend: NetworkLegend;
  @Input() expanded: boolean;
  @Input() mutation: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
