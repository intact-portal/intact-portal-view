import {BooleanLegend} from './boolean-legend';
import {EdgeShape} from '../network-shapes/edge-shape';

export class EdgeLegend {
  constructor(
    public readonly summary_color: any,
    public readonly summary_width: { minValue: number; maxValue: number; minWidth: number; maxWidth: number },
    public readonly evidence_color: any,
    public readonly mutation_color: { true: BooleanLegend<string>; false: BooleanLegend<string> },
    public readonly mutation_width: { true: BooleanLegend<number>; false: BooleanLegend<number> },
    public readonly expansion: { true: BooleanLegend<EdgeShape>; false: BooleanLegend<EdgeShape> }
  ) {
  }
}
