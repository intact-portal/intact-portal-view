import {Xreferences} from './xreferences.model';
import {TypeValueModel} from './type-value.model';

export class Publication {
  private _pubmedIdStr: string;
  private _title: string;
  private _journal: string;
  private _publicationDate: Date;
  private _authors: string[];
  private _xrefs: Xreferences[];
  private _annotations: TypeValueModel[];


}
