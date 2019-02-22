import {CvTerm} from './cv-term.model';

export class Annotation {
  private _topic: CvTerm;
  private _description: string;

  constructor(topic: CvTerm, description: string) {
    this._topic = topic;
    this._description = description;
  }

  get topic(): CvTerm {
    return this._topic;
  }

  set topic(value: CvTerm) {
    this._topic = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
