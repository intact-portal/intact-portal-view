import { Facet } from '../facet.model';

export class InteractorFacets {
  private _interactor_species_name_str: Facet[];
  private _interactor_type_str: Facet[];

  constructor(interactor_species_name_str: Facet[], interactor_type_str: Facet[]) {
    this._interactor_species_name_str = interactor_species_name_str;
    this._interactor_type_str = interactor_type_str;
  }

  get interactor_species_name_str(): Facet[] {
    return this._interactor_species_name_str;
  }

  set interactor_species_name_str(value: Facet[]) {
    this._interactor_species_name_str = value;
  }

  get interactor_type_str(): Facet[] {
    return this._interactor_type_str;
  }

  set interactor_type_str(value: Facet[]) {
    this._interactor_type_str = value;
  }

}
