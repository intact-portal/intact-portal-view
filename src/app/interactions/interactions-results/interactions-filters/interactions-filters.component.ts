import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

declare const $: any;

@Component({
  selector: 'iv-interactions-filters',
  templateUrl: './interactions-filters.component.html',
  styleUrls: ['./interactions-filters.component.css', './custom_switchOnOff.css']
})
export class InteractionsFiltersComponent implements OnInit {
  // TODO: Replace the static mock list for the correct ones once they are available
  moleculesMockList: string[] = ['Bioentity', 'RNA', 'DNA', 'Protein', 'Gene', 'Complex'];
  speciesMockList: string[] = ['Homo sapiens', 'Mus musculus', 'Arabidopsis thaliana', 'Escherichia coli', 'Rattus norvegicus',
    'Drosophila melanogaster', 'Bos taurus', 'Yeast'];
  interactionTypeMockList: string[] = ['Physical association', 'Direct interaction', 'Phosphorylation reaction', 'Genetic interaction'];
  detectionMethodMockList: string[] = ['Anti tag coimmunoprecipitation', 'Anti bait coimmunoprecipitation', 'Genetic interference',
    'Two hybrid'];

  private _moleculesFilter: string[] = [];
  private _speciesFilter: string[] = [];
  private _interactionTypeFilter: string[] = [];
  private _detectionMethodFilter: string[] = [];

  @Output() onMoleculesFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onSpeciesFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onInteractionTypeFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onDetectionMethodFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Output() onResetAllFilters: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  onChangeMoleculesFilter(filter: string) {
    if (!this.moleculesFilter.includes(filter)) {
      this.moleculesFilter.push(filter);
    } else {
      this.moleculesFilter.splice(this.moleculesFilter.indexOf(filter), 1);
    }

    this.onMoleculesFilterChanged.emit(this.moleculesFilter);
  }

  onChangeSpeciesFilter(filter: string) {
    if (!this.speciesFilter.includes(filter)) {
      this.speciesFilter.push(filter);
    } else {
      this.speciesFilter.splice(this.speciesFilter.indexOf(filter), 1);
    }

    this.onSpeciesFilterChanged.emit(this.speciesFilter);
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

  isSelectedMolecule(molecule: string) {
    return this.moleculesFilter !== undefined ? this.moleculesFilter.indexOf(molecule) >= 0 : false;
  }

  isSelectedSpecies(species: string) {
    return this.speciesFilter !== undefined ? this.speciesFilter.indexOf(species) >= 0 : false;
  }

  isSelectedInteractionType(interactionType: string) {
    return this.interactionTypeFilter !== undefined ? this.interactionTypeFilter.indexOf(interactionType) >= 0 : false;
  }

  isSelectedDetectionMethod(detectionMethod: string) {
    return this.detectionMethodFilter !== undefined ? this.detectionMethodFilter.indexOf(detectionMethod) >= 0 : false;
  }

  anyFiltersSelected() {
    return (this.moleculesFilter.length !== 0 || this.speciesFilter.length !== 0 || this.interactionTypeFilter.length !== 0
      || this.detectionMethodFilter.length !== 0);
  }

  resetAllFilters() {
    this.onResetAllFilters.emit(true);
  }

  /** GETTERS AND SETTERS **/

  get moleculesFilter(): string[] {
    return this._moleculesFilter;
  }

  @Input()
  set moleculesFilter(value: string[]) {
    this._moleculesFilter = value;
  }

  get speciesFilter(): string[] {
    return this._speciesFilter;
  }

  @Input()
  set speciesFilter(value: string[]) {
    this._speciesFilter = value;
  }

  get interactionTypeFilter(): string[] {
    return this._interactionTypeFilter;
  }

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
