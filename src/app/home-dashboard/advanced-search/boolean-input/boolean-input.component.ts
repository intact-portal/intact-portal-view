import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'ip-boolean-input',
  templateUrl: './boolean-input.component.html',
  styleUrls: ['./boolean-input.component.css']
})
export class BooleanInputComponent implements OnInit, OnChanges {

  @Input()
  model: string;

  @Output()
  modelChange: EventEmitter<string> = new EventEmitter<string>();

  value: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange() {
    this.modelChange.emit(this.value ? 'TRUE' : 'FALSE')
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.value = this.model?.toLowerCase() === 'true';
  }

}
