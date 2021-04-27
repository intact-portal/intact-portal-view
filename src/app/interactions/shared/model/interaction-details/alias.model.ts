import {CvTerm} from './cv-term.model';

export class Alias {
  constructor(
    public readonly name: string,
    public readonly type: CvTerm
  ) {
  }
}

