import {NodeLegend} from "./node-legend";
import {EdgeLegend} from "./edge-legend";

export class NetworkLegend {
  private _node_legend: NodeLegend;
  private _edge_legend: EdgeLegend;

  constructor(node_legend: NodeLegend, edge_legend: EdgeLegend) {
    this._node_legend = node_legend;
    this._edge_legend = edge_legend;
  }

  get node_legend(): NodeLegend {
    return this._node_legend;
  }

  set node_legend(value: NodeLegend) {
    this._node_legend = value;
  }

  get edge_legend(): EdgeLegend {
    return this._edge_legend;
  }

  set edge_legend(value: EdgeLegend) {
    this._edge_legend = value;
  }
}
