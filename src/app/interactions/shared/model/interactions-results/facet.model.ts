export interface Facet<T = number> {
  value: string,
  termId: string,
  visualProperty: string,
  valueCount: T
}
