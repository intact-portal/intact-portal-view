export class TypeValueModel<T = string, V = string> {
  constructor(
    public readonly type: T,
    public readonly value: V
  ) {
  }
}
