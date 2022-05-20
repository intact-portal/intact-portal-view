import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'ip-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.css']
})
export class RangeInputComponent<T> implements OnInit, OnChanges {

  @Input()
  typeD: string;

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
    const range = this.model?.split(/\[|]| TO /ig).filter(s => s);
    this.start = range[0];
    this.stop = range[1];
  }
}
