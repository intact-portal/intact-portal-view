import {CrossReference} from './cross-reference.model';
import {Annotation} from './annotation.model';

export class Experiment {
  constructor(
    public readonly experimentAc: string,
    public readonly interactionHostOrganism: string,
    public readonly interactionDetectionMethod: string,
    public readonly experimentXrefs: CrossReference[],
    public readonly experimentAnnotations: Annotation[]
  ) {
  }
}
