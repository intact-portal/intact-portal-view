export class Xreferences {
  private _database: string;
  private _identifier: string;

  constructor(database: string, identifier: string) {
    this._database = database;
    this._identifier = identifier;
  }

  get database(): string {
    return this._database;
  }

  set database(value: string) {
    this._database = value;
  }

  get identifier(): string {
    return this._identifier;
  }

  set identifier(value: string) {
    this._identifier = value;
  }
}
