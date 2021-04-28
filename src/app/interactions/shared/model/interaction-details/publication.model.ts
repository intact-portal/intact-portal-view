import {CrossReference} from './cross-reference.model';
import {Annotation} from './annotation.model';

export class Publication {

  constructor(
    public readonly pubmedId: string,
    public readonly title: string,
    public readonly journal: string,
    public publicationDate: string,
    public readonly authors: string[],
    public readonly publicationXrefs: CrossReference[],
    public readonly publicationAnnotations: Annotation[]
  ) {
  }
}
