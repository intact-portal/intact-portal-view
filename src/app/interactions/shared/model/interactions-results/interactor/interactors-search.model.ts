import {Interactor} from './interactor.model';
import {Filter} from '../filter.model';

export class InteractorsSearchResult {
  private _content: Interactor[];
  private _numberOfElements: number;
  private _totalElements: number;
  private _filtersType: Filter[];

  constructor(content: Interactor[],
              numberOfElements: number,
              totalElements: number,
              filtersType: Filter[]) {
    this._content = content;
    this._numberOfElements = numberOfElements;
    this._totalElements = totalElements;
    this._filtersType = filtersType;
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
  }

  get facetFields(): Filter[] {
    return this._filtersType;
  }

  set facetFields(value: Filter[]) {
    this._filtersType = value;
  }

  get totalElements(): number {
    return this._totalElements;
  }

  set totalElements(value: number) {
    this._totalElements = value;
  }
}
