import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Facet} from '../model/interactions-results/facet.model';
import {Observable} from 'rxjs/Observable';
import {ParamMap} from '@angular/router';
import {InteractionFacets} from '../model/interactions-results/interaction/interaction-facets.model';


@Injectable()
export class FilterService {
  private _facets : InteractionFacets;
  private intraSpeciesCounts: Map<string, number>;
  private _negative: boolean = false;
  private _mutation: boolean = false;
  private _intraSpecies: boolean = false;

  private interactorSpecies: string[] = [];
  private interactorTypes: string[] = [];
  private interactionTypes: string[] = [];
  private interactionDetectionMethods: string[] = [];
  private interactionHostOrganisms: string[] = [];

  private minMIScore: number = 0;
  private _currentMinMIScore: number = 0;
  private maxMIScore: number = 1;
  private _currentMaxMIScore: number = 1;

  private _hasMutation = false;
  private _nbMutation: number = 0;

  private updatesSubject: Subject<Filter | void> = new Subject<Filter | void>();

  public updates: Observable<Filter | void> = this.updatesSubject.asObservable();

  constructor() {
  }

  public initFacets(facets: InteractionFacets) {
    this._facets = facets;
    this.initSpeciesFilter()
    this.initMIScoreFilter(facets.intact_miscore)
    this.initMutationFilter(facets.disrupted_by_mutation)
  }

  private initSpeciesFilter() {
    this.intraSpeciesCounts = new Map(this.facets.combined_species.map(facet => [facet.value, facet.valueCount.intra] as [string, number]));
  }

  private initMIScoreFilter(scoreFacets: Facet[]) {
    const scores = scoreFacets.map(facet => parseFloat(facet.value));
    this.minMIScore = scores.length !== 0 ? Math.min(...scores) : 0;
    this.maxMIScore = scores.length !== 0 ? Math.max(...scores) : 1;
    if (this._currentMinMIScore === 0) {
      this._currentMinMIScore = this.minMIScore;
    }
    if (this._currentMaxMIScore === 1) {
      this._currentMaxMIScore = this.maxMIScore;
    }
  }

  private initMutationFilter(mutationFacets: Facet[]) {
    for (const mutationFacet of mutationFacets) {
      if (mutationFacet.value == 'true' && mutationFacet.valueCount > 0) {
        this._nbMutation = mutationFacet.valueCount;
        return this._hasMutation = true;
      }
    }
    this._nbMutation = 0;
    return this._hasMutation = false;
  }

  public updateFilter(filter: Filter, value: any, update: boolean = true): void {
    switch (filter) {
      case Filter.NEGATIVE:
        this._negative = value;
        break;
      case Filter.MUTATION:
        this._mutation = value;
        break;
      case Filter.INTRA_SPECIES:
        this._intraSpecies = value;
        break;
      case Filter.MI_SCORE:
        this._currentMinMIScore = value.min;
        this._currentMaxMIScore = value.max;
        break;
      default:
        FilterService.updateDiscreteFilter(this.getFilter(filter), value);
        break
    }
    if (update) this.updatesSubject.next(filter);
  }

  private static updateDiscreteFilter(container: string[], updatedValue: string) {
    if (!container.includes(updatedValue)) {
      container.push(updatedValue);
    } else {
      container.splice(container.indexOf(updatedValue), 1);
    }
  }

  public fromParams(params: ParamMap) {
    this.interactorSpecies = params.has('interactorSpeciesFilter') ? params.get('interactorSpeciesFilter').split(',') : [];

    this.interactorTypes = params.has('interactorTypesFilter') ? params.get('interactorTypesFilter').split(',') : [];

    this.interactionTypes = params.has('interactionTypesFilter') ? params.get('interactionTypesFilter').split(',') : [];

    this.interactionDetectionMethods = params.has('interactionDetectionMethodsFilter') ? params.get('interactionDetectionMethodsFilter').split(',') : [];

    this.interactionHostOrganisms = params.has('interactionHostOrganismsFilter') ? params.get('interactionHostOrganismsFilter').split(',') : [];

    this._currentMinMIScore = params.has('minMIScore') ? parseFloat(params.get('minMIScore')) : 0;

    this._currentMaxMIScore = params.has('maxMIScore') ? parseFloat(params.get('maxMIScore')) : 1;

    this._negative = params.get('negativeFilter') === 'true';

    this._mutation = params.get('mutationFilter') === 'true';

    this._intraSpecies = params.get('intraSpeciesFilter') === 'true';
  }

  public toParams(params: any = {}, arrayTransformer: (array: string[]) => any = (a) => a.join(',')): any {
    if (this.interactorSpecies !== undefined && this.interactorSpecies.length !== 0)
      params.interactorSpeciesFilter = arrayTransformer(this.interactorSpecies);

    if (this.interactorTypes !== undefined && this.interactorTypes.length !== 0)
      params.interactorTypesFilter = arrayTransformer(this.interactorTypes);

    if (this.interactionTypes !== undefined && this.interactionTypes.length !== 0)
      params.interactionTypesFilter = arrayTransformer(this.interactionTypes);

    if (this.interactionDetectionMethods !== undefined && this.interactionDetectionMethods.length !== 0)
      params.interactionDetectionMethodsFilter = arrayTransformer(this.interactionDetectionMethods);

    if (this.interactionHostOrganisms !== undefined && this.interactionHostOrganisms.length !== 0)
      params.interactionHostOrganismsFilter = arrayTransformer(this.interactionHostOrganisms);

    if (this._negative !== undefined && this._negative !== false)
      params.negativeFilter = this._negative;

    if (this._currentMinMIScore !== undefined && this._currentMinMIScore !== 0)
      params.minMIScore = this._currentMinMIScore;

    if (this._currentMaxMIScore !== undefined && this._currentMaxMIScore !== 1)
      params.maxMIScore = this._currentMaxMIScore;

    if (this.intraSpecies === true)
      params.intraSpeciesFilter = this.intraSpecies;

    if (this.mutation === true)
      params.mutationFilter = this.mutation;

    return params;
  }

