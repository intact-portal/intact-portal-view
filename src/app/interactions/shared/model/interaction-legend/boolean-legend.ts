export class BooleanLegend<T> {
    private _label: string;
    private _value: T;

  constructor(label: string, value: T) {
    this._label = label;
    this._value = value;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get value(): T {
    return this._value;
  }

  set value(value: T) {
    this._value = value;
  }
}
