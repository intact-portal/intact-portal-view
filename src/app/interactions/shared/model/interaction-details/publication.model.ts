import {Xreferences} from './xreferences.model';
import {Annotations} from './annotations.model';

export class Publication {
  private _pubmedIdStr: string;
  private _title: string;
  private _journal: string;
  private _publicationDate: Date;
  private _authors: string[];
  private _xrefs: Xreferences[];
  private _annotations: Annotations[];

  constructor(pubmedIdStr: string, title: string, journal: string, publicationDate: Date, authors: string[], xrefs: Xreferences[], annotations: Annotations[]) {
    this._pubmedIdStr = pubmedIdStr;
    this._title = title;
    this._journal = journal;
    this._publicationDate = publicationDate;
    this._authors = authors;
    this._xrefs = xrefs;
    this._annotations = annotations;
  }

  get pubmedIdStr(): string {
    return this._pubmedIdStr;
  }

  set pubmedIdStr(value: string) {
    this._pubmedIdStr = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get journal(): string {
    return this._journal;
  }

  set journal(value: string) {
    this._journal = value;
  }

  get publicationDate(): Date {
    return this._publicationDate;
  }

  set publicationDate(value: Date) {
    this._publicationDate = value;
  }

  get authors(): string[] {
    return this._authors;
  }

  set authors(value: string[]) {
    this._authors = value;
  }

  get xrefs(): Xreferences[] {
    return this._xrefs;
  }

  set xrefs(value: Xreferences[]) {
    this._xrefs = value;
  }

  get annotations(): Annotations[] {
    return this._annotations;
  }

  set annotations(value: Annotations[]) {
    this._annotations = value;
  }
}
