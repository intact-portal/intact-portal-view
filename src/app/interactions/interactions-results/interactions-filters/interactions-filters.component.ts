import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InteractionFacets} from '../../shared/model/interactions-results/interaction/interaction-facets.model';
import {ChangeContext, LabelType, Options} from 'ng5-slider';
import {TableFactoryService} from "../../shared/service/table-factory.service";

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
  private _minValueCurrent: string | number;
  private _maxValueCurrent: string | number;
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
  @Output() onResetFilter: EventEmitter<EFilter> = new EventEmitter<EFilter>();
  private minValue: string | number;
  private maxValue: string | number;

  constructor(private tableFactory: TableFactoryService) {
  }

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
    this.tableFactory.makeTableHeaderSticky();
  }

  filterStyle(filterKey: string): any {
    if (this.interactionFacets[filterKey].length > 20) {
      return {
        height: ['detection_method_str', 'host_organism_str'].includes(filterKey) ? '500px' : '400px',
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

  initSliderRange(): void {
    this.options = {
      floor: 0,
      ceil: 1,
      minLimit: 0,
      maxLimit: 1,
      step: 0.01,
      animate: false,
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
      },
      getPointerColor: (value: number): string => {
        if (value <= 0.1) {
          return '#FFFFE5';
        } else if (value <= 0.2) {
          return '#FFF7BC';
        } else if (value <= 0.3) {
          return '#FEE391';
        } else if (value <= 0.4) {
          return '#FEC44F';
        } else if (value <= 0.5) {
          return '#FE9929';
        } else if (value <= 0.6) {
          return '#EC7014';
        } else if (value <= 0.7) {
          return '#CC4C02';
        } else if (value <= 0.8) {
          return '#993404';
        } else if (value <= 0.9) {
          return '#662506';
        } else {
          return '#361303';
        }
      }
    };

    let scores = this.interactionFacets.intact_miscore.map(facet => parseFloat(facet.value));
    this.minValueCurrent = this.interactionFacets.intact_miscore.length !== 0 ? Math.min(...scores) : 0;
    this.maxValueCurrent = this.interactionFacets.intact_miscore.length !== 0 ? Math.max(...scores) : 1;
    this.minValue = this.minValueCurrent;
    this.maxValue = this.maxValueCurrent;
  }

  private onChangeDiscreteFilter = (filters: string[], emitter: EventEmitter<string[]>, filter: string) => {
    if (!filters.includes(filter)) {
      filters.push(filter);
    } else {
      filters.splice(filters.indexOf(filter), 1);
    }
    emitter.emit(filters);
  }

  onChangeInteractorSpeciesFilter(filter: string) {
    this.onChangeDiscreteFilter(this.interactorSpeciesFilter, this.onInteractorSpeciesFilterChanged, filter);
  }

  onChangeInteractorTypeFilter(filter: string) {
    this.onChangeDiscreteFilter(this.interactorTypeFilter, this.onInteractorTypeFilterChanged, filter);
  }

  onChangeInteractionTypeFilter(filter: string) {
    this.onChangeDiscreteFilter(this.interactionTypeFilter, this.onInteractionTypeFilterChanged, filter);
  }

  onChangeInteractionDetectionMethodFilter(filter: string) {
    this.onChangeDiscreteFilter(this.interactionDetectionMethodFilter, this.onInteractionDetectionMethodFilterChanged, filter);
  }

  onChangeInteractionHostOrganismFilter(filter: string) {
    this.onChangeDiscreteFilter(this.interactionHostOrganismFilter, this.onInteractionHostOrganismFilterChanged, filter);
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

  isFilteringScore() {
    return this.minValueCurrent > this.minValue || this.maxValueCurrent < this.maxValue;
  }

  anyFiltersSelected() {
    return this.interactorSpeciesFilter.length !== 0 ||
      this.interactorTypeFilter.length !== 0 ||
      this.interactionTypeFilter.length !== 0 ||
      this.interactionDetectionMethodFilter.length !== 0 ||
      this.interactionHostOrganismFilter.length !== 0 ||
      this.isFilteringScore();
  }

  resetAllFilters() {
    this.isNegativeInteraction = false;
    this.negativeFilter = false;
    this.isIntraSpecies = false;
    this.intraSpeciesFilter = false;
    this.resetMISCoreFilter();
    this.onResetAllFilters.emit(true);
  }

  resetFilter(filter: EFilter) {
    switch (filter) {
      case EFilter.MI_SCORE:
        this.resetMISCoreFilter();
        break;
      case EFilter.SPECIES:
        this.isIntraSpecies = false;
        break;
    }
    this.onResetFilter.emit(filter);
  }

  private resetMISCoreFilter() {
    this.minValueCurrent = this.minValue;
    this.maxValueCurrent = this.maxValue;
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

  get minValueCurrent(): string | number {
    return this._minValueCurrent;
  }

  set minValueCurrent(value: string | number) {
    this._minValueCurrent = value;
  }

  get maxValueCurrent(): string | number {
    return this._maxValueCurrent;
  }

  set maxValueCurrent(value: string | number) {
    this._maxValueCurrent = value;
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



  getFilter(filter: EFilter): string[] {
    switch (filter) {
      case EFilter.SPECIES:
        return this.interactorSpeciesFilter;
      case EFilter.INTERACTOR_TYPE:
        return this.interactorTypeFilter;
      case EFilter.INTERACTION_TYPE:
        return this.interactionTypeFilter;
      case EFilter.DETECTION_METHOD:
        return this.interactionDetectionMethodFilter;
      case EFilter.HOST_ORGANISM:
        return this.interactionHostOrganismFilter;
    }
  }

  filter = EFilter;
}

export enum EFilter {
  SPECIES,
  INTERACTOR_TYPE,
  INTERACTION_TYPE,
  DETECTION_METHOD,
  HOST_ORGANISM,
  MI_SCORE,
  NEGATIVE
}
