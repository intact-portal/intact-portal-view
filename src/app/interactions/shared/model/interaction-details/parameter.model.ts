import {CvTerm} from './cv-term.model';

export interface Parameter {
  type: CvTerm,
  unit: CvTerm,
  value: string
}
