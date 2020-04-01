export class Interactor {
  private _interactorName: string;
  private _interactorAc: string;
  private _interactorPreferredIdentifier: string;
  private _interactorDescription: string;
  private _interactorType: string;
  private _interactorSpecies: string;
  private _interactionCount: number;

  constructor(interactorName: string,
              interactorDescription: string,
              interactorAc: string,
              interactorAlias: string,
              interactorType: string,
              interactorSpecies: string,
              interactionCount: number) {
    this._interactorName = interactorName;
    this._interactorDescription = interactorDescription;
    this._interactorPreferredIdentifier = interactorAlias;
    this._interactorAc = interactorAc;
    this._interactorType = interactorType;
    this._interactorSpecies = interactorSpecies;
    this._interactionCount = interactionCount;
  }


  get interactorName(): string {
    return this._interactorName;
  }

  get interactorAc(): string {
    return this._interactorAc;
  }

  get interactorDescription(): string {
    return this._interactorDescription;
  }

  get interactorPreferredIdentifier(): string {
    return this._interactorPreferredIdentifier;
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
