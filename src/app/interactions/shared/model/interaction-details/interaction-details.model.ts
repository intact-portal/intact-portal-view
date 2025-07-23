import {CrossReference} from './cross-reference.model';
import {TypeValueModel} from './type-value.model';
import {Publication} from './publication.model';
import {Annotation} from './annotation.model';
import {CvTerm} from './cv-term.model';
import {Parameter} from './parameter.model';
import {Organism} from './organism.model';

export interface InteractionDetails {
  interactionAc: string,
  shortLabel: string,
  hostOrganism: Organism,
  type: CvTerm,
  detectionMethod: CvTerm,
  confidences: TypeValueModel<CvTerm>[],
  parameters: Parameter[],
  annotations: Annotation[],
  xrefs: CrossReference[],
  publication: Publication,
  negative: boolean
}
