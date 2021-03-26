import {Injectable} from '@angular/core';
import {ResultTable} from "../model/interactions-results/result-table-interface";
import {ParamMap} from "@angular/router";

@Injectable()
export class NetworkSelectionService {
  constructor() {
    document.addEventListener('graph-interaction-selected', (e: any) => {
      this._binaryInteractionIds = e.detail.interactionIds();
      this._interactorAcs = []
      this.triggerDataTables();
    });
    document.addEventListener('graph-interactor-selected', (e: any) => {
      this._binaryInteractionIds = [];
      this._interactorAcs = [e.detail.interactorId()];
      this.triggerDataTables();
    });
    document.addEventListener('graph-unselected', () => {
      this._binaryInteractionIds = [];
      this._interactorAcs = []
      this.triggerDataTables();
    });
  }

  private dataTables = new Set<DataTables.Api>();
  private resultTables: ResultTable[] = [];
  private _binaryInteractionIds: number[] = [];
  private _interactorAcs: string[] = [];

  registerSelectionListener(dataTable, resultTable: ResultTable) {
    this.dataTables.add(dataTable);
    this.resultTables.push(resultTable)
  }

  private triggerDataTables() {
    this.dataTables.forEach(dataTable => dataTable.ajax.reload());
    this.resultTables.forEach(resultTable => resultTable.clearTableSelection());
  }

  get interactorAcs(): string[] {
    return this._interactorAcs;
  }

  get binaryInteractionIds(): number[] {
    return this._binaryInteractionIds;
  }

  fromParams(paramMap: ParamMap) {
    this._interactorAcs = paramMap.has('interactorAcs') ? paramMap.get('interactorAcs').split(',') : [];
    this._binaryInteractionIds = paramMap.has('binaryInteractionIds') ? paramMap.get('binaryInteractionIds').split(',').map(Number.parseInt) : [];
  }

  toParams(params: any = {}, arrayHandler: (array: any[]) => any = array => array.join(',')) {
    if (this.interactorAcs.length > 0) params.interactorAcs = arrayHandler(this.interactorAcs);
    if (this.binaryInteractionIds.length > 0) params.binaryInteractionIds = arrayHandler(this.binaryInteractionIds);
    return params;
  }
}
