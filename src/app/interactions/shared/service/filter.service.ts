import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Facet} from '../model/interactions-results/facet.model';
import {ParamMap} from '@angular/router';
import {InteractionFacets} from '../model/interactions-results/interaction/interaction-facets.model';
import {NetworkSelectionService} from './network-selection.service';
import {NegativeFilterStatus} from '../../interactions-results/interactions-filters/negative-filter/negative-filter-status.model';
import {SearchService} from '../../../home-dashboard/search/service/search.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable()
export class FilterService {
  private _facets: InteractionFacets;
  private intraSpeciesCounts: Map<string, number>;
  private _negative = NegativeFilterStatus.POSITIVE_ONLY;
  private _mutation = false;
  private _expansion = false;
  private _intraSpecies = false;

  private interactorSpecies: string[] = [];
  private interactorTypes: string[] = [];
  private interactionTypes: string[] = [];
  private interactionDetectionMethods: string[] = [];
  private interactionHostOrganisms: string[] = [];

  private _currentMinMIScore = 0;
  private _currentMaxMIScore = 1;

  private _hasExpansion = false;
  private _hasMutation = false;
  private _hasNegative = false;
  private _mutationColor: string = '#FF00A1';

  private _nbMutation = 0;
  private _nbNonMutation = 0;
  private _nbExpansion = 0;
  private _nbNonExpansion = 0;
  private _nbNegative = 0;
  private _nbPositive = 0;
  private _totalElements = 0;

  private updateFiltersSubject: Subject<Filter | void> = new Subject<Filter | void>();
  public $updateFilters: Observable<Filter | void> = this.updateFiltersSubject.asObservable();

  private updateFacetsSubject: Subject<InteractionFacets> = new Subject<InteractionFacets>();
  public $updateFacets: Observable<InteractionFacets> = this.updateFacetsSubject.asObservable();

  private static updateDiscreteFilter(container: string[], updatedValue: string) {
    if (!container.includes(updatedValue)) {
      container.push(updatedValue);
    } else {
      container.splice(container.indexOf(updatedValue), 1);
    }
  }

  constructor(private selection: NetworkSelectionService, private search: SearchService) {
    this.search.$searchObserver
      .pipe(untilDestroyed(this))
      .subscribe(this.resetAllFilters.bind(this));
  }

  public initFacets(facets: InteractionFacets, totalElements: number) {
    this._totalElements = totalElements;
    this._facets = FilterService.filterFacets(facets);
    this.initSpeciesFilter();
    this.initMutationFilter(facets.affected_by_mutation_styled);
    this.initExpansionFilter(facets.expansion_method_s);
    this.initNegativeFilter(facets.negative);
    this.updateFacetsSubject.next(facets);
  }

  private static filterFacets(facets: InteractionFacets): InteractionFacets {
    for (const facetName of Object.keys(facets)) {
      facets[facetName] = (<Facet<any>[]>facets[facetName]).filter(facet => facet.value !== 'null');
    }
    return facets
  }

  private initSpeciesFilter() {
    this.intraSpeciesCounts = new Map(this.facets.combined_species.map(facet => [facet.value, facet.valueCount.intra] as [string, number]));
  }

  private initMutationFilter(mutationFacets: Facet[]) {
    this._nbNonMutation = 0;
    this._nbMutation = 0;
    for (const mutationFacet of mutationFacets) {
      this._nbNonMutation += mutationFacet.valueCount;
      if (mutationFacet.value === 'true' && mutationFacet.valueCount > 0) {
        if (mutationFacet.visualProperty) {
          this._mutationColor = mutationFacet.visualProperty;
        }
        this._nbMutation = mutationFacet.valueCount;
      }
    }
    this._hasMutation = this._nbMutation > 0;
  }

  private initExpansionFilter(expansionFacets: Facet[]) {
    this._nbNonExpansion = 0;
    this._nbExpansion = 0;
    for (const expansionFacet of expansionFacets) {
      this._nbNonExpansion += expansionFacet.valueCount;
      if (expansionFacet.value === 'true' && expansionFacet.valueCount > 0) {
        this._nbExpansion = expansionFacet.valueCount;
      }
    }
    this._hasExpansion = this._nbExpansion > 0;
  }

