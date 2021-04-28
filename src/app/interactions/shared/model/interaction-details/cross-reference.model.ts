import {CvTerm} from './cv-term.model';

export class CrossReference {
  constructor(
    public readonly database: CvTerm,
    public readonly ac: string,
    public readonly identifier: string,
    public readonly qualifier: CvTerm
  ) {
  }
}
