export class PubmedDataset {
  private _id: string;
  private _author: string;
  private _year: string;


  constructor(id: string, author: string, year: string) {
    this._id = id;
    this._author = author;
    this._year = year;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get year(): string {
    return this._year;
  }

  set year(value: string) {
    this._year = value;
  }
}