  private initNegativeFilter(negativeFacets: Facet[]) {
    this._nbNegative = 0;
    this._nbPositive = 0;
    for (const negativeFacet of negativeFacets) {
      if (negativeFacet.value === 'false' && negativeFacet.valueCount > 0) {
        this._nbPositive = negativeFacet.valueCount;
      } else if (negativeFacet.value === 'true' && negativeFacet.valueCount > 0) {
        this._nbNegative += negativeFacet.valueCount;
      }
    }
    this._hasNegative = this._nbNegative > 0;
  }

  public updateFilter(filter: Filter, value?: any, update: boolean = true): void {
    switch (filter) {
      case Filter.NEGATIVE:
        this._negative = value;
        break;
      case Filter.MUTATION:
        this._mutation = value;
        break;
      case Filter.EXPANSION:
        this._expansion = value;
        break;
      case Filter.INTRA_SPECIES:
        this._intraSpecies = value;
        break;
      case Filter.MI_SCORE:
        break;
      default:
        FilterService.updateDiscreteFilter(this.getFilter(filter), value);
        break;
    }
    if (update) {
      this.selection.resetSelection();
      this.updateFiltersSubject.next(filter);
    }
  }

  public fromParams(params: ParamMap) {
    this.interactorSpecies = params.has('interactorSpeciesFilter') ? params.get('interactorSpeciesFilter').split(',') : [];

    this.interactorTypes = params.has('interactorTypesFilter') ? params.get('interactorTypesFilter').split(',') : [];

    this.interactionTypes = params.has('interactionTypesFilter') ? params.get('interactionTypesFilter').split(',') : [];

    this.interactionDetectionMethods = params.has('interactionDetectionMethodsFilter') ? params.get('interactionDetectionMethodsFilter').split(',') : [];

    this.interactionHostOrganisms = params.has('interactionHostOrganismsFilter') ? params.get('interactionHostOrganismsFilter').split(',') : [];

    this._currentMinMIScore = params.has('minMIScore') ? parseFloat(params.get('minMIScore')) : this.currentMinMIScore ?? 0;

    this._currentMaxMIScore = params.has('maxMIScore') ? parseFloat(params.get('maxMIScore')) : this.currentMaxMIScore ?? 1;

    this._negative = params.has('negativeFilter') ? params.get('negativeFilter') as NegativeFilterStatus : NegativeFilterStatus.POSITIVE_ONLY;

    this._mutation = params.get('mutationFilter') === 'true';

    this._expansion = params.get('expansionFilter') === 'true';

    this._intraSpecies = params.get('intraSpeciesFilter') === 'true';
  }

  public toParams(params: any = {}): any {
    if (this.interactorSpecies !== undefined && this.interactorSpecies.length !== 0) {
      params.interactorSpeciesFilter = this.interactorSpecies;
    }

    if (this.interactorTypes !== undefined && this.interactorTypes.length !== 0) {
      params.interactorTypesFilter = this.interactorTypes;
    }

    if (this.interactionTypes !== undefined && this.interactionTypes.length !== 0) {
      params.interactionTypesFilter = this.interactionTypes;
    }

    if (this.interactionDetectionMethods !== undefined && this.interactionDetectionMethods.length !== 0) {
      params.interactionDetectionMethodsFilter = this.interactionDetectionMethods;
    }

    if (this.interactionHostOrganisms !== undefined && this.interactionHostOrganisms.length !== 0) {
      params.interactionHostOrganismsFilter = this.interactionHostOrganisms;
    }

    if (this._negative) {
      params.negativeFilter = this._negative;
    }

    if (this._currentMinMIScore !== undefined && this._currentMinMIScore > 0) {
      params.minMIScore = this._currentMinMIScore;
    }

    if (this._currentMaxMIScore !== undefined && this._currentMaxMIScore < 1) {
      params.maxMIScore = this._currentMaxMIScore;
    }

    if (this.intraSpecies === true) {
      params.intraSpeciesFilter = this.intraSpecies;
    }

    if (this.mutation === true) {
      params.mutationFilter = this.mutation;
    }

    if (this.expansion === true) {
      params.expansionFilter = this.expansion;
    }

    return params;
  }

