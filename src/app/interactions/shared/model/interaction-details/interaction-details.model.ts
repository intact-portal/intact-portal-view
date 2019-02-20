import {Xreferences} from './xreferences.model';
import {TypeValueModel} from './type-value.model';
import {Experiment} from './experiment.model';
import {Publication} from './publication.model';
import {Annotation} from './annotation.model';

export class InteractionDetails {
  private _interactionAc: string;
  private _interactionType: string;
  private _shortLabel: string;
  private _xrefs: Xreferences[];
  private _annotations: Annotation[];
  // private _experimentConditions: ExperimentalConditions[];
  private _parameters: TypeValueModel[];
  private _confidences: TypeValueModel[];

  private _experiment: Experiment;
  private _publication: Publication;

  constructor(interactionAc: string, interactionType: string, shortLabel: string, xrefs: Xreferences[], annotations: Annotation[],
              parameters: TypeValueModel[], confidences: TypeValueModel[], experiment: Experiment, publication: Publication) {
    this._interactionAc = interactionAc;
    this._interactionType = interactionType;
    this._shortLabel = shortLabel;
    this._xrefs = xrefs;
    this._annotations = annotations;
    this._parameters = parameters;
    this._confidences = confidences;
    this._experiment = experiment;
    this._publication = publication;
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

  get annotations(): Annotation[] {
    return this._annotations;
  }

  set annotations(value: Annotation[]) {
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

  get experiment(): Experiment {
    return this._experiment;
  }

  set experiment(value: Experiment) {
    this._experiment = value;
  }

  get publication(): Publication {
    return this._publication;
  }

  set publication(value: Publication) {
    this._publication = value;
  }
}
