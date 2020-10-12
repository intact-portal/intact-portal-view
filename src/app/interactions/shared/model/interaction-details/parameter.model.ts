import {CvTerm} from "./cv-term.model";

export class Parameter {
  private _type: CvTerm;
  private _unit: CvTerm;
  private _value: string;


  constructor(type: CvTerm, unit: CvTerm, value: string) {
    this._type = type;
    this._unit = unit;
    this._value = value;
  }

  get type(): CvTerm {
    return this._type;
  }

  set type(value: CvTerm) {
    this._type = value;
  }

  get unit(): CvTerm {
    return this._unit;
  }

  set unit(value: CvTerm) {
    this._unit = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }
}
