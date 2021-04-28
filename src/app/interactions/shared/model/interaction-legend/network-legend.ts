import {NodeLegend} from './node-legend';
import {EdgeLegend} from './edge-legend';

export class NetworkLegend {
  constructor(
    public readonly node_legend: NodeLegend,
    public readonly edge_legend: EdgeLegend
  ) {
  }
}
