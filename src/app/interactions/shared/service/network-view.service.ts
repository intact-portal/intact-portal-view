import {Injectable} from '@angular/core';
import {ParamMap} from '@angular/router';
import {GraphPort} from 'intact-network-viewer'
import {Subject} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class NetworkViewService {

  private _visible: boolean = true;
  private _viewer: GraphPort;
  private _expanded: boolean = false;
  private _affectedByMutation: boolean = false;
  private _groupBySpecies: boolean = false;
  private _layoutName: string = 'fcose';
  private _mustQuery: boolean = true;
  private _error: HttpErrorResponse = null;

  private updatesSubject: Subject<void> = new Subject<void>();
  public updates = this.updatesSubject.asObservable();

  constructor() {
  }

  fromParams(paramMap: ParamMap): void {
    this._expanded = paramMap.get('expanded') === 'true';
    this._affectedByMutation = paramMap.get('mutationStyle') === 'true';
    this._groupBySpecies = paramMap.get('groupBySpecies') === 'true';
    this._layoutName = paramMap.has('layout') ? paramMap.get('layout') : 'fcose';
  }

  toParams(params: any = {}, arrayHandler: (array: string[]) => any = a => a.join(',')): any {
    if (this._expanded) {
      params.expanded = true;
    }
    if (this._affectedByMutation) {
      params.mutationStyle = this._affectedByMutation;
    }
    if (this._groupBySpecies) {
      params.groupBySpecies = this._groupBySpecies;
    }
    if (this._layoutName !== 'fcose') {
      params.layout = this._layoutName;
    }
    return params;
  }

  get viewer(): GraphPort {
    return this._viewer;
  }

  set viewer(value: GraphPort) {
    this._viewer = value;
  }

  get expanded(): boolean {
    return this._expanded;
  }

  setExpanded(value: boolean, update = true) {
    this._expanded = value;
    if (update) {
      this._mustQuery = false;
      this.updatesSubject.next();
      this.viewer.expandEdges(this.expanded, this.affectedByMutation)
    }
  }

  get affectedByMutation(): boolean {
    return this._affectedByMutation;
  }

  setAffectedByMutation(value: boolean, update = true) {
    this._affectedByMutation = value;
    if (update) {
      this._mustQuery = false;
      this.updatesSubject.next();
      this.viewer.expandEdges(this.expanded, this.affectedByMutation)
    }
  }

  get groupBySpecies(): boolean {
    return this._groupBySpecies;
  }

  setGroupBySpecies(value: boolean, update = true) {
    this._groupBySpecies = value;
    this._mustQuery = true;
    if (update) {
      this.updatesSubject.next();
    }
  }

  get layoutName(): string {
    return this._layoutName;
  }

  setLayoutName(value: string, update = true) {
    this._layoutName = value;
    if (update) {
      this._mustQuery = false;
      this.updatesSubject.next();
      this.viewer.applyLayout(value);
    }
  }

  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
  }

  get mustQuery(): boolean {
    return this._mustQuery;
  }

  set mustQuery(value: boolean) {
    this._mustQuery = value;
  }

  get error(): HttpErrorResponse {
    return this._error;
  }

  set error(value: HttpErrorResponse) {
    this._error = value;
  }
}
