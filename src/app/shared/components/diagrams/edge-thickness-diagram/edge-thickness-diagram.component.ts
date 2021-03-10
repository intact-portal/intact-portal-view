import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ip-edge-thickness-diagram',
  templateUrl: './edge-thickness-diagram.component.html',
  styleUrls: ['./edge-thickness-diagram.component.css']
})
export class EdgeThicknessDiagramComponent implements OnInit {

  @Input() minThickness: number;
  @Input() maxThickness: number;
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() color: string = '#ababab';

  constructor() {
  }

  ngOnInit() {
  }

  get width(): number {
    return this.totalHeight * 8;
  }

  get height(): number {
    return this.maxThickness;
  }

  get totalHeight(): number {
    return this.height + this.spacing + this.fontSize;
  }

  get edgeWidth(): number {
    return this.maxThickness * 2;
  }

  get fontSize(): number {
    return this.height / 2;
  }

  get spacing(): number {
    return this.height / 12;
  }

  get viewBox(): string {
    return `0 0 ${this.width} ${this.totalHeight}`;
  }

  get connectionPoints(): string {
    return `
    ${this.edgeWidth} ${(this.height - this.minThickness) / 2},
    ${this.width - this.edgeWidth} 0,
    ${this.width - this.edgeWidth} ${this.maxThickness},
    ${this.edgeWidth} ${(this.height + this.minThickness) / 2}
    `;
  }
}
