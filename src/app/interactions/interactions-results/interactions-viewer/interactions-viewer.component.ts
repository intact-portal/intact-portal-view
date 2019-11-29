import {AfterViewInit, Component, Input, ViewEncapsulation, SimpleChanges, OnChanges, OnInit} from '@angular/core';
import {NetworkSearchService} from '../../shared/service/network-search.service';
import {ActivatedRoute, Router} from '@angular/router';

declare const require: any;
declare const $: any;
const IntactGraph = require('expose-loader?IntactGraph!intact-network');


@Component({
  selector: 'iv-interactions-viewer',
  templateUrl: './interactions-viewer.component.html',
  styleUrls: ['./interactions-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InteractionsViewerComponent implements OnInit, OnChanges {

  private _term: string;
  private _speciesNameFilter: string[];
  private _interactorTypeFilter: string[];
  private _interactionTypeFilter: string[];
  private _detectionMethodFilter: string[];
  private _hostOrganismFilter: string[];
  private _negativeFilter: boolean;
  private _miScoreMin: any;
  private _miScoreMax: any;
  private _graph: any;
  private _expanded: boolean;
  private _disruptedByMutation: boolean;
  private _compoundGraph: boolean = false;
  private _layoutName: string = 'fcose';

  @Input() interactorSelected: string;
  @Input() interactionSelected: string;

  private _interactionsJSON: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private networkSearchService: NetworkSearchService) {

  }

  ngOnInit(): void {
    $('iv-interactions-viewer').foundation();
    this._graph= new IntactGraph.GraphPort('for-canvas-graph','legend','nodeL');

    this.route.queryParams
      .filter(params => params.query)
      .subscribe(params => {
        this.term = params.query;
        this.interactorTypeFilter = params.interactorType ? params.interactorType.split('+') : [];
        this.speciesNameFilter = params.species ? params.species.split('+') : [];
        this.hostOrganismFilter = params.hostOrganism ? params.hostOrganism.split('+') : [];
        this.interactionTypeFilter = params.interactionType ? params.interactionType.split('+') : [];
        this.detectionMethodFilter = params.detectionMethod ? params.detectionMethod.split('+') : [];
        this.negativeFilter = params.negativeInteraction ? params.negativeInteraction : false;
        this.miScoreMax = params.miScoreMax ? params.miScoreMax : 1;
        this.miScoreMin = params.miScoreMin ? params.miScoreMin : 0;
        // this.interactorSelected = params.interactorSelected ? params.interactorSelected.split('+') : [];
        // this.interactionSelected = params.interactionSelected ? params.interactionSelected : '';

        this.requestIntactNetworkDetails();
      });
  }

  ngOnChanges(changes: SimpleChanges) {

    /*const chng = changes['interactionSelected'];
    const cur = JSON.stringify(chng.currentValue);

    if (cur !== undefined) {
      IntactGraph.filterAndHighlight(cur, 'interactions') ;
    } else {
      IntactGraph.filterAndHighlight([], 'interactions') ;
    }*/
  }

  findInteractor() {
    //IntactGraph.findInteractor()
  }

  private requestIntactNetworkDetails() {
    this.networkSearchService.getInteractionNetwork(
      this.term,
      this.hostOrganismFilter,
      this.interactorTypeFilter,
      this.speciesNameFilter,
      this.interactionTypeFilter,
      this.detectionMethodFilter,
      this.miScoreMin,
      this.miScoreMax,
      this.negativeFilter,
      this.compoundGraph
    ).subscribe(data => {
      this.interactionsJSON = data;
      console.log('Data loaded');
      this._graph.initializeWithData(this.interactionsJSON, this.expanded,this.disruptedByMutation,this.layoutName);
    })
  }

  onChangeLayout(value){
    this.layoutName=value;
    this._graph.applyLayout(value);
  }

  onChangeExpand(expandCheckBoxValue,disruptedByMutationCheckBox){
    if(!expandCheckBoxValue){
      disruptedByMutationCheckBox.checked = false;
    }
    this.expanded = expandCheckBoxValue;
    this._graph.expandEdges(expandCheckBoxValue,false);
  }

  onChangeDisruptedByMutation(disruptedByMutationCheckBoxValue,expandCheckBox){
    expandCheckBox.checked = true;
    this.disruptedByMutation=disruptedByMutationCheckBoxValue;
    this._graph.expandEdges(true,disruptedByMutationCheckBoxValue);
  }

  onClickDownloadGraph(downloadFileType:string){
    this._graph.exportAs(downloadFileType);
  }

  onClickReset(){
    this._graph.reset();
  }

  onChangeGroupBy(groupByValue:boolean){
    this.compoundGraph=groupByValue;
    this.requestIntactNetworkDetails();
  }

  get term(): string {
    return this._term;
  }

  set term(value: string) {
    this._term = value;
  }

  get speciesNameFilter(): string[] {
    return this._speciesNameFilter;
  }

  set speciesNameFilter(value: string[]) {
    this._speciesNameFilter = value;
  }

  get interactorTypeFilter(): string[] {
    return this._interactorTypeFilter;
  }

  set interactorTypeFilter(value: string[]) {
    this._interactorTypeFilter = value;
  }

  get interactionTypeFilter(): string[] {
    return this._interactionTypeFilter;
  }

  set interactionTypeFilter(value: string[]) {
    this._interactionTypeFilter = value;
  }

  get detectionMethodFilter(): string[] {
    return this._detectionMethodFilter;
  }

  set detectionMethodFilter(value: string[]) {
    this._detectionMethodFilter = value;
  }

  get hostOrganismFilter(): string[] {
    return this._hostOrganismFilter;
  }

  set hostOrganismFilter(value: string[]) {
    this._hostOrganismFilter = value;
  }

  get negativeFilter(): boolean {
    return this._negativeFilter;
  }

  set negativeFilter(value: boolean) {
    this._negativeFilter = value;
  }

  get miScoreMin(): any {
    return this._miScoreMin;
  }

  set miScoreMin(value: any) {
    this._miScoreMin = value;
  }

  get miScoreMax(): any {
    return this._miScoreMax;
  }

  set miScoreMax(value: any) {
    this._miScoreMax = value;
  }

  get interactionsJSON(): any {
    return this._interactionsJSON;
  }

  set interactionsJSON(value: any) {
    this._interactionsJSON = value;
  }

  get graph():any{
    return this._graph;
  }

  set graph(value:any){
    this._graph=value;
  }

  get expanded():boolean{
    return this._expanded;
  }

  set expanded(value:boolean){
    this._expanded=value;
  }

  get disruptedByMutation():boolean{
    return this._disruptedByMutation;
  }

  set disruptedByMutation(value:boolean){
    this._disruptedByMutation=value;
  }

  get compoundGraph():boolean{
      return this._compoundGraph;
      }

  set compoundGraph(value:boolean){
      this._compoundGraph=value;
      }

  get layoutName():string{
      return this._layoutName;
      }

  set layoutName(value:string){
      this._layoutName=value;
      }
}
