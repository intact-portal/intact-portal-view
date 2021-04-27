export class Interactome {

  public readonly scientificName: string;
  public readonly nameDetails: string;

  constructor(
    public readonly name: string,
    public readonly symbol: string,
    public readonly psi25: string,
    public readonly psi30: string,
    public readonly taxid: number
  ) {
    const split = this.name.split(/[()]/)
    this.scientificName = split[0];
    this.nameDetails = split[1];
  }
}
