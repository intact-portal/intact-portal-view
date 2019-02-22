export class CvTerm {
  private _shortName: string;
  private _miIdentifier: string;

  constructor(shortName: string, miIdentifier: string) {
    this._shortName = shortName;
    this._miIdentifier = miIdentifier;
  }

  get shortName(): string {
    return this._shortName;
  }

  set shortName(value: string) {
    this._shortName = value;
  }

  get miIdentifier(): string {
    return this._miIdentifier;
  }

  set miIdentifier(value: string) {
    this._miIdentifier = value;
  }
}
