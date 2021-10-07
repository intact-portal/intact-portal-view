import {CrossReference} from './cross-reference.model';
import {Annotation} from './annotation.model';

export interface Publication {
  pubmedId: string,
  title: string,
  journal: string,
  publicationDate: string,
  authors: string[],
  publicationXrefs: CrossReference[],
  publicationAnnotations: Annotation[]
}
