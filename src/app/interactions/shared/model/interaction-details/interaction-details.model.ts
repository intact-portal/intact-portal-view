import {Xreferences} from './xreferences.model';
import {TypeValueModel} from './type-value.model';

export class InteractionDetails {
  private _interactionAc: string;
  private _interactionType: string;
  private _shortLabel: string;
  private _xrefs: Xreferences[];
  private _annotations: TypeValueModel[];
  // private _experimentConditions: ExperimentalConditions[];
  private _parameters: TypeValueModel[];
  private _confidences: TypeValueModel[];

  constructor(interactionAc: string, interactionType: string, shortLabel: string, xrefs: Xreferences[],
              annotations: TypeValueModel[], parameters: TypeValueModel[], confidences: TypeValueModel[]) {
    this._interactionAc = interactionAc;
    this._interactionType = interactionType;
    this._shortLabel = shortLabel;
    this._xrefs = xrefs;
    this._annotations = annotations;
    this._parameters = parameters;
    this._confidences = confidences;
  }

  get interactionAc(): string {
    return this._interactionAc;
  }

  set interactionAc(value: string) {
    this._interactionAc = value;
  }

  get interactionType(): string {
    return this._interactionType;
  }

  set interactionType(value: string) {
    this._interactionType = value;
  }

  get shortLabel(): string {
    return this._shortLabel;
  }

  set shortLabel(value: string) {
    this._shortLabel = value;
  }

  get xrefs(): Xreferences[] {
    return this._xrefs;
  }

  set xrefs(value: Xreferences[]) {
    this._xrefs = value;
  }

  get annotations(): TypeValueModel[] {
    return this._annotations;
  }

  set annotations(value: TypeValueModel[]) {
    this._annotations = value;
  }

  get parameters(): TypeValueModel[] {
    return this._parameters;
  }

  set parameters(value: TypeValueModel[]) {
    this._parameters = value;
  }

  get confidences(): TypeValueModel[] {
    return this._confidences;
  }

  set confidences(value: TypeValueModel[]) {
    this._confidences = value;
  }
}
