import {CrossReference} from './cross-reference.model';
import {TypeValueModel} from './type-value.model';
import {Publication} from './publication.model';
import {Annotation} from './annotation.model';
import {CvTerm} from './cv-term.model';
import {Parameter} from './parameter.model';
import {Organism} from './organism.model';

export class InteractionDetails {
  constructor(
    public readonly interactionAc: string,
    public readonly shortLabel: string,
    public readonly hostOrganism: Organism,
    public readonly type: CvTerm,
    public readonly detectionMethod: CvTerm,
    public readonly confidences: TypeValueModel<CvTerm>[],
    public readonly parameters: Parameter[],
    public readonly annotations: Annotation[],
    public readonly xrefs: CrossReference[],
    public readonly publication: Publication
  ) {
  }
}
