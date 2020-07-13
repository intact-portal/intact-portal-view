import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {NetworkSearchService} from '../../shared/service/network-search.service';
import {ActivatedRoute, Router} from '@angular/router';

declare const require: any;
declare const $: any;
const IntactGraph = require('expose-loader?IntactGraph!intact-network');


@Component({
  selector: 'ip-interactions-viewer',
  templateUrl: './interactions-viewer.component.html',
  styleUrls: ['./interactions-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InteractionsViewerComponent implements OnInit, OnChanges {

  private _terms: string;
  private _batchSearchFilter: boolean;
  private _interactorSpeciesFilter: string[];
  private _interactorTypeFilter: string[];
  private _detectionMethodFilter: string[];
  private _interactionTypeFilter: string[];
  private _hostOrganismFilter: string[];
  private _negativeFilter: boolean;
  private _miScoreMin: any;
  private _miScoreMax: any;
  private _intraSpeciesFilter: boolean;
  private _graph: any;
  private _expanded: boolean;
  private _affectedByMutation: boolean;
  private _compoundGraph = false;
  private _layoutName = 'fcose';

  @Input() interactorSelected: string;
  @Input() interactionSelected: string;

  private _interactionsJSON: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private networkSearchService: NetworkSearchService) {

  }

  ngOnInit(): void {
    $('ip-interactions-viewer').foundation();
    this.graph = new IntactGraph.GraphPort('for-canvas-graph', 'legend', 'nodeL');

    this.route.queryParams
      .filter(params => params.query)
      .subscribe(params => {
        this.terms = params.query;
        this.batchSearchFilter = params.batchSearch ? params.batchSearch : false;
        this.interactorTypeFilter = params.interactorType ? params.interactorType.split('+') : [];
        this.interactorSpeciesFilter = params.interactorSpecies ? params.interactorSpecies.split('+') : [];
        this.interactionDetectionMethodFilter = params.interactionDetectionMethod ? params.interactionDetectionMethod.split('+') : [];
        this.interactionTypeFilter = params.interactionType ? params.interactionType.split('+') : [];
        this.interactionHostOrganismFilter = params.interactionHostOrganism ? params.interactionHostOrganism.split('+') : [];
        this.negativeFilter = params.negativeInteraction ? params.negativeInteraction : false;
        this.miScoreMax = params.miScoreMax ? params.miScoreMax : 1;
        this.miScoreMin = params.miScoreMin ? params.miScoreMin : 0;
        // this.interactorSelected = params.interactorSelected ? params.interactorSelected.split('+') : [];
        // this.interactionSelected = params.interactionSelected ? params.interactionSelected : '';
        this.intraSpeciesFilter = params.intraSpecies ? params.intraSpecies : false;

        this.requestIntactNetworkDetails();
      });

    // this.requestIntactNetworkDetails() will give us a visible param to show or hide the network viewer
    // We need to capture the exact error status To Check
    if (this.interactionsJSON === 403) {
      this.toggleNetworkViewer(false);
    } else {
      this.toggleNetworkViewer(true);
    }
  }

  ngOnChanges(changes: SimpleChanges) {

    const chng = changes['interactionSelected'];
    const cur = JSON.stringify(chng.currentValue);

    console.log('cur' + cur);
  }

  toggleNetworkViewer(visible: boolean): void {
    if (visible) {
      $('#network-viewer-container').show();
      $('#no-network-viewer').hide();
    } else {
      $('#network-viewer-container').hide();
      $('#no-network-viewer').show();
    }
  }
  findInteractor() {
    // IntactGraph.findInteractor()
  }

  private requestIntactNetworkDetails() {
    this.networkSearchService.getInteractionNetwork(
      this.terms,
      this.batchSearchFilter,
      this.interactorSpeciesFilter,
      this.interactorTypeFilter,
      this.interactionDetectionMethodFilter,
      this.interactionTypeFilter,
      this.interactionHostOrganismFilter,
      this.negativeFilter,
      this.miScoreMin,
      this.miScoreMax,
      this.intraSpeciesFilter,
      this.compoundGraph
    ).subscribe(data => {
      this.interactionsJSON = data;
      console.log('Data loaded');
      // Makes the network expanded expanded by default
      this.graph.initializeWithData(this.interactionsJSON, true, this.affectedByMutation, this.layoutName);
    })
  }

  onChangeLayout(value) {
    this.layoutName = value;
    this.graph.applyLayout(value);
  }

  onChangeExpand(expandCheckBoxValue, affectedByMutationCheckBox) {
    if (!expandCheckBoxValue) {
      affectedByMutationCheckBox.checked = false;
    }
    this.expanded = expandCheckBoxValue;
    this.graph.expandEdges(expandCheckBoxValue, false);
  }

  onChangeAffectedByMutation(affectedByMutationCheckBoxValue, expandCheckBox) {
    expandCheckBox.checked = true;
    this.affectedByMutation = affectedByMutationCheckBoxValue;
    this.graph.expandEdges(true, affectedByMutationCheckBoxValue);
  }

  onChangeGroupBy(groupByValue: boolean) {
    this.compoundGraph = groupByValue;
    this.requestIntactNetworkDetails();
  }

  onClickDownloadGraph(downloadFileType: string) {
    this.graph.exportAs(downloadFileType);
  }

  onClickReset() {
    this.graph.reset();
  }

  onClickSearch(interactorName: string) {
    this.graph.search(interactorName);
  }

  get terms(): string {
    return this._terms;
  }

  set terms(value: string) {
    this._terms = value;
  }

  get batchSearchFilter(): boolean {
    return this._batchSearchFilter;
  }

  set batchSearchFilter(value: boolean) {
    this._batchSearchFilter = value;
  }

  get interactorSpeciesFilter(): string[] {
    return this._interactorSpeciesFilter;
  }

  set interactorSpeciesFilter(value: string[]) {
    this._interactorSpeciesFilter = value;
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

  get interactionDetectionMethodFilter(): string[] {
    return this._detectionMethodFilter;
  }

  set interactionDetectionMethodFilter(value: string[]) {
    this._detectionMethodFilter = value;
  }

  get interactionHostOrganismFilter(): string[] {
    return this._hostOrganismFilter;
  }

  set interactionHostOrganismFilter(value: string[]) {
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

  get intraSpeciesFilter(): boolean {
    return this._intraSpeciesFilter;
  }

  set intraSpeciesFilter(value: boolean) {
    this._intraSpeciesFilter = value;
  }

  get interactionsJSON(): any {
    return this._interactionsJSON;
  }

  set interactionsJSON(value: any) {
    this._interactionsJSON = value;
  }

  get graph(): any {
    return this._graph;
  }

  set graph(value: any) {
    this._graph = value;
  }

  get expanded(): any {
    return this._expanded;
  }

  set expanded(value: any) {
    this._expanded = value;
  }

  get affectedByMutation(): boolean {
    return this._affectedByMutation;
  }

  set affectedByMutation(value: boolean) {
    this._affectedByMutation = value;
  }

  get compoundGraph(): boolean {
    return this._compoundGraph;
  }

  set compoundGraph(value: boolean) {
    this._compoundGraph = value;
  }

  get layoutName(): string {
    return this._layoutName;
  }

  set layoutName(value: string) {
    this._layoutName = value;
  }
}
