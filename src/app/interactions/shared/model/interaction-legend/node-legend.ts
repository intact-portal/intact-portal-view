import {BooleanLegend} from './boolean-legend';
import {NodeShape} from '../network-shapes/node-shape';
import {Mapper} from './Mapper';

export interface NodeLegend {
  shape: Mapper<NodeShape>,
  species_color: Mapper<string>,
  kingdom_color: Mapper<string>,
  border_color: BooleanLegend<string>,
  border_width: BooleanLegend<number>
}
