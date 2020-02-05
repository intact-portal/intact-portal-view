import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InteractorFacets} from '../../shared/model/interactions-results/interactor/interactor-facets.model';
import {InteractionFacets} from '../../shared/model/interactions-results/interaction/interaction-facets.model';
import {Options, ChangeContext} from 'ng5-slider';

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

  /* SLIDER */
  private _minValue: string | number;
  private _maxValue: string | number;
  private _options: Options;

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
    // TODO: TO review this,
    //  it is what was causing the bad behaviour with the negative interaction in the url and the filters
    this.isNegativeInteraction = (this.negativeFilter === 'false') ? false : true;

  }

  speciesFilterStyle(): any {
    if (this.interactorFacets.interactor_species_name_str.length > 10 ) {
      // TODO: Try to compact the styles in one function if they are the same between the different facets.
      return {
        height: '200px',
        width: '100%',
        'overflow-y': 'auto',
      };
    } else {
      return {
        width: '100%',
        'overflow-x': 'auto',
        'overflow-y': 'hidden',
      };
    }
  }

  interactorFilterStyle(): any {
    if (this.interactorFacets.interactor_type_str.length > 10) {
      return {
        height: '200px',
        width: '100%',
        'overflow-x': 'auto',
        'overflow-y': 'auto'
      };
    } else {
      return {
        width: '100%',
        'overflow-x': 'auto',
        'overflow-y': 'hidden',
      };
    }
  }

  interactionFilterStyle(): any {
    if (this.interactionFacets.type_str.length > 10) {
      return {
        height: '200px',
        width: '100%',
        'overflow-x': 'auto',
        'overflow-y': 'auto'
      };
    } else {
      return {
        width: '100%',
        'overflow-x': 'auto',
        'overflow-y': 'hidden',
      };
    }
  }

  detMethodFilterStyle(): any {
    if (this.interactionFacets.detection_method_str.length > 10) {
      return {
        height: '200px',
        width: '100%',
        'overflow-x': 'auto',
        'overflow-y': 'auto'
      };
    } else {
      return {
        width: '100%',
        'overflow-x': 'auto',
        'overflow-y': 'hidden',
      };
    }
  }

  hostOrganismFilterStyle(): any {
    if (this.interactionFacets.host_organism_str.length > 10) {
      return {
        height: '250px',
        width: '100%',
        'overflow-x': 'auto',
        'overflow-y': 'auto'
      };
    } else {
      return {
        width: '100%',
        'overflow-x': 'auto',
        'overflow-y': 'hidden',
      };
    }
  }

  initSliderRange(): void {
    this.options = {
      floor: 0,
      ceil: 1,
      step: 0.01,
      showSelectionBar: true,
      selectionBarGradient: {
        from: 'yellow',
        to: 'purple'
      }
    };

    this.minValue = this.interactionFacets.intact_miscore.length !== 0 ? this.interactionFacets.intact_miscore[0].value : 0;
    this.maxValue = this.interactionFacets.intact_miscore.length !== 0 ? this.interactionFacets.intact_miscore.slice(-1)[0].value : 1;
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

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.onInteractionMiScoreMinFilterChanged.emit(changeContext.value);
    this.onInteractionMiScoreMaxFilterChanged.emit(changeContext.highValue);
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
    // TODO: this is hardcoded to disable the button until we have more data
    // return this.isNegativeInteraction;
    return false;
  }

  anyFiltersSelected() {
    return (this.speciesNameFilter.length !== 0 || this.interactorTypeFilter.length !== 0 || this.interactionTypeFilter.length !== 0
      || this.detectionMethodFilter.length !== 0 || this.hostOrganismFilter.length !== 0); // || this.isNegativeInteraction === true);
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

  get minValue(): string | number {
    return this._minValue;
  }

  set minValue(value: string | number) {
    this._minValue = value;
  }

  get maxValue(): string | number {
    return this._maxValue;
  }

  set maxValue(value: string | number) {
    this._maxValue = value;
  }


  get options(): Options {
    return this._options;
  }

  set options(options: Options) {
    this._options = options;
  }
}
