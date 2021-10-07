import {InteractionsSearchResultData} from './interactions-search-data.model';

export interface InteractionSearchResult {
  recordsFiltered: number,
  recordsTotal: number,
  data: InteractionsSearchResultData
}
