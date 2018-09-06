import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InteractorFacets} from '../../shared/model/interactions-results/interactor/interactor-facets.model';
import {Filter} from '../../shared/model/interactions-results/filter.model';

declare const $: any;

@Component({
  selector: 'iv-interactions-filters',
  templateUrl: './interactions-filters.component.html',
  styleUrls: ['./interactions-filters.component.css', './custom_switchOnOff.css']
})
export class InteractionsFiltersComponent implements OnInit {

  // TODO: Replace the static mock list for the correct ones once they are available
  interactionTypeMockList: string[] = ['Physical association', 'Direct interaction', 'Phosphorylation reaction', 'Genetic interaction'];
  detectionMethodMockList: string[] = ['Anti tag coimmunoprecipitation', 'Anti bait coimmunoprecipitation', 'Genetic interference',
    'Two hybrid'];

  private _facets: InteractorFacets;
  private _filters: Filter[]; // string[];

  private _speciesNameFilter: string[];
  private _interactorTypeFilter: string[];

  private _interactionTypeFilter: string[] = [];
  private _detectionMethodFilter: string[] = [];

  @Output() onMoleculesFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onSpeciesFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onInteractionTypeFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onDetectionMethodFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onResetAllFilters: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() onSpeciesNameFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onInteractorTypeFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit() {
    this.initSliderRange();
  }

  initSliderRange(): void {
    const sliderRange =  $( '#slider-range' );
    const handle1 = $('#custom-handle1');
    const handle2 = $('#custom-handle2');
    const range1 = $('#range1');
    const range2 = $('#range2');

    sliderRange.slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      // create: function() {
      //   handle1.text( $( this ).slider( 'value' ) );
      // },
      slide: function( event, ui ) {
        handle1.text( ui.values[0] );
        handle2.text( ui.values[1] );

        range1.val( ui.values[0] );
        range2.val( ui.values[1] );

      }


    });

    range1.val(sliderRange.slider( 'values', 0 ));
    range2.val(sliderRange.slider( 'values', 1 ));
  }

  onChangeSpeciesNameFilter(filter: string) {
    if (!this.speciesNameFilter.includes(filter)) {
      this.speciesNameFilter.push(filter);
    } else {
      this.speciesNameFilter.splice(this.speciesNameFilter.indexOf(filter), 1);
    }

    this.onSpeciesNameFilterChanged.emit(this.speciesNameFilter);
  }

  onChangeInteractorTypeFilter(filter: string) {
    if (!this.interactorTypeFilter.includes(filter)) {
      this.interactorTypeFilter.push(filter);
    } else {
      this.interactorTypeFilter.splice(this.interactorTypeFilter.indexOf(filter), 1);
    }

    this.onInteractorTypeFilterChanged.emit(this.interactorTypeFilter);
  }

  onChangeInteractionTypeFilter(filter: string) {
    if (!this.interactionTypeFilter.includes(filter)) {
      this.interactionTypeFilter.push(filter);
    } else {
      this.interactionTypeFilter.splice(this.interactionTypeFilter.indexOf(filter), 1);
    }

    this.onInteractionTypeFilterChanged.emit(this.interactionTypeFilter);
  }

  onChangeDetectionMethodFilter(filter: string) {
    if (!this.detectionMethodFilter.includes(filter)) {
      this.detectionMethodFilter.push(filter);
    } else {
      this.detectionMethodFilter.splice(this.detectionMethodFilter.indexOf(filter), 1);
    }

    this.onDetectionMethodFilterChanged.emit(this.detectionMethodFilter);
  }

  isSelectedSpeciesName(species: string) {
    return this.speciesNameFilter !== undefined ? this.speciesNameFilter.indexOf(species) >= 0 : false;
  }

  isSelectedInteractorType(interactorType: string) {
    return this.interactorTypeFilter !== undefined ? this.interactorTypeFilter.indexOf(interactorType) >= 0 : false;
  }

  isSelectedInteractionType(interactionType: string) {
    return this.interactionTypeFilter !== undefined ? this.interactionTypeFilter.indexOf(interactionType) >= 0 : false;
  }

  isSelectedDetectionMethod(detectionMethod: string) {
    return this.detectionMethodFilter !== undefined ? this.detectionMethodFilter.indexOf(detectionMethod) >= 0 : false;
  }

  anyFiltersSelected() {
    return (this.speciesNameFilter.length !== 0 || this.interactorTypeFilter.length !== 0 || this.interactionTypeFilter.length !== 0
      || this.detectionMethodFilter.length !== 0);
  }

  resetAllFilters() {
    this.onResetAllFilters.emit(true);
  }

  /************************* /
  /** GETTERS AND SETTERS ** /
  /*************************/

  get facets(): InteractorFacets {
    return this._facets;
  }

  @Input()
  set facets(value: InteractorFacets) {
    this._facets = value;
  }


  get filters(): Filter[] {
    return this._filters;
  }

  @Input()
  set filters(value: Filter[]) {
    this._filters = value;
  }

  /***** INTERACTORS FILTERS ******/

  get speciesNameFilter(): string[] {
    return this._speciesNameFilter;
  }

  @Input()
  set speciesNameFilter(value: string[]) {
    this._speciesNameFilter = value;
  }

  get interactorTypeFilter(): string[] {
    return this._interactorTypeFilter;
  }

  @Input()
  set interactorTypeFilter(value: string[]) {
    this._interactorTypeFilter = value;
  }

  get interactionTypeFilter(): string[] {
    return this._interactionTypeFilter;
  }

  /***** INTERACTIONS FILTERS ******/

  @Input()
  set interactionTypeFilter(value: string[]) {
    this._interactionTypeFilter = value;
  }

  get detectionMethodFilter(): string[] {
    return this._detectionMethodFilter;
  }

  @Input()
  set detectionMethodFilter(value: string[]) {
    this._detectionMethodFilter = value;
  }

}
