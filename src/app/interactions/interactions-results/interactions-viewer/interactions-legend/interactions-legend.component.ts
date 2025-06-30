import {Component, OnInit, input} from '@angular/core';
import {NetworkLegend} from "../../../shared/model/interaction-legend/network-legend";

@Component({
    selector: 'ip-interactions-legend',
    templateUrl: './interactions-legend.component.html',
    styleUrls: ['./interactions-legend.component.css'],
    standalone: false
})
export class InteractionsLegendComponent implements OnInit {
  objectKeys = Object.keys;

  readonly legend = input<NetworkLegend>(undefined);
  readonly expanded = input<boolean>(undefined);
  readonly mutation = input<boolean>(undefined);

  constructor() {
  }

  ngOnInit() {
  }

}
