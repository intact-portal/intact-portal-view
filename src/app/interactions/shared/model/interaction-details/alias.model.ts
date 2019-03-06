import {CvTerm} from './cv-term.model';

export class Alias {
  private _name: string;
  private _type: CvTerm;

  constructor(name: string, type: CvTerm) {
    this._name = name;
    this._type = type;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): CvTerm {
    return this._type;
  }

  set type(value: CvTerm) {
    this._type = value;
  }
}
