export interface BooleanLegend<T> {
  true: BooleanLegendElement<T>,
  false: BooleanLegendElement<T>
}

interface BooleanLegendElement<T> {
  label: string,
  value: T
}