  setUniqueSpecies(species: string) {
    this.interactorSpecies = [species];
    this.updatesSubject.next(Filter.SPECIES);
  }

  canFilterIntraSpecies() {
    for (const interactorSpecies of this.interactorSpecies) {
      if (!this.intraSpeciesCounts.get(interactorSpecies)) return false;
    }
    return true;
  }

  isFilteringScore() {
    return this._currentMinMIScore > this.minMIScore || this._currentMaxMIScore < this.maxMIScore;
  }

  anyFiltersSelected() {
    return this.interactorSpecies.length !== 0 ||
      this.interactorTypes.length !== 0 ||
      this.interactionTypes.length !== 0 ||
      this.interactionDetectionMethods.length !== 0 ||
      this.interactionHostOrganisms.length !== 0 ||
      this.mutation ||
      this.negative ||
      this.isFilteringScore();
  }

  isFiltering(filter: Filter): boolean {
    switch (filter) {
      case Filter.MI_SCORE:
        return this.isFilteringScore();
      case Filter.NEGATIVE:
        return this._negative;
      case Filter.MUTATION:
        return this._mutation;
      case Filter.INTRA_SPECIES:
        return this.intraSpecies;
      default:
        return this.getFilter(filter).length !== 0;
    }
  }

  isFilteringValue(filter: Filter, value: any) {
    switch (filter) {
      case Filter.MI_SCORE:
        return value <= this.currentMinMIScore || value >= this.currentMaxMIScore;
      case Filter.NEGATIVE:
        return this._negative;
      case Filter.MUTATION:
        return this._mutation;
      case Filter.INTRA_SPECIES:
        return this.intraSpecies;
      default:
        return this.getFilter(filter).includes(value);
    }
  }

  resetAllFilters() {
    for (const filter of Object.keys(Filter)) {
      this.resetFilter(Filter[filter], false);
    }
    this.updatesSubject.next();
  }

  resetFilter(filter: Filter, update: boolean = true) {
    switch (filter) {
      case Filter.MI_SCORE:
        this.resetMISCoreFilter();
        break;
      case Filter.INTRA_SPECIES:
        this._intraSpecies = false;
        break;
      case Filter.SPECIES:
        this._intraSpecies = false;
        this.interactorSpecies = []
        break
      case Filter.NEGATIVE:
        this._negative = false;
        break;
      case Filter.MUTATION:
        this._mutation = false;
        break;
      default:
        let values = this.getFilter(filter);
        values.splice(0, values.length);
        break;
    }

    if (update) this.updatesSubject.next(filter);
  }

  private resetMISCoreFilter() {
    this._currentMinMIScore = 0;
    this._currentMaxMIScore = 1;
  }

  getFilter(filter: Filter): string[] {
    switch (filter) {
      case Filter.SPECIES:
        return this.interactorSpecies;
      case Filter.INTERACTOR_TYPE:
        return this.interactorTypes;
      case Filter.INTERACTION_TYPE:
        return this.interactionTypes;
      case Filter.DETECTION_METHOD:
        return this.interactionDetectionMethods;
      case Filter.HOST_ORGANISM:
        return this.interactionHostOrganisms;
    }
  }


  get facets(): InteractionFacets {
    return this._facets;
  }

  get mutation(): boolean {
    return this._mutation;
  }

  get negative(): boolean {
    return this._negative;
  }

  get intraSpecies(): boolean {
    return this._intraSpecies;
  }

  get currentMinMIScore(): number {
    return this._currentMinMIScore;
  }

  set currentMinMIScore(value: number) {
    this._currentMinMIScore = value;
  }

  get currentMaxMIScore(): number {
    return this._currentMaxMIScore;
  }

  set currentMaxMIScore(value: number) {
    this._currentMaxMIScore = value;
  }

  get hasMutation(): boolean {
    return this._hasMutation;
  }

  get nbMutation(): number {
    return this._nbMutation;
  }
}

export enum Filter {
  SPECIES = 'interactorSpeciesFilter',
  INTRA_SPECIES = 'intraSpeciesFilter',
  INTERACTOR_TYPE = 'interactorTypesFilter',
  INTERACTION_TYPE = 'interactionTypesFilter',
  DETECTION_METHOD = 'interactionDetectionMethodsFilter',
  HOST_ORGANISM = 'interactionHostOrganismsFilter',
  MI_SCORE = 'miScore',
  NEGATIVE = 'isNegativeFilter',
  MUTATION = 'mutationFilter',
  EXPANSION = 'expansionFilter'
}


