import {PubmedDataset} from './pubmed-dataset.model';
import {DatasetDescription} from './dataset-description.model';

export class Dataset {
  constructor(
    public readonly $: DatasetDescription,
    public readonly pubmed: PubmedDataset[]
  ) {
  }
}

