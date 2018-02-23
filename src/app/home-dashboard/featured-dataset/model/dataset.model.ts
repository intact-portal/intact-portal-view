import { PubmedDataset } from './pubmed-dataset.model';
import { DatasetDescription } from './dataset-description.model';

export class Dataset {
  private _$: DatasetDescription;
  private _pubmed: PubmedDataset[];


  constructor(description: DatasetDescription, pubmed: PubmedDataset[]) {
    this._$ = description;
    this._pubmed = pubmed;
  }

  get $(): DatasetDescription {
    return this._$;
  }

  set $(value: DatasetDescription) {
    this._$ = value;
  }

  get pubmed(): PubmedDataset[] {
    return this._pubmed;
  }

  set pubmed(value: PubmedDataset[]) {
    this._pubmed = value;
  }

}

