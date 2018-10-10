import {Interaction} from './interaction.model';
import {InteractionFacets} from './interaction-facets.model';
import {Filter} from '../filter.model';

export class InteractionsSearchResult {
  private _content: Interaction[];
  private _numberOfElements: number;
  private _facetResultPage: InteractionFacets;
  private _filtersType: Filter[];


  constructor(content: Interaction[], numberOfElements: number, facetResultPage: InteractionFacets, filtersType: Filter[]) {
    this._content = content;
    this._numberOfElements = numberOfElements;
    this._facetResultPage = facetResultPage;
    this._filtersType = filtersType;
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

  get facetResultPage(): InteractionFacets {
    return this._facetResultPage;
  }

  set facetResultPage(value: InteractionFacets) {
    this._facetResultPage = value;
  }

  get filtersType(): Filter[] {
    return this._filtersType;
  }

  set filtersType(value: Filter[]) {
    this._filtersType = value;
  }
}
