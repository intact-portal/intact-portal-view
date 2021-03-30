import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NetworkSearchService} from '../../shared/service/network-search.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProgressBarComponent} from "../../../layout/loading-indicators/progress-bar/progress-bar.component";
import {NetworkViewService} from "../../shared/service/network-view.service";
import {NetworkLegend} from "../../shared/model/interaction-legend/network-legend";

declare const require: any;
const IntactGraph = require('expose-loader?IntactGraph!intact-network-viewer');


@Component({
  selector: 'ip-interactions-viewer',
  templateUrl: './interactions-viewer.component.html',
  styleUrls: ['./interactions-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InteractionsViewerComponent implements OnInit {
  private _hasMutation: boolean = false;
  private _interactionsJSON: any = {};
  legend: NetworkLegend = undefined;
  visible = true;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private networkSearchService: NetworkSearchService,
              public view: NetworkViewService) {

  }

  ngOnInit(): void {
    $('ip-interactions-viewer').foundation();
    this.view.viewer = new IntactGraph.GraphPort('for-canvas-graph', 'legend', 'nodeL');
    this.route.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.view.fromParams(paramMap);
      if (this.view.mustQuery) {
        this.requestIntactNetworkDetails();
      } else {
        this.view.mustQuery = true;
      }
    });
  }

  private requestIntactNetworkDetails() {
    this.networkSearchService.getInteractionNetwork(this.view.groupBySpecies).subscribe(json => {
      this.interactionsJSON = json;
      if (json.legend) {
        this.legend = json.legend;
        this._hasMutation = json.legend.edge_legend.mutation_color.true !== undefined;
        if (!this._hasMutation) this.view.setAffectedByMutation(false, false);
      }
      if (json.data.length > 0) {
        this.view.viewer.initializeWithData(this.interactionsJSON, this.view.expanded, this.view.affectedByMutation, this.view.layoutName);
        this.visible = true;
      } else {
        this.visible = false;
        ProgressBarComponent.hideWithoutDelay();
      }
    }, () => {
      this.visible = false;
      ProgressBarComponent.hideWithoutDelay();
    })
  }

  onChangeLayout(value) {
    this.view.setLayoutName(value);
  }

  onChangeExpand(expandCheckBoxValue, affectedByMutationCheckBox) {
    if (!expandCheckBoxValue) {
      affectedByMutationCheckBox.checked = false;
      this.view.setAffectedByMutation(false, false);
    }
    this.view.setExpanded(expandCheckBoxValue);
  }

  onChangeAffectedByMutation(affectedByMutationCheckBoxValue, expandCheckBox) {
    if (affectedByMutationCheckBoxValue) {
      expandCheckBox.checked = true;
      this.view.setExpanded(true, false);
    }
    this.view.setAffectedByMutation(affectedByMutationCheckBoxValue);
  }

  onChangeGroupBy(groupByValue: boolean) {
    this.view.setGroupBySpecies(groupByValue);
  }

  onClickDownloadGraph(downloadFileType: string) {
    this.view.viewer.exportAs(downloadFileType);
  }

  onClickReset() {
    this.view.viewer.reset();
  }

  onClickSearch(interactorName: string) {
    this.view.viewer.search(interactorName);
  }

  get interactionsJSON(): any {
    return this._interactionsJSON;
  }

  set interactionsJSON(value: any) {
    this._interactionsJSON = value;
  }

  get hasMutation(): boolean {
    return this._hasMutation;
  }

  set hasMutation(value: boolean) {
    this._hasMutation = value;
  }
}
