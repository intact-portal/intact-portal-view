import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NetworkSearchService} from '../../shared/service/network-search.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ProgressBarComponent} from "../../../layout/loading-indicators/progress-bar/progress-bar.component";
import {NetworkViewService} from "../../shared/service/network-view.service";
import {SearchService} from "../../../home-dashboard/search/service/search.service";
import {NetworkLegend} from "../../shared/model/interaction-legend/network-legend";

declare const require: any;
declare const $: any;
const IntactGraph = require('expose-loader?IntactGraph!intact-network');


@Component({
  selector: 'ip-interactions-viewer',
  templateUrl: './interactions-viewer.component.html',
  styleUrls: ['./interactions-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InteractionsViewerComponent implements OnInit {

  private _query: string;
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
  private _expanded: boolean = true;
  private _affectedByMutation: boolean;
  private _compoundGraph = false;
  private _hasMutation = false;
  private _layoutName = 'fcose';
  legend: NetworkLegend;

  @Input() interactorSelected: string;
  @Input() interactionSelected: string;

  private _interactionsJSON: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private networkSearchService: NetworkSearchService,
              public viewService: NetworkViewService,
              private search: SearchService) {

  }

  ngOnInit(): void {
    $('ip-interactions-viewer').foundation();
    this.graph = new IntactGraph.GraphPort('for-canvas-graph', 'legend', 'nodeL');

    this.route.queryParams
      .subscribe(params => {
        this.query = params.query? params.query: this.search.query;
        this.batchSearchFilter = params.batchSearch ? params.batchSearch : this.search.isBatchSearch;
        this.interactorSpeciesFilter = params.interactorSpecies ? params.interactorSpecies.split('+') : [];
        this.interactorTypeFilter = params.interactorType ? params.interactorType.split('+') : [];
        this.interactionTypeFilter = params.interactionType ? params.interactionType.split('+') : [];
        this.interactionDetectionMethodFilter = params.interactionDetectionMethod ? params.interactionDetectionMethod.split('+') : [];
        this.interactionHostOrganismFilter = params.interactionHostOrganism ? params.interactionHostOrganism.split('+') : [];
        this.negativeFilter = params.negativeInteraction ? params.negativeInteraction : false;
        this.miScoreMax = params.miScoreMax ? params.miScoreMax : 1;
        this.miScoreMin = params.miScoreMin ? params.miScoreMin : 0;
        this.intraSpeciesFilter = params.intraSpecies ? params.intraSpecies : false;

        this.requestIntactNetworkDetails();
      });
    this.toggleNetworkViewer(true);
  }

  private loadViewState() {
    this.expanded = this.viewService.expanded;
    this.affectedByMutation = this.viewService.affectedByMutation;
  }

  toggleNetworkViewer(visible: boolean): void {
    if (visible) {
      $('#network-viewer-container').show();
      $('#no-network-viewer').hide();
    } else {
      $('#network-viewer-container').hide();
      $('#no-network-viewer').show();
      ProgressBarComponent.hideWithoutDelay();
    }
  }

  private requestIntactNetworkDetails() {
    this.networkSearchService.getInteractionNetwork(
      this.query,
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
    ).subscribe(json => {
      this.interactionsJSON = json;
      this.legend = json.legend;
      this.loadViewState();
      this._hasMutation = json.legend.edge_legend.mutation_color.true !== undefined;
      // Makes the network expanded expanded by default
      this.graph.initializeWithData(this.interactionsJSON, true, this.affectedByMutation, this.layoutName);
      this.graph.expandEdges(this.expanded, this.affectedByMutation);
      this.toggleNetworkViewer(true);
    }, () => {
      this.toggleNetworkViewer(false);
    })
  }

  onChangeLayout(value) {
    this.layoutName = value;
    this.graph.applyLayout(value);
  }

  onChangeExpand(expandCheckBoxValue, affectedByMutationCheckBox) {
    if (!expandCheckBoxValue) {
      affectedByMutationCheckBox.checked = false;
      this.viewService.affectedByMutation = false;
    }
    this.expanded = expandCheckBoxValue;
    this.viewService.expanded = expandCheckBoxValue;
    this.graph.expandEdges(expandCheckBoxValue, false);
  }

  onChangeAffectedByMutation(affectedByMutationCheckBoxValue, expandCheckBox) {
    if (affectedByMutationCheckBoxValue) {
      expandCheckBox.checked = true;
      this.viewService.expanded = true;
    }
    this.affectedByMutation = affectedByMutationCheckBoxValue;
    this.viewService.affectedByMutation = affectedByMutationCheckBoxValue;
    this.graph.expandEdges(true, affectedByMutationCheckBoxValue);
  }

  onChangeGroupBy(groupByValue: boolean) {
    this.compoundGraph = groupByValue;
    this.viewService.groupBySpecies = groupByValue;
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

  get query(): string {
    return this._query;
  }

  set query(value: string) {
    this._query = value;
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

  get hasMutation(): boolean {
    return this._hasMutation;
  }
}
