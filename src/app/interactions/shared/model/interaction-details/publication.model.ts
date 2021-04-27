import {CrossReference} from './cross-reference.model';
import {Annotation} from './annotation.model';

export class Publication {
  constructor(
    public readonly pubmedId: string,
    public readonly title: string,
    public readonly journal: string,
    public readonly publicationDate: String,
    public readonly authors: string[],
    public readonly publicationXrefs: CrossReference[],
    public readonly publicationAnnotations: Annotation[]
  ) {
    if (this.publicationDate) {
      this.publicationDate = this.publicationDate
        .split('-')
        .reverse()
        .join('/');
    }
  }
}
