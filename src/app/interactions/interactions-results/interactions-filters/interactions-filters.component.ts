import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'iv-interactions-filters',
  templateUrl: './interactions-filters.component.html',
  styleUrls: ['./interactions-filters.component.css']
})
export class InteractionsFiltersComponent implements OnInit {

  moleculesMockList: string[] = ['Bioentity', 'RNA', 'DNA', 'Protein', 'Gene', 'Complex'];

  private _moleculesFilter: string[] = []; // TODO: We need to maintain the state

  @Output() onMoleculesFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();
  // @Output() onSpeciesFilterChanged: EventEmitter<string[]> = new EventEmitter<string[]>();


  constructor() { }

  ngOnInit() {
  }

  onChangeMoleculesFilter(filter: string) {
    if (!this.moleculesFilter.includes(filter)) {
      this.moleculesFilter.push(filter);
    } else {
      this.moleculesFilter.splice(this.moleculesFilter.indexOf(filter), 1);
    }

    this.onMoleculesFilterChanged.emit(this.moleculesFilter)
  }

  isSelectedMolecule(molecule) {
    return this.moleculesFilter !== undefined ? this.moleculesFilter.indexOf(molecule) >= 0 : false;
  }


  /** GETTERS AND SETTERS **/

  get moleculesFilter(): string[] {
    return this._moleculesFilter;
  }

  @Input()
  set moleculesFilter(value: string[]) {
    this._moleculesFilter = value;
  }
}
