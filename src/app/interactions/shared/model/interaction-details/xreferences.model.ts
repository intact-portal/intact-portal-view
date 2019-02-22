import {CvTerm} from './cv-term.model';

export class Xreferences {
  private _database: CvTerm;
  private _identifier: string;

  constructor(database: CvTerm, identifier: string) {
    this._database = database;
    this._identifier = identifier;
  }

  get database(): CvTerm {
    return this._database;
  }

  set database(value: CvTerm) {
    this._database = value;
  }

  get identifier(): string {
    return this._identifier;
  }

  set identifier(value: string) {
    this._identifier = value;
  }
}
