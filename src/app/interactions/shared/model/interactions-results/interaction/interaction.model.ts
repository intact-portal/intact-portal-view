export class Interaction {

  private _interactionCount: number;
  private _interactionType: string;
  private _authors: string[];
  private _publicationIdentifiers: string[];
  private _interactionIdentifiers: string[];


  constructor(interactionCount: number, interactionType: string, authors: string[], publicationIdentifiers: string[],
              interactionIdentifiers: string[]) {
    this._interactionCount = interactionCount;
    this._interactionType = interactionType;
    this._authors = authors;
    this._publicationIdentifiers = publicationIdentifiers;
    this._interactionIdentifiers = interactionIdentifiers;
  }


  get interactionCount(): number {
    return this._interactionCount;
  }

  set interactionCount(value: number) {
    this._interactionCount = value;
  }

  get interactionType(): string {
    return this._interactionType;
  }

  set interactionType(value: string) {
    this._interactionType = value;
  }

  get authors(): string[] {
    return this._authors;
  }

  set authors(value: string[]) {
    this._authors = value;
  }

  get publicationIdentifiers(): string[] {
    return this._publicationIdentifiers;
  }

  set publicationIdentifiers(value: string[]) {
    this._publicationIdentifiers = value;
  }

  get interactionIdentifiers(): string[] {
    return this._interactionIdentifiers;
  }

  set interactionIdentifiers(value: string[]) {
    this._interactionIdentifiers = value;
  }
}
