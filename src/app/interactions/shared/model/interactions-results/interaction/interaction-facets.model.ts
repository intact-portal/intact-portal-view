import {Facet} from '../facet.model';

export class InteractionFacets {

  private _speciesA_B_str: Facet[];
  private _typeA_B_str: Facet[];
  private _detection_method_str: Facet[];
  private _type_str: Facet[];
  private _host_organism_str: Facet[];
  private _negative: Facet[];
  private _intact_miscore: Facet[];


  constructor(speciesA_B_str: Facet[], typeA_B_str: Facet[], detection_method_str: Facet[], type_str: Facet[], host_organism_str: Facet[],
              negative: Facet[], intact_miscore: Facet[]) {
    this._speciesA_B_str = speciesA_B_str;
    this._typeA_B_str = typeA_B_str;
    this._detection_method_str = detection_method_str;
    this._type_str = type_str;
    this._host_organism_str = host_organism_str;
    this._negative = negative;
    this._intact_miscore = intact_miscore;
  }

  get speciesA_B_str(): Facet[] {
    return this._speciesA_B_str;
  }

  set   speciesA_B_str(value: Facet[]) {
    this._speciesA_B_str = value;
  }


  get typeA_B_str(): Facet[] {
    return this._typeA_B_str;
  }

  set typeA_B_str(value: Facet[]) {
    this._typeA_B_str = value;
  }

  get detection_method_str(): Facet[] {
    return this._detection_method_str;
  }

  set detection_method_str(value: Facet[]) {
    this._detection_method_str = value;
  }

  get type_str(): Facet[] {
    return this._type_str;
  }

  set type_str(value: Facet[]) {
    this._type_str = value;
  }

  get host_organism_str(): Facet[] {
    return this._host_organism_str;
  }

  set host_organism_str(value: Facet[]) {
    this._host_organism_str = value;
  }

  get negative(): Facet[] {
    return this._negative;
  }

  set negative(value: Facet[]) {
    this._negative = value;
  }

  get intact_miscore(): Facet[] {
    return this._intact_miscore;
  }

  set intact_miscore(value: Facet[]) {
    this._intact_miscore = value;
  }
}
