export class Xreferences {
  private _database: string;
  private _identifier: string;
  private _miIdentifier: string;

  constructor(database: string, identifier: string, miIdentifier: string) {
    this._database = database;
    this._identifier = identifier;
    this._miIdentifier = miIdentifier;
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

  get miIdentifier(): string {
    return this._miIdentifier;
  }

  set miIdentifier(value: string) {
    this._miIdentifier = value;
  }
}
