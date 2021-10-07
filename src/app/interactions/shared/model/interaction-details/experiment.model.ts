import {CrossReference} from './cross-reference.model';
import {Annotation} from './annotation.model';

export interface Experiment {
  experimentAc: string,
  interactionHostOrganism: string,
  interactionDetectionMethod: string,
  experimentXrefs: CrossReference[],
  experimentAnnotations: Annotation[]
}
