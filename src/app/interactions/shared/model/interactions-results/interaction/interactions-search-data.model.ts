import {Interaction} from './interaction.model';
import {InteractionFacets} from './interaction-facets.model';
import {Filter} from '../filter.model';
import {Pagination} from '../../../../../home-dashboard/shared/pagination.model';

export class InteractionsSearchResultData extends Pagination<Interaction[]> {
  public readonly facetResultPage: InteractionFacets;
  public readonly facetFields: Filter[];
}
