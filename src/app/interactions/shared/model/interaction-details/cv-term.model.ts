export class CvTerm {
  private _shortName: string;
  private _identifier: string;

  constructor(shortName: string, miIdentifier: string) {
    this._shortName = shortName;
    this._identifier = miIdentifier;
  }

  get shortName(): string {
    return this._shortName;
  }

  set shortName(value: string) {
    this._shortName = value;
  }

  get identifier(): string {
    return this._identifier;
  }

  set identifier(value: string) {
    this._identifier = value;
  }
}
