export class Interactome {

  private _name: string;
  private _symbol: string;
  private _psi25: string;
  private _psi30: string;
  private _taxid: number;

  constructor(name: string, symbol: string, psi25: string, psi30: string, taxid: number) {
    this.name = name;
    this.symbol = symbol;
    this.psi25 = psi25;
    this.psi30 = psi30;
    this.taxid = taxid;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get symbol(): string {
    return this._symbol;
  }

  set symbol(value: string) {
    this._symbol = value;
  }

  get psi25(): string {
    return this._psi25;
  }

  set psi25(value: string) {
    this._psi25 = value;
  }

  get psi30(): string {
    return this._psi30;
  }

  set psi30(value: string) {
    this._psi30 = value;
  }

  get taxid(): number {
    return this._taxid;
  }

  set taxid(value: number) {
    this._taxid = value;
  }
}
