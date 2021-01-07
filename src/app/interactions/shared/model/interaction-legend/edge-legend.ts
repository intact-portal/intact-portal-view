import {BooleanLegend} from "./boolean-legend";
import {EdgeShape} from "../network-shapes/edge-shape";

export class EdgeLegend {
  private _summary_color: any;
  private _summary_width: { minValue: number, maxValue: number, minWidth: number, maxWidth: number };
  private _evidence_color: any;
  private _mutation_color: { true: BooleanLegend<string>, false: BooleanLegend<string> };
  private _mutation_width: { true: BooleanLegend<number>, false: BooleanLegend<number> };
  private _expansion: { true: BooleanLegend<EdgeShape>, false: BooleanLegend<EdgeShape> };

  constructor(summary_color: any, summary_width: { minValue: number; maxValue: number; minWidth: number; maxWidth: number }, evidence_colors: any, mutation_color: { true: BooleanLegend<string>; false: BooleanLegend<string> }, mutation_width: { true: BooleanLegend<number>; false: BooleanLegend<number> }, expansion: { true: BooleanLegend<EdgeShape>; false: BooleanLegend<EdgeShape> }) {
    this._summary_color = summary_color;
    this._summary_width = summary_width;
    this._evidence_color = evidence_colors;
    this._mutation_color = mutation_color;
    this._mutation_width = mutation_width;
    this._expansion = expansion;
  }

  get summary_color(): any {
    return this._summary_color;
  }

  set summary_color(value: any) {
    this._summary_color = value;
  }

  get summary_width(): { minValue: number; maxValue: number; minWidth: number; maxWidth: number } {
    return this._summary_width;
  }

  set summary_width(value: { minValue: number; maxValue: number; minWidth: number; maxWidth: number }) {
    this._summary_width = value;
  }

  get evidence_color(): any {
    return this._evidence_color;
  }

  set evidence_color(value: any) {
    this._evidence_color = value;
  }

  get mutation_color(): { true: BooleanLegend<string>; false: BooleanLegend<string> } {
    return this._mutation_color;
  }

  set mutation_color(value: { true: BooleanLegend<string>; false: BooleanLegend<string> }) {
    this._mutation_color = value;
  }

  get mutation_width(): { true: BooleanLegend<number>; false: BooleanLegend<number> } {
    return this._mutation_width;
  }

  set mutation_width(value: { true: BooleanLegend<number>; false: BooleanLegend<number> }) {
    this._mutation_width = value;
  }

  get expansion(): { true: BooleanLegend<EdgeShape>; false: BooleanLegend<EdgeShape> } {
    return this._expansion;
  }

  set expansion(value: { true: BooleanLegend<EdgeShape>; false: BooleanLegend<EdgeShape> }) {
    this._expansion = value;
  }
}
