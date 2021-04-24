import {Interaction} from './interaction.model';
import {InteractionFacets} from './interaction-facets.model';
import {Filter} from '../filter.model';
import {Pagination} from "../../../../../home-dashboard/shared/pagination.model";

export class InteractionsSearchResultData extends Pagination<Interaction[]> {
  private _facetResultPage: InteractionFacets;
  private _facetFields: Filter[];
  private _totalElements: number;

  constructor(facetResultPage: InteractionFacets, facetFields: Filter[], totalElements: number) {
    super();
    this._facetResultPage = facetResultPage;
    this._facetFields = facetFields;
    this._totalElements = totalElements;
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

  get totalElements(): number {
    return this._totalElements;
  }

  set totalElements(value: number) {
    this._totalElements = value;
  }
}
