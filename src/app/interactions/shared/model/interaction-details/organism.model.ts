export class Organism {
  private _scientificName: string;
  private _taxId: any;

  constructor(scientificName: string, taxId: any) {
    this._scientificName = scientificName;
    this._taxId = taxId;
  }

  get scientificName(): string {
    return this._scientificName;
  }

  set scientificName(value: string) {
    this._scientificName = value;
  }

  get taxId(): any {
    return this._taxId;
  }

  set taxId(value: any) {
    this._taxId = value;
  }
}
