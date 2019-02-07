export class ExperimentalConditions {
  private _descritpion: string;
  private _unit: string;
  private _value: string;

  constructor(descritpion: string, unit: string, value: string) {
    this._descritpion = descritpion;
    this._unit = unit;
    this._value = value;
  }

  get descritpion(): string {
    return this._descritpion;
  }

  set descritpion(value: string) {
    this._descritpion = value;
  }

  get unit(): string {
    return this._unit;
  }

  set unit(value: string) {
    this._unit = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }
}
