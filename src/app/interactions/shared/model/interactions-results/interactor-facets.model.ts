import { Facet } from './facet.model';

export class InteractorFacets {
  private _content: Facet[];
  private _fieldName: string;

  constructor(content: Facet[], fieldName: string) {
    this._content = content;
    this._fieldName = fieldName;
  }

  get content(): Facet[] {
    return this._content;
  }

  set content(value: Facet[]) {
    this._content = value;
  }

  get fieldName(): string {
    return this._fieldName;
  }

  set fieldName(value: string) {
    this._fieldName = value;
  }
}
