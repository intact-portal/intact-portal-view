import {Component, OnChanges, OnInit, SimpleChanges, input, output} from '@angular/core';

@Component({
    selector: 'ip-boolean-input',
    templateUrl: './boolean-input.component.html',
    styleUrls: ['./boolean-input.component.css'],
    standalone: false
})
export class BooleanInputComponent implements OnInit, OnChanges {

  readonly model = input<string>(undefined);

  readonly modelChange = output<string>();

  value: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange() {
    this.modelChange.emit(this.value ? 'TRUE' : 'FALSE')
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.value = this.model()?.toLowerCase() === 'true';
  }

}
