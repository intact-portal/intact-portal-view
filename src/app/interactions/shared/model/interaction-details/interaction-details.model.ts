import {Xreferences} from './xreferences.model';
import {ExperimentalConditions} from './experimental-conditions.model';
import {Annotations} from './annotations.model';
import {TypeValueModel} from './type-value.model';

export class InteractionDetails {
  private _interactionAc: string;
  private _interactionType: string;
  private _shortLabel: string;
  private _externalXrefs: Xreferences[];
  private _curationAnnotations: Annotations[];
  private _experimentConditions: ExperimentalConditions[];
  private _parameters: TypeValueModel[];
  private _confidences: TypeValueModel[];

  constructor(interactionAc: string, interactionType: string, shortLabel: string, externalXrefs: Xreferences[],
              curationAnnotations: Annotations[], experimentConditions: ExperimentalConditions[],
              parameters: TypeValueModel[], confidences: TypeValueModel[]) {
    this._interactionAc = interactionAc;
    this._interactionType = interactionType;
    this._shortLabel = shortLabel;
    this._externalXrefs = externalXrefs;
    this._curationAnnotations = curationAnnotations;
    this._experimentConditions = experimentConditions;
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

  get externalXrefs(): Xreferences[] {
    return this._externalXrefs;
  }

  set externalXrefs(value: Xreferences[]) {
    this._externalXrefs = value;
  }

  get curationAnnotations(): Annotations[] {
    return this._curationAnnotations;
  }

  set curationAnnotations(value: Annotations[]) {
    this._curationAnnotations = value;
  }

  get experimentConditions(): ExperimentalConditions[] {
    return this._experimentConditions;
  }

  set experimentConditions(value: ExperimentalConditions[]) {
    this._experimentConditions = value;
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
