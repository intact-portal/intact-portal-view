import {Interaction} from './interaction.model';
import {InteractionFacets} from './interaction-facets.model';
import {Filter} from '../filter.model';
import {Pagination} from "../../../../../home-dashboard/shared/pagination.model";

export class InteractionsSearchResult extends Pagination<Interaction[]> {
  private _facetResultPage: InteractionFacets;
  private _facetFields: Filter[];


  constructor(facetResultPage: InteractionFacets,
              filtersType: Filter[]) {
    super();
    this._facetResultPage = facetResultPage;
    this._facetFields = filtersType;
  }

  /** GETTERS AND SETTERS **/

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
