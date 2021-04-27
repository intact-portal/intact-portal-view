import {BooleanLegend} from './boolean-legend';
import {NodeShape} from '../network-shapes/node-shape';

export class NodeLegend {
  constructor(
    public readonly shape: { [p: string]: NodeShape },
    public readonly species_color: any,
    public readonly kingdom_color: any,
    public readonly border_color: { true: BooleanLegend<string>; false: BooleanLegend<string> },
    public readonly border_width: { true: BooleanLegend<number>; false: BooleanLegend<number> }
  ) {
  }
}
