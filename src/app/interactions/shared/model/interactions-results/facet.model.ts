export class Facet<T = number> {
  constructor(
    public readonly value: string,
    public readonly termId: string,
    public readonly visualProperty: string,
    public readonly valueCount: T) {
  }
}
