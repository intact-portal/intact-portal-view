import {Facet} from '../facet.model';

export class InteractionFacets{

  private _interaction_detection_method_str: Facet[];
  private _interaction_type_str: Facet[];
  private _host_organism_str: Facet[];
  private _interaction_negative: Facet[];
  private _intact_miscore: Facet[];
  private _speciesA_B_str: Facet[];


  constructor(interaction_detection_method_str: Facet[], interaction_type_str: Facet[], host_organism_str: Facet[],
              interaction_negative: Facet[], intact_miscore: Facet[], speciesA_B_str: Facet[]) {
    this._interaction_detection_method_str = interaction_detection_method_str;
    this._interaction_type_str = interaction_type_str;
    this._host_organism_str = host_organism_str;
    this._interaction_negative = interaction_negative;
    this._intact_miscore = intact_miscore;
    this._speciesA_B_str = speciesA_B_str;
  }


  get interaction_detection_method_str(): Facet[] {
    return this._interaction_detection_method_str;
  }

  set interaction_detection_method_str(value: Facet[]) {
    this._interaction_detection_method_str = value;
  }

  get interaction_type_str(): Facet[] {
    return this._interaction_type_str;
  }

  set interaction_type_str(value: Facet[]) {
    this._interaction_type_str = value;
  }

  get host_organism_str(): Facet[] {
    return this._host_organism_str;
  }

  set host_organism_str(value: Facet[]) {
    this._host_organism_str = value;
  }

  get interaction_negative(): Facet[] {
    return this._interaction_negative;
  }

  set interaction_negative(value: Facet[]) {
    this._interaction_negative = value;
  }

  get intact_miscore(): Facet[] {
    return this._intact_miscore;
  }

  set intact_miscore(value: Facet[]) {
    this._intact_miscore = value;
  }

  get speciesA_B_str(): Facet[] {
    return this._speciesA_B_str;
  }

  set speciesA_B_str(value: Facet[]) {
    this._speciesA_B_str = value;
  }
}
