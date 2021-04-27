export class Pagination<T = any> {

  public readonly content: T;
  public readonly empty: boolean;
  public readonly first: boolean;
  public readonly last: boolean;
  public readonly number: number;
  public readonly numberOfElements: number;
  public readonly totalElements: number;
  public readonly totalPages: number;
  public readonly size: number;
  public readonly sort: {
    empty: boolean,
    sorted: boolean,
    unsorted: boolean
  };
  public readonly pageable: {
    offset: number,
    pageNumber: number,
    pageSize: number,
    paged: boolean,
    unpaged: boolean,
    sort: {
      empty: boolean,
      sorted: boolean,
      unsorted: boolean
    }
  };
}
