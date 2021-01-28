import {Component, Input, OnInit} from '@angular/core';
import {EdgeShape} from "../../../../interactions/shared/model/network-shapes/edge-shape";

@Component({
  selector: 'ip-edge-diagram',
  templateUrl: './edge-diagram.component.html',
  styleUrls: ['./edge-diagram.component.css']
})
export class EdgeDiagramComponent implements OnInit {
  @Input() shape: EdgeShape = EdgeShape.SOLID_LINE;
  @Input() color: string = "#d6d6d6";
  @Input() thickness: number = 15;

  constructor() { }

  ngOnInit() {
  }

  get strokeShape(): string {
    return this.shape == EdgeShape.SOLID_LINE ? "100" : "25 10";
  }
}
