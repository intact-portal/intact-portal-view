import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InteractorFacets} from '../../shared/model/interactions-results/interactor/interactor-facets.model';
import {Filter} from '../../shared/model/interactions-results/filter.model';
import {InteractionFacets} from '../../shared/model/interactions-results/interaction/interaction-facets.model';

declare const $: any;

@Component({
  selector: 'iv-interactions-filters',
  templateUrl: './interactions-filters.component.html',
  styleUrls: ['./interactions-filters.component.css', './custom_switchOnOff.css']
})
export class InteractionsFiltersComponent implements OnInit {

  private _interactorFacets: InteractorFacets;
  private _interactionFacets: InteractionFacets;

  /** INTERACTORS FILTERS **/
  private _speciesNameFilter: string[];
  private _interactorTypeFilter: string[];

  /** INTERACTIONS FILTERS **/
  private _interactionTypeFilter: string[];
  private _detectionMethodFilter: string[];
  private _hostOrganismFilter: string[];
  private _negativeFilter: any;
  private _miScoreMinFilter: any;
  private _miScoreMaxFilter: any;

  /** This variable is used to check if the param is in the URL and update the state of the checkbox */
  private _isNegativeInteraction: boolean;

  @Output() onSpeciesNameFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onInteractorTypeFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Output() onInteractionTypeFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onDetectionMethodFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onHostOrganismFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onInteractionNegativeFilterChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() onInteractionMiScoreMinFilterChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() onInteractionMiScoreMaxFilterChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() onResetAllFilters: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.initSliderRange();
    this.isNegativeInteraction = this.negativeFilter;
    this.isNegativeInteraction = (this.negativeFilter === 'false') ? false : true;

  }

  speciesFilterStyle(): any {
    if (this.interactorFacets.species_name_str.length > 5) {
      return {height: '200px', 'overflow-y': 'auto'};
    } else {
      return {};
    }
  }

  interactorFilterStyle(): any {
    if (this.interactorFacets.interactor_type_str.length > 5) { return {height: '200px', 'overflow-y': 'auto'}; } else {
        return {};
      }
  }

  interactionFilterStyle(): any {
    if (this.interactionFacets.interaction_type_str.length > 5) {return {height: '200px', 'overflow-y': 'auto'}; } else {
        return {};
      }
  }

  detMethodFilterStyle(): any {
    if (this.interactionFacets.interaction_detection_method_str.length > 5) {return {height: '200px', 'overflow-y': 'auto'}; } else {
      return {};
    }
  }

  hostOrganismfilterStyle(): any {
    if (this.interactionFacets.host_organism_str.length > 5) { return {height: '200px', 'overflow-y': 'auto'}; } else {
        return {};
      }
  }

  initSliderRange(): void {
    const sliderRange =  $( '#slider-range' );
    const range1 = $('#range1');
    const range2 = $('#range2');

    const val1 = this.interactionFacets.intact_miscore.length !== 0 ? this.interactionFacets.intact_miscore[0].value : 0;
    const val2 = this.interactionFacets.intact_miscore.length !== 0 ? this.interactionFacets.intact_miscore.slice(-1)[0].value : 1;

    sliderRange.slider({
      range: true,
      min: 0,
      max: 1,
      step: 0.01,
      values: [ val1, val2],
      slide: function( event, ui ) {
        range1.val( ui.values[0] );
        range2.val( ui.values[1] );
        this.miScoreMinFilter = range1.val();
        this.miScoreMaxFilter = range2.val();

        this.onInteractionMiScoreMinFilterChanged.emit(this.miScoreMinFilter);
        this.onInteractionMiScoreMaxFilterChanged.emit(this.miScoreMaxFilter);

      }.bind(this)
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

  onChangeHostOrganismFilter(filter: string) {
    if (!this.hostOrganismFilter.includes(filter)) {
      this.hostOrganismFilter.push(filter);
    } else {
      this.hostOrganismFilter.splice(this.hostOrganismFilter.indexOf(filter), 1);
    }

    this.onHostOrganismFilterChanged.emit(this.hostOrganismFilter);
  }

  onChangeInteractionNegativeFilter(value: boolean) {
    this.isNegativeInteraction = value;

    if (this.negativeFilter !== value) {
      this.negativeFilter = value;
    }

    this.onInteractionNegativeFilterChanged.emit(this.negativeFilter);
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

  isSelectedHostOrganism(hostOrganism: string) {
    return this.hostOrganismFilter !== undefined ? this.hostOrganismFilter.indexOf(hostOrganism) >= 0 : false;
  }

  isSelectedInteractionNegative() {
    return this.isNegativeInteraction;
  }

  anyFiltersSelected() {
    return (this.speciesNameFilter.length !== 0 || this.interactorTypeFilter.length !== 0 || this.interactionTypeFilter.length !== 0
      || this.detectionMethodFilter.length !== 0 || this.hostOrganismFilter.length !== 0 || this.isNegativeInteraction === true);
  }

  resetAllFilters() {
    this.isNegativeInteraction = false;
    this.negativeFilter = false;
    this.onResetAllFilters.emit(true);
  }

  /************************* /
  /** GETTERS AND SETTERS ** /
  /*************************/

  get interactorFacets(): InteractorFacets {
    return this._interactorFacets;
  }

  @Input()
  set interactorFacets(value: InteractorFacets) {
    this._interactorFacets = value;
  }


  get interactionFacets(): InteractionFacets {
    return this._interactionFacets;
  }

  @Input()
  set interactionFacets(value: InteractionFacets) {
    this._interactionFacets = value;
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

  get hostOrganismFilter(): string[] {
    return this._hostOrganismFilter;
  }

  @Input()
  set hostOrganismFilter(value: string[]) {
    this._hostOrganismFilter = value;
  }

  get negativeFilter(): any {
    return this._negativeFilter;
  }

  @Input()
  set negativeFilter(value: any) {
    this._negativeFilter = value;
  }

  get isNegativeInteraction(): boolean {
    return this._isNegativeInteraction;
  }

  set isNegativeInteraction(value: boolean) {
    this._isNegativeInteraction = value;
  }

  get miScoreMinFilter(): any {
    return this._miScoreMinFilter;
  }

  @Input()
  set miScoreMinFilter(value: any) {
    this._miScoreMinFilter = value;
  }

  get miScoreMaxFilter(): any {
    return this._miScoreMaxFilter;
  }

  @Input()
  set miScoreMaxFilter(value: any) {
    this._miScoreMaxFilter = value;
  }
}
