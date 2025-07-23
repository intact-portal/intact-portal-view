export class Interactome {

  public readonly scientificName: string;
  public readonly nameDetails: string;

  constructor(
    public readonly name: string,
    public readonly symbol: string,
    public readonly filename: string,
    public readonly taxid: number
  ) {
    const split = this.name.split(/[()]/)
    this.scientificName = split[0];
    this.nameDetails = split[1];
  }
}
