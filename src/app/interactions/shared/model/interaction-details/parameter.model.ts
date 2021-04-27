import {CvTerm} from './cv-term.model';

export class Parameter {
  constructor(
    public readonly type: CvTerm,
    public readonly unit: CvTerm,
    public readonly value: string
  ) {
  }
}
