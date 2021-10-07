import {BooleanLegend} from './boolean-legend';
import {NodeShape} from '../network-shapes/node-shape';

export interface NodeLegend {
  shape: { [p: string]: NodeShape },
  species_color: any,
  kingdom_color: any,
  border_color: { true: BooleanLegend<string>; false: BooleanLegend<string> },
  border_width: { true: BooleanLegend<number>; false: BooleanLegend<number> }
}
