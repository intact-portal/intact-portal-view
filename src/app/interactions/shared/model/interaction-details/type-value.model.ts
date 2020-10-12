export class TypeValueModel<T = string, V = string> {
  private _type: T;
  private _value: V;

  constructor(type: T, value: V) {
    this._type = type;
    this._value = value;
  }

  get type(): T {
    return this._type;
  }

  set type(value: T) {
    this._type = value;
  }

  get value(): V {
    return this._value;
  }

  set value(value: V) {
    this._value = value;
  }
}
