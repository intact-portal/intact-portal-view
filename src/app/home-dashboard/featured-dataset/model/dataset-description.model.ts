import {Input} from '@angular/core';

export class DatasetDescription {
  private _title: string;
  private _month: string;
  private _year: string;


  constructor(title: string, month: string, year: string) {
    this._title = title;
    this._month = month;
    this._year = year;
  }


  get title(): string {
    return this._title;
  }

  @Input()
  set title(value: string) {
    this._title = value;
  }

  get month(): string {
    return this._month;
  }

  set month(value: string) {
    this._month = value;
  }

  get year(): string {
    return this._year;
  }

  set year(value: string) {
    this._year = value;
  }
}
