export interface Pagination<T = any> {
  content: T;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  totalElements: number;
  totalPages: number;
  size: number;
  sort: {
    empty: boolean,
    sorted: boolean,
    unsorted: boolean
  };
  pageable: {
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
