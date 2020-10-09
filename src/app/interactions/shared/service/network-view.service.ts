import { Injectable } from '@angular/core';

@Injectable()
export class NetworkViewService {

  private _expanded: boolean = true;
  private _affectedByMutation: boolean = false;
  private _groupBySpecies: boolean = false;

  constructor() { }

  get expanded(): boolean {
    return this._expanded;
  }

  set expanded(value: boolean) {
    this._expanded = value;
  }

  get affectedByMutation(): boolean {
    return this._affectedByMutation;
  }

  set affectedByMutation(value: boolean) {
    this._affectedByMutation = value;
  }

  get groupBySpecies(): boolean {
    return this._groupBySpecies;
  }

  set groupBySpecies(value: boolean) {
    this._groupBySpecies = value;
  }

}
