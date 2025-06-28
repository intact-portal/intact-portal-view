import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {extractRange} from '../utils';

@Component({
    selector: 'ip-range-input',
    templateUrl: './range-input.component.html',
    styleUrls: ['./range-input.component.css'],
    standalone: false
})
export class RangeInputComponent<T> implements OnInit, OnChanges {

  @Input()
  typeD: string;

  @Input()
  step: number = 1;

  @Input()
  model: string;

  @Output()
  modelChange: EventEmitter<string> = new EventEmitter<string>();

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
    const range = extractRange(this.model);
    this.start = range[0];
    this.stop = range[1];
  }
}