  canFilterIntraSpecies() {
    if (this.interactorSpecies.length === 0) {
      // @ts-ignore
      for (const value of this.intraSpeciesCounts.values()) {
        if (value > 0) {
          return true;
        }
      }
      return false;
    }
    for (const interactorSpecies of this.interactorSpecies) {
      if (this.intraSpeciesCounts.get(interactorSpecies) > 0) {
        return true;
      }
    }
    return false;
  }


  isFilteringScore() {
    return this._currentMinMIScore > 0 || this._currentMaxMIScore < 1;
  }

  anyFiltersSelected() {
    return this.interactorSpecies.length !== 0 ||
      this.interactorTypes.length !== 0 ||
      this.interactionTypes.length !== 0 ||
      this.interactionDetectionMethods.length !== 0 ||
      this.interactionHostOrganisms.length !== 0 ||
      this.mutation ||
      this.negative !== NegativeFilterStatus.POSITIVE_ONLY ||
      this.expansion ||
      this.isFilteringScore();
  }

  isFiltering(filter: Filter): boolean {
    switch (filter) {
      case Filter.MI_SCORE:
        return this.isFilteringScore();
      case Filter.NEGATIVE:
        return this._negative !== NegativeFilterStatus.POSITIVE_ONLY;
      case Filter.MUTATION:
        return this._mutation;
      case Filter.EXPANSION:
        return this._expansion;
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
      case Filter.EXPANSION:
        return this._expansion;
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
    this.updateFiltersSubject.next();
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
        this._negative = NegativeFilterStatus.POSITIVE_ONLY;
        break;
      case Filter.MUTATION:
        this._mutation = false;
        break;
      case Filter.EXPANSION:
        this._expansion = false;
        break
      default:
        const values = this.getFilter(filter);
        values.splice(0, values.length);
        break;
    }

    if (update) {
      this.updateFiltersSubject.next(filter);
    }
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

  getFacets(filter: Filter): Facet<any>[] {
    switch (filter) {
      case Filter.SPECIES:
        return this.facets.combined_species;
      case Filter.EXPANSION:
        return this.facets.expansion_method_s;
      case Filter.INTERACTOR_TYPE:
        return this.facets.type_MI_A_B_styled;
      case Filter.INTERACTION_TYPE:
        return this.facets.type_mi_identifier_styled;
      case Filter.DETECTION_METHOD:
        return this.facets.detection_method_s;
      case Filter.HOST_ORGANISM:
        return this.facets.host_organism_taxId_styled;
      case Filter.MUTATION:
        return this.facets.affected_by_mutation_styled;
    }
  }

  get facets(): InteractionFacets {
    return this._facets;
  }

  get mutation(): boolean {
    return this._mutation;
  }

  get expansion(): boolean {
    return this._expansion;
  }

  get negative(): NegativeFilterStatus {
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

  get mutationColor(): string {
    return this._mutationColor;
  }

  get hasMutation(): boolean {
    return this._hasMutation;
  }

  get hasExpansion(): boolean {
    return this._hasExpansion;
  }

  get nbMutation(): number {
    return this._nbMutation;
  }

  get nbExpansion(): number {
    return this._nbExpansion;
  }

  get nbNonMutation(): number {
    return this._nbNonMutation;
  }

  get nbNonExpansion(): number {
    return this._nbNonExpansion;
  }

  get hasNegative(): boolean {
    return this._hasNegative;
  }

  get nbNegative(): number {
    return this._nbNegative;
  }

  get nbPositive(): number {
    return this._nbPositive;
  }

  get totalElements(): number {
    return this._totalElements;
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


