import {CvTerm} from './cv-term.model';

export interface CrossReference {
   database: CvTerm,
   ac: string,
   identifier: string,
   qualifier: CvTerm
}
