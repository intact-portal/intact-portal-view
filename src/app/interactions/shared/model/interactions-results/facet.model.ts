export class Facet<T = number> {
  private _value: string;
  private _termId: string;
  private _visualProperty: string;
  private _valueCount: T;

  constructor(value: string, termId: string, visualProperty: string, valueCount: T) {
    this._value = value;
    this._termId = termId;
    this._visualProperty = visualProperty;
    this._valueCount = valueCount;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get termId(): string {
    return this._termId;
  }

  set termId(value: string) {
    this._termId = value;
  }

  get visualProperty(): string {
    return this._visualProperty;
  }

  set visualProperty(value: string) {
    this._visualProperty = value;
  }

  get valueCount(): T {
    return this._valueCount;
  }

  set valueCount(value: T) {
    this._valueCount = value;
  }
}
