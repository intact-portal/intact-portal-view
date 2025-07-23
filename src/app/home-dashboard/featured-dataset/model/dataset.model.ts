import {PubmedDataset} from './pubmed-dataset.model';

export class Dataset {
  constructor(
    public readonly title: string,
    public readonly month: string,
    public readonly year: string,
    public readonly pubmeds: PubmedDataset[],
    public readonly image: string
  ) {
  }
}

