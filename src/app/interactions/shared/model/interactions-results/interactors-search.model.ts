import {Interactor} from './interactor.model';

export class InteractorsSearchResult {
  private _content: Interactor[];
  private _numberOfElements: number;

  constructor(interactors: Interactor[],
              totalResults: number) {
    this._content = interactors;
    this._numberOfElements = totalResults;
  }

  /** GETTERS AND SETTERS **/

  get content(): Interactor[] {
    return this._content;
  }

  set content(value: Interactor[]) {
    this._content = value;
  }


  get numberOfElements(): number {
    return this._numberOfElements;
  }

  set numberOfElements(value: number) {
    this._numberOfElements = value;
    console.log(this._numberOfElements);

  }
}
