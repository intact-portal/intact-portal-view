import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ip-color-range-diagram',
  templateUrl: './color-range-diagram.component.html',
  styleUrls: ['./color-range-diagram.component.css']
})
export class ColorRangeDiagramComponent implements OnInit {
  @Input() rangeMap: any;
  private _points: ColoredPoint[] = [];
  min: number = null;
  max: number = null;

  constructor() {
  }

  ngOnInit() {
    Object.keys(this.rangeMap)
      .forEach(key => {
        let [start, stop] = key.split(' - ').map(Number.parseFloat);
        if (this.min == null || start < this.min) this.min = start;
        if (this.max == null || stop > this.max) this.max = stop;
        let color = this.rangeMap[key];
        this.points.push(new ColoredPoint(color, start))
        this.points.push(new ColoredPoint(color, stop))
      }, this);
  }

  get points(): ColoredPoint[] {
    return this._points;
  }

  get pointLabels(): number[] {
    return this._points.map(p => p.x).filter((v, i) => i % 4 == 1);
  }

  get height(): number {
    return (this.max - this.min) / 8;
  }

  get strokeWidth(): number {
    return this.height / 14;
  }

  get viewBox(): string {
    return `${this.min - this.strokeWidth / 2} ${-this.strokeWidth / 2} ${this.max + this.strokeWidth} ${this.height + this.strokeWidth}`;
  }
}

class ColoredPoint {
  constructor(public color: string, public x: number) {
  }
}
