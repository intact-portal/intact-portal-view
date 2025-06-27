import {Component, computed, EventEmitter, Input, model, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import moment, {Moment} from 'moment';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {extractRange} from '../utils';

@Component({
  selector: 'ip-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
@UntilDestroy()
export class DateRangeComponent implements OnInit, OnChanges {

  model = model.required<string>()
  ranges = computed(() => extractRange(this.model()) as [string, string])
  start: Moment;
  end: Moment;

  constructor() {
  }

  ngOnInit(): void {

  }

  onChange(value: string) {
    console.log(value)
    if (value.length === 10) {
      this.model.set(`[${this.start.format('YYYYMMDD')} TO ${this.end?.format('YYYYMMDD')}]`)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const range = extractRange(this.model());
    this.start = moment(range[0], 'YYYYMMDD');
    this.end = moment(range[1], 'YYYYMMDD');
  }
}
