export class InteractorFilters {
  private _filterName: string;
  private _filterFacets: string[];

  constructor(filterName: string, filterFacets: string[]) {
    this._filterName = filterName;
    this._filterFacets = filterFacets;
  }

  get filterName(): string {
    return this._filterName;
  }

  set filterName(value: string) {
    this._filterName = value;
  }

  get filterFacets(): string[] {
    return this._filterFacets;
  }

  set filterFacets(value: string[]) {
    this._filterFacets = value;
  }
}

