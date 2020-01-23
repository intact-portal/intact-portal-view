export class Interactor {
  private _interactorName: string;
  private _interactorAc: string;
  private _description: string;
  private _interactorType: string;
  private _interactorSpecies: string;
  private _interactionCount: number;

  constructor(interactorName: string,
              description: string,
              interactorId: string,
              interactorType: string,
              species: string,
              interactionCount: number) {
    this._interactorName = interactorName;
    this._description = description;
    this._interactorAc = interactorId;
    this._interactorType = interactorType;
    this._interactorSpecies = species;
    this._interactionCount = interactionCount;
  }


  get interactorName(): string {
    return this._interactorName;
  }

  get interactorAc(): string {
    return this._interactorAc;
  }

  get interactorDescription(): string {
    return this._description;
  }

  get interactorType(): string {
    return this._interactorType;
  }

  get interactorSpecies(): string {
    return this._interactorSpecies;
  }

  get interactionCount(): number {
    return this._interactionCount;
  }
}
