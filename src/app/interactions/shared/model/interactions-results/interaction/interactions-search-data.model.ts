import {Interaction} from './interaction.model';
import {InteractionFacets} from './interaction-facets.model';
import {Filter} from '../filter.model';
import {Pagination} from '../../../../../home-dashboard/shared/pagination.model';

export interface InteractionsSearchResultData extends Pagination<Interaction[]> {
  facetResultPage: InteractionFacets,
  facetFields: Filter[]
}
