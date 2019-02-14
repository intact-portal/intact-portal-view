import {Xreferences} from './xreferences.model';
import {Publication} from './publication.model';
import {TypeValueModel} from './type-value.model';

export class Experiment {
  private _ac: string;
  private _hostOrganism: string;
  private _detectionMethod: string;

  private _xrefs: Xreferences[];
  private _annotations: TypeValueModel[];

  private _publication: Publication;


}
