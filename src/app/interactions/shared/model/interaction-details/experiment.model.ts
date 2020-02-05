import {Xreferences} from './xreferences.model';
import {Annotation} from './annotation.model';

export class Experiment {
  private _experimentAc: string;
  private _interactionHostOrganism: string;
  private _interactionDetectionMethod: string;
  private _experimentXrefs: Xreferences[];
  private _experimentAnnotations: Annotation[];

  constructor(experimentAc: string, interactionHostOrganism: string, interactionDetectionMethod: string, experimentXrefs: Xreferences[],
              experimentAnnotations: Annotation[]) {
    this._experimentAc = experimentAc;
    this._interactionHostOrganism = interactionHostOrganism;
    this._interactionDetectionMethod = interactionDetectionMethod;
    this._experimentXrefs = experimentXrefs;
    this._experimentAnnotations = experimentAnnotations;
  }

  get experimentAc(): string {
    return this._experimentAc;
  }

  set experimentAc(value: string) {
    this._experimentAc = value;
  }

  get interactionHostOrganism(): string {
    return this._interactionHostOrganism;
  }

  set interactionHostOrganism(value: string) {
    this._interactionHostOrganism = value;
  }

  get interactionDetectionMethod(): string {
    return this._interactionDetectionMethod;
  }

  set interactionDetectionMethod(value: string) {
    this._interactionDetectionMethod = value;
  }

  get experimentXrefs(): Xreferences[] {
    return this._experimentXrefs;
  }

  set experimentXrefs(value: Xreferences[]) {
    this._experimentXrefs = value;
  }

  get experimentAnnotations(): Annotation[] {
    return this._experimentAnnotations;
  }

  set experimentAnnotations(value: Annotation[]) {
    this._experimentAnnotations = value;
  }
}
