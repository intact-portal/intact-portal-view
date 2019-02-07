export class TypeValueModel {
  private _type: string;
  private _value: string;

  constructor(type: string, value: string) {
    this._type = type;
    this._value = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }
}
