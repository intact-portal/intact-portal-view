import {Injectable} from '@angular/core';
import {ParamMap} from "@angular/router";
import {GraphPort} from "../../../../../../intact-network-viewer/src/network_viewer_entry";
import {Subject} from "rxjs";

@Injectable()
export class NetworkViewService {

  private _viewer: GraphPort;
  private _expanded: boolean = true;
  private _affectedByMutation: boolean = false;
  private _groupBySpecies: boolean = false;
  private _layoutName: string = 'fcose';
  private _mustQuery: boolean = true;

  private updatesSubject: Subject<void> = new Subject<void>();
  public updates = this.updatesSubject.asObservable();

  constructor() {
  }

  fromParams(paramMap: ParamMap): void {
    this._expanded = paramMap.get('collapsed') !== 'true';
    this._affectedByMutation = paramMap.get('mutationStyle') === 'true';
    this._groupBySpecies = paramMap.get('groupBySpecies') === 'true';
    this._layoutName = paramMap.has('layout') ? paramMap.get('layout') : 'fcose';
  }

  toParams(params: any = {}, arrayHandler: (array: string[]) => any = a => a.join(',')): any {
    if (!this._expanded) params.collapsed = true;
    if (this._affectedByMutation) params.mutationStyle = this._affectedByMutation;
    if (this._groupBySpecies) params.groupBySpecies = this._groupBySpecies;
    if (this._layoutName !== 'fcose') params.layout = this._layoutName;
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
    this._mustQuery = false;
    if (update) {
      this.updatesSubject.next();
      this.viewer.expandEdges(this.expanded, this.affectedByMutation)
    }
  }

  get affectedByMutation(): boolean {
    return this._affectedByMutation;
  }

  setAffectedByMutation(value: boolean, update = true) {
    this._affectedByMutation = value;
    this._mustQuery = false;
    if (update) {
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
    if (update) this.updatesSubject.next();
  }

  get layoutName(): string {
    return this._layoutName;
  }

  setLayoutName(value: string, update = true) {
    this._layoutName = value;
    this._mustQuery = false;
    if (update) {
      this.updatesSubject.next();
      this.viewer.applyLayout(value);
    }
  }

  get mustQuery(): boolean {
    return this._mustQuery;
  }


  set mustQuery(value: boolean) {
    this._mustQuery = value;
  }
}
