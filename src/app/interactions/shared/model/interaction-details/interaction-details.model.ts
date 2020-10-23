import {CrossReference} from './cross-reference.model';
import {TypeValueModel} from './type-value.model';
import {Publication} from './publication.model';
import {Annotation} from './annotation.model';
import {CvTerm} from "./cv-term.model";
import {Parameter} from "./parameter.model";
import {Organism} from "./organism.model";

export class InteractionDetails {
  private _interactionAc: string;
  private _shortLabel: string;
  private _hostOrganism: Organism;
  private _type: CvTerm;
  private _detectionMethod: CvTerm;
  private _confidences: TypeValueModel<CvTerm>[];
  private _parameters: Parameter[];
  private _annotations: Annotation[];
  private _xrefs: CrossReference[];

  private _publication: Publication;

  constructor(interactionAc: string, shortLabel: string, hostOrganism: Organism, type: CvTerm, detectionMethod: CvTerm, xrefs: CrossReference[], annotations: Annotation[],
              parameters: Parameter[], confidences: TypeValueModel<CvTerm>[], publication: Publication) {
    this._interactionAc = interactionAc;
    this._shortLabel = shortLabel;
    this._hostOrganism = hostOrganism;
    this._type = type;
    this._detectionMethod = detectionMethod;
    this._xrefs = xrefs;
    this._annotations = annotations;
    this._parameters = parameters;
    this._confidences = confidences;
    this._publication = publication;
  }

  get interactionAc(): string {
    return this._interactionAc;
  }

  set interactionAc(value: string) {
    this._interactionAc = value;
  }

  get shortLabel(): string {
    return this._shortLabel;
  }

  set shortLabel(value: string) {
    this._shortLabel = value;
  }

  get hostOrganism(): Organism {
    return this._hostOrganism;
  }

  set hostOrganism(value: Organism) {
    this._hostOrganism = value;
  }

  get type(): CvTerm {
    return this._type;
  }

  set type(value: CvTerm) {
    this._type = value;
  }

  get detectionMethod(): CvTerm {
    return this._detectionMethod;
  }

  set detectionMethod(value: CvTerm) {
    this._detectionMethod = value;
  }

  get xrefs(): CrossReference[] {
    return this._xrefs;
  }

  set xrefs(value: CrossReference[]) {
    this._xrefs = value;
  }

  get annotations(): Annotation[] {
    return this._annotations;
  }

  set annotations(value: Annotation[]) {
    this._annotations = value;
  }

  get parameters(): Parameter[] {
    return this._parameters;
  }

  set parameters(value: Parameter[]) {
    this._parameters = value;
  }

  get confidences(): TypeValueModel<CvTerm>[] {
    return this._confidences;
  }

  set confidences(value: TypeValueModel<CvTerm>[]) {
    this._confidences = value;
  }

  get publication(): Publication {
    return this._publication;
  }

  set publication(value: Publication) {
    this._publication = value;
  }
}
