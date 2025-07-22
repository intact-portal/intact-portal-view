import {Component, OnInit, input} from '@angular/core';
import {EdgeShape} from '../../../../interactions/shared/model/network-shapes/edge-shape';

@Component({
    selector: 'ip-edge-diagram',
    templateUrl: './edge-diagram.component.html',
    styleUrls: ['./edge-diagram.component.css'],
    standalone: false
})
export class EdgeDiagramComponent implements OnInit {
  readonly shape = input<EdgeShape>(EdgeShape.SOLID_LINE);
  readonly color = input<string>('#d6d6d6');
  readonly thickness = input<number>(15);
  readonly midCrossColor = input<string>('');

  constructor() {
  }

  ngOnInit() {
  }

  get strokeShape(): string {
    return this.shape() === EdgeShape.SOLID_LINE ? '100' : '25 10';
  }
}
