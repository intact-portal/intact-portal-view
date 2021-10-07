import {BooleanLegend} from './boolean-legend';
import {EdgeShape} from '../network-shapes/edge-shape';

export interface EdgeLegend {
  summary_color: any,
  summary_width: { minValue: number; maxValue: number; minWidth: number; maxWidth: number },
  evidence_color: any,
  mutation_color: { true: BooleanLegend<string>; false: BooleanLegend<string> },
  mutation_width: { true: BooleanLegend<number>; false: BooleanLegend<number> },
  expansion: { true: BooleanLegend<EdgeShape>; false: BooleanLegend<EdgeShape> }

}
