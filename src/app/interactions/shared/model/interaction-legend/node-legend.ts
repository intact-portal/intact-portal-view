import {BooleanLegend} from "./boolean-legend";
import {NodeShape} from "../network-shapes/node-shape";

export class NodeLegend {
  private _shape: {[p: string]: NodeShape};
  private _species_color: any;
  private _kingdom_color: any;
  private _border_color: {true: BooleanLegend<string>, false: BooleanLegend<string>};
  private _border_width: {true: BooleanLegend<number>, false: BooleanLegend<number>};

  constructor(shape: { [p: string]: NodeShape }, species_color: any, kingdom_color: any, border_color: { true: BooleanLegend<string>; false: BooleanLegend<string> }, border_width: { true: BooleanLegend<number>; false: BooleanLegend<number> }) {
    this._shape = shape;
    this._species_color = species_color;
    this._kingdom_color = kingdom_color;
    this._border_color = border_color;
    this._border_width = border_width;
  }


  get shape(): { [p: string]: NodeShape } {
    return this._shape;
  }

  set shape(value: { [p: string]: NodeShape }) {
    this._shape = value;
  }

  get species_color(): any {
    return this._species_color;
  }

  set species_color(value: any) {
    this._species_color = value;
  }

  get kingdom_color(): any {
    return this._kingdom_color;
  }

  set kingdom_color(value: any) {
    this._kingdom_color = value;
  }

  get border_color(): { true: BooleanLegend<string>; false: BooleanLegend<string> } {
    return this._border_color;
  }

  set border_color(value: { true: BooleanLegend<string>; false: BooleanLegend<string> }) {
    this._border_color = value;
  }

  get border_width(): { true: BooleanLegend<number>; false: BooleanLegend<number> } {
    return this._border_width;
  }

  set border_width(value: { true: BooleanLegend<number>; false: BooleanLegend<number> }) {
    this._border_width = value;
  }
}
