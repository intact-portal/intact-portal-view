export class FeatureDataset {
  private _title: string;
  private _month: string;
  private _year: number;
  private _pubmed: any
  private _pubmedId: any;
  private _pubmedAuthor: any;
  private _pubmedYear: any;


  constructor(title: string, month: string, year: number, pubmed: any, pubmedId: any, pubmedAuthor: any, pubmedYear: any) {
    this._title = title;
    this._month = month;
    this._year = year;
    this._pubmed = pubmed;
    this._pubmedId = pubmedId;
    this._pubmedAuthor = pubmedAuthor;
    this._pubmedYear = pubmedYear;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get month(): string {
    return this._month;
  }

  set month(value: string) {
    this._month = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  get pubmed(): any {
    return this._pubmed;
  }

  set pubmed(value: any) {
    this._pubmed = value;
  }

  get pubmedId(): any {
    return this._pubmedId;
  }

  set pubmedId(value: any) {
    this._pubmedId = value;
  }

  get pubmedAuthor(): any {
    return this._pubmedAuthor;
  }

  set pubmedAuthor(value: any) {
    this._pubmedAuthor = value;
  }

  get pubmedYear(): any {
    return this._pubmedYear;
  }

  set pubmedYear(value: any) {
    this._pubmedYear = value;
  }
}
