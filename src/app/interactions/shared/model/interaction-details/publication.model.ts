import {Xreferences} from './xreferences.model';
import {Annotation} from './annotation.model';

export class Publication {
  private _pubmedId: string;
  private _title: string;
  private _journal: string;
  private _publicationDate: String;
  private _authors: string[];
  private _publicationXrefs: Xreferences[];
  private _publicationAnnotations: Annotation[];

  constructor(pubmedId: string, title: string, journal: string, publicationDate: String, authors: string[],
              publicationXrefs: Xreferences[], publicationAnnotations: Annotation[]) {
    this._pubmedId = pubmedId;
    this._title = title;
    this._journal = journal;
    this._publicationDate = publicationDate;
    this._authors = authors;
    this._publicationXrefs = publicationXrefs;
    this._publicationAnnotations = publicationAnnotations;
  }

  get pubmedId(): string {
    return this._pubmedId;
  }

  set pubmedId(value: string) {
    this._pubmedId = value;
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

  get publicationDate(): String {
    return this._publicationDate;
  }

  set publicationDate(value: String) {
    this._publicationDate = value;
  }

  get authors(): string[] {
    return this._authors;
  }

  set authors(value: string[]) {
    this._authors = value;
  }

  get publicationXrefs(): Xreferences[] {
    return this._publicationXrefs;
  }

  set publicationXrefs(value: Xreferences[]) {
    this._publicationXrefs = value;
  }

  get publicationAnnotations(): Annotation[] {
    return this._publicationAnnotations;
  }

  set publicationAnnotations(value: Annotation[]) {
    this._publicationAnnotations = value;
  }
}
