export class PubmedDataset {
  constructor(
    public readonly id: string,
    public readonly author: string,
    public readonly year?: string
  ) {
  }
}
