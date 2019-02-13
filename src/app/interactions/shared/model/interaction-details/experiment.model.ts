import {Xreferences} from './xreferences.model';
import {Annotations} from './annotations.model';
import {Publication} from './publication.model';

export class Experiment {
  private _ac: string;
  private _hostOrganism: string;
  private _detectionMethod: string;

  private _xrefs: Xreferences[];
  private _annotations: Annotations[];

  private _publication: Publication;

  constructor(interactionAc: string, name: string, hostOrganism: string, detectionMethod: string,
              externalXrefs: Xreferences[], curationAnnotations: Annotations[]) {
    this._ac = interactionAc;
    this._hostOrganism = hostOrganism;
    this._detectionMethod = detectionMethod;
    this._xrefs = externalXrefs;
    this._annotations = curationAnnotations;
  }

  get ac(): string {
    return this._ac;
  }

  set ac(value: string) {
    this._ac = value;
  }

  get hostOrganism(): string {
    return this._hostOrganism;
  }

  set hostOrganism(value: string) {
    this._hostOrganism = value;
  }

  get detectionMethod(): string {
    return this._detectionMethod;
  }

  set detectionMethod(value: string) {
    this._detectionMethod = value;
  }

  get xrefs(): Xreferences[] {
    return this._xrefs;
  }

  set xrefs(value: Xreferences[]) {
    this._xrefs = value;
  }

  get annotations(): Annotations[] {
    return this._annotations;
  }

  set annotations(value: Annotations[]) {
    this._annotations = value;
  }
}
