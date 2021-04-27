import {CvTerm} from './cv-term.model';

export class Annotation {
  constructor(
    public readonly topic: CvTerm,
    public readonly description: string
  ) {
  }
}
