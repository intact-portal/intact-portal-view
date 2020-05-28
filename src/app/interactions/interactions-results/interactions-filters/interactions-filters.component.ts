import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InteractionFacets} from '../../shared/model/interactions-results/interaction/interaction-facets.model';
import {ChangeContext, LabelType, Options} from 'ng5-slider';

declare const $: any;

@Component({
  selector: 'ip-interactions-filters',
  templateUrl: './interactions-filters.component.html',
  styleUrls: ['./interactions-filters.component.css', './custom_switchOnOff.css']
})
export class InteractionsFiltersComponent implements OnInit, AfterViewInit {

  private _interactionFacets: InteractionFacets;

  /** INTERACTORS FILTERS **/
  private _interactorSpeciesFilter: string[];
  private _interactorTypeFilter: string[];

  /** INTERACTIONS FILTERS **/
  private _interactionTypeFilter: string[];
  private _detectionMethodFilter: string[];
  private _hostOrganismFilter: string[];
  private _negativeFilter: any;
  // Noe: I am not sure if I need this as a filter
  private _intraSpeciesFilter: any;
  private _miScoreMinFilter: any;
  private _miScoreMaxFilter: any;

  /** Slider **/
  private _minValue: string | number;
  private _maxValue: string | number;
  private _options: Options;

  /** This variable is used to check if the param is in the URL and update the state of the checkbox */
  private _isNegativeInteraction: boolean;
  private _isIntraSpecies: boolean;

  @Output() onInteractorSpeciesFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onInteractorTypeFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

  @Output() onInteractionTypeFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onInteractionDetectionMethodFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onInteractionHostOrganismFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onInteractionNegativeFilterChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() onInteractionMiScoreMinFilterChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() onInteractionMiScoreMaxFilterChanged: EventEmitter<any> = new EventEmitter<any>();

  @Output() onInteractionIntraSpeciesFilterChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() onResetAllFilters: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.initSliderRange();
    this.isNegativeInteraction = this.negativeFilter;
    // TODO: TO review this,
    //  it is what was causing the bad behaviour with the negative interaction in the url and the filters
    this.isNegativeInteraction = (this.negativeFilter !== 'false');
    this.isIntraSpecies = this.intraSpeciesFilter;

  }

  ngAfterViewInit(): void {
    $('ip-interactions-filters').foundation();
    $(window).trigger('load.zf.sticky');
  }

  interactorSpeciesFilterStyle(): any {
    if (this.interactionFacets.speciesA_B_str.length > 20 ) {
      // TODO: Try to compact the styles in one function if they are the same between the different facets.
      return {
        height: '400px',
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

  interactorTypeFilterStyle(): any {
    if (this.interactionFacets.typeA_B_str.length > 20) {
      return {
        height: '400px',
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

  interactionDetectionMethodFilterStyle(): any {
    if (this.interactionFacets.detection_method_str.length > 20) {
      return {
        height: '500px',
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

  interactionTypeFilterStyle(): any {
    if (this.interactionFacets.type_str.length > 20) {
      return {
        height: '400px',
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

  interactionHostOrganismFilterStyle(): any {
    if (this.interactionFacets.host_organism_str.length > 20) {
      return {
        height: '500px',
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
      minLimit: 0,
      maxLimit: 1,
      step: 0.01,
      showSelectionBar: true,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return '<b>Min:</b> ' + value;
          case LabelType.High:
            return '<b>Max:</b> ' + value;
          default:
            return String(value);
        }
      }
    };

    this.minValue = this.interactionFacets.intact_miscore.length !== 0 ? this.interactionFacets.intact_miscore[0].value : 0;
    this.maxValue = this.interactionFacets.intact_miscore.length !== 0 ? this.interactionFacets.intact_miscore.slice(-1)[0].value : 1;
  }

  onChangeInteractorSpeciesFilter(filter: string) {
    if (!this.interactorSpeciesFilter.includes(filter)) {
      this.interactorSpeciesFilter.push(filter);
    } else {
      this.interactorSpeciesFilter.splice(this.interactorSpeciesFilter.indexOf(filter), 1);
    }

    this.onInteractorSpeciesFilterChanged.emit(this.interactorSpeciesFilter);
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

  onChangeInteractionDetectionMethodFilter(filter: string) {
    if (!this.interactionDetectionMethodFilter.includes(filter)) {
      this.interactionDetectionMethodFilter.push(filter);
    } else {
      this.interactionDetectionMethodFilter.splice(this.interactionDetectionMethodFilter.indexOf(filter), 1);
    }

    this.onInteractionDetectionMethodFilterChanged.emit(this.interactionDetectionMethodFilter);
  }

  onChangeInteractionHostOrganismFilter(filter: string) {
    if (!this.interactionHostOrganismFilter.includes(filter)) {
      this.interactionHostOrganismFilter.push(filter);
    } else {
      this.interactionHostOrganismFilter.splice(this.interactionHostOrganismFilter.indexOf(filter), 1);
    }

    this.onInteractionHostOrganismFilterChanged.emit(this.interactionHostOrganismFilter);
  }

  onChangeInteractionIntraSpeciesFilter(checked: boolean) {
    this.isIntraSpecies = checked;
    this.onInteractionIntraSpeciesFilterChanged.emit(this.isIntraSpecies);
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.onInteractionMiScoreMinFilterChanged.emit(changeContext.value);
    this.onInteractionMiScoreMaxFilterChanged.emit(changeContext.highValue);
  }

  isSelectedInteractorSpecies(interactorSpecies: string) {
    return this.interactorSpeciesFilter !== undefined ? this.interactorSpeciesFilter.indexOf(interactorSpecies) >= 0 : false;
  }

  isSelectedInteractorType(interactorType: string) {
    return this.interactorTypeFilter !== undefined ? this.interactorTypeFilter.indexOf(interactorType) >= 0 : false;
  }

  isSelectedInteractionType(interactionType: string) {
    return this.interactionTypeFilter !== undefined ? this.interactionTypeFilter.indexOf(interactionType) >= 0 : false;
  }

  isSelectedInteractionDetectionMethod(interactionDetectionMethod: string) {
    return this.interactionDetectionMethodFilter !== undefined ? this.interactionDetectionMethodFilter.indexOf(interactionDetectionMethod) >= 0 : false;
  }

  isSelectedInteractionHostOrganism(interactionHostOrganism: string) {
    return this.interactionHostOrganismFilter !== undefined ? this.interactionHostOrganismFilter.indexOf(interactionHostOrganism) >= 0 : false;
  }

  isSelectedInteractionIntraSpecies() {
    return this.isIntraSpecies !== undefined ? this.isIntraSpecies : false;
  }

  isSelectedMoreThanOneSpecies() {
    return this.interactorSpeciesFilter.length > 1;
  }

  // TODO detect miScore filter
  anyFiltersSelected() {
    return (this.interactorSpeciesFilter.length !== 0 || this.interactorTypeFilter.length !== 0 || this.interactionTypeFilter.length !== 0
      || this.interactionDetectionMethodFilter.length !== 0 || this.interactionHostOrganismFilter.length !== 0);
  }

  resetAllFilters() {
    this.isNegativeInteraction = false;
    this.negativeFilter = false;
    this.isIntraSpecies = false;
    this.intraSpeciesFilter = false;
    this.onResetAllFilters.emit(true);
  }

  /************************* /
  /** GETTERS AND SETTERS ** /
  /*************************/
  get interactionFacets(): InteractionFacets {
    return this._interactionFacets;
  }

  @Input()
  set interactionFacets(value: InteractionFacets) {
    this._interactionFacets = value;
  }

  /***** INTERACTORS FILTERS ******/

  get interactorSpeciesFilter(): string[] {
    return this._interactorSpeciesFilter;
  }

  @Input()
  set interactorSpeciesFilter(value: string[]) {
    this._interactorSpeciesFilter = value;
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

  get interactionDetectionMethodFilter(): string[] {
    return this._detectionMethodFilter;
  }

  @Input()
  set interactionDetectionMethodFilter(value: string[]) {
    this._detectionMethodFilter = value;
  }

  get interactionHostOrganismFilter(): string[] {
    return this._hostOrganismFilter;
  }

  @Input()
  set interactionHostOrganismFilter(value: string[]) {
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

  get intraSpeciesFilter(): any {
    return this._intraSpeciesFilter;
  }

  @Input()
  set intraSpeciesFilter(value: any) {
    this._intraSpeciesFilter = value;
  }

  get isIntraSpecies(): boolean {
    return this._isIntraSpecies;
  }

  set isIntraSpecies(value: boolean) {
    this._isIntraSpecies = value;
  }

  get options(): Options {
    return this._options;
  }

  set options(options: Options) {
    this._options = options;
  }
}
