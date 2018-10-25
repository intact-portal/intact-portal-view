import {Interaction} from './interaction.model';
import {InteractionFacets} from './interaction-facets.model';
import {Filter} from '../filter.model';

export class InteractionsSearchResult {
  private _content: Interaction[];
  private _numberOfElements: number;
  private _totalElements: number;
  private _facetResultPage: InteractionFacets;
  private _facetFields: Filter[];


  constructor(content: Interaction[],
              numberOfElements: number,
              totalElements: number,
              facetResultPage: InteractionFacets,
              filtersType: Filter[]) {
    this._content = content;
    this._numberOfElements = numberOfElements;
    this._totalElements = totalElements;
    this._facetResultPage = facetResultPage;
    this._facetFields = filtersType;
  }

  /** GETTERS AND SETTERS **/

  get content(): Interaction[] {
    return this._content;
  }

  set content(value: Interaction[]) {
    this._content = value;
  }

  get numberOfElements(): number {
    return this._numberOfElements;
  }

  set numberOfElements(value: number) {
    this._numberOfElements = value;
  }

  get totalElements(): number {
    return this._totalElements;
  }

  set totalElements(value: number) {
    this._totalElements = value;
  }

  get facetResultPage(): InteractionFacets {
    return this._facetResultPage;
  }

  set facetResultPage(value: InteractionFacets) {
    this._facetResultPage = value;
  }

  get facetFields(): Filter[] {
    return this._facetFields;
  }

  set facetFields(value: Filter[]) {
    this._facetFields = value;
  }
}
