import {CvTerm} from './cv-term.model';

export class Xreferences {
  private _database: CvTerm;
  private _ac: string;
  private _identifier: string;
  private _qualifier: CvTerm;

  // constructor(database: CvTerm, identifier: string) {
  //   this._database = database;
  //   this._identifier = identifier;
  // }

  constructor(database: CvTerm, ac: string, identifier: string, qualifier: CvTerm) {
    this._database = database;
    this._ac = ac;
    this._identifier = identifier;
    this._qualifier = qualifier;
  }

  get database(): CvTerm {
    return this._database;
  }

  set database(value: CvTerm) {
    this._database = value;
  }

  get ac(): string {
    return this._ac;
  }

  set ac(value: string) {
    this._ac = value;
  }

  get identifier(): string {
    return this._identifier;
  }

  set identifier(value: string) {
    this._identifier = value;
  }

  get qualifier(): CvTerm {
    return this._qualifier;
  }

  set qualifier(value: CvTerm) {
    this._qualifier = value;
  }
}
