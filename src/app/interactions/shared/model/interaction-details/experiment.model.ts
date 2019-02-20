import {Xreferences} from './xreferences.model';
import {Annotation} from './annotation.model';

export class Experiment {
  private _experimentAc: string;
  private _hostOrganism: string;
  private _interactionDetMethod: string;
  private _experimentXrefs: Xreferences[];
  private _experimentAnnotations: Annotation[];

  constructor(experimentAc: string, hostOrganism: string, interactionDetMethod: string, experimentXrefs: Xreferences[],
              experimentAnnotations: Annotation[]) {
    this._experimentAc = experimentAc;
    this._hostOrganism = hostOrganism;
    this._interactionDetMethod = interactionDetMethod;
    this._experimentXrefs = experimentXrefs;
    this._experimentAnnotations = experimentAnnotations;
  }

  get experimentAc(): string {
    return this._experimentAc;
  }

  set experimentAc(value: string) {
    this._experimentAc = value;
  }

  get hostOrganism(): string {
    return this._hostOrganism;
  }

  set hostOrganism(value: string) {
    this._hostOrganism = value;
  }

  get interactionDetMethod(): string {
    return this._interactionDetMethod;
  }

  set interactionDetMethod(value: string) {
    this._interactionDetMethod = value;
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
