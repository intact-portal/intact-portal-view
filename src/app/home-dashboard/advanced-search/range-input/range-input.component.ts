import {Component, OnChanges, OnInit, SimpleChanges, input, output} from '@angular/core';
import {extractRange} from '../utils';

@Component({
    selector: 'ip-range-input',
    templateUrl: './range-input.component.html',
    styleUrls: ['./range-input.component.css'],
    standalone: false
})
export class RangeInputComponent<T> implements OnInit, OnChanges {

  readonly typeD = input<string>(undefined);

  readonly step = input<number>(1);

  readonly model = input<string>(undefined);

  readonly modelChange = output<string>();

  start: string;
  stop: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange() {
    this.modelChange.emit(`[${this.start} TO ${this.stop}]`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    const range = extractRange(this.model());
    this.start = range[0];
    this.stop = range[1];
  }
}
