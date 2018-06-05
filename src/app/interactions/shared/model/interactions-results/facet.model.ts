export class Facet {
  private _value: string;
  private _valueCount: number;

  constructor(value: string, valueCount: number) {
    this._value = value;
    this._valueCount = valueCount;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get valueCount(): number {
    return this._valueCount;
  }

  set valueCount(value: number) {
    this._valueCount = value;
  }
}
