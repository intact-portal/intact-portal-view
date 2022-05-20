import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import moment, {Moment} from 'moment';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@Component({
  selector: 'ip-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
@UntilDestroy()
export class DateRangeComponent implements OnInit, OnChanges {


  @Input()
  model: string;

  @Output()
  modelChange: EventEmitter<string> = new EventEmitter<string>();

  start: Moment;
  end: Moment;

  constructor() {
  }

  ngOnInit(): void {

  }

  onChange(value: string) {
    console.log(value)
    if (value.length === 10) {
      this.modelChange.emit(`[${this.start.format('YYYYMMDD')} TO ${this.end?.format('YYYYMMDD')}]`);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const range = this.model?.split(/\[|]| TO /ig).filter(s => s);
    this.start = moment(range[0], 'YYYYMMDD');
    this.end = moment(range[1], 'YYYYMMDD');
  }
}
