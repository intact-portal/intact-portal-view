import {InteractionsSearchResultData} from './interactions-search-data.model';

export class InteractionSearchResult {
  constructor(
    public readonly recordsFiltered: number,
    public readonly recordsTotal: number,
    public readonly data: InteractionsSearchResultData
  ) {
  }
}
