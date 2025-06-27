import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import {NetworkSearchService} from '../../shared/service/network-search.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProgressBarComponent} from '../../../layout/loading-indicators/progress-bar/progress-bar.component';
import {NetworkViewService} from '../../shared/service/network-view.service';
import {NetworkLegend} from '../../shared/model/interaction-legend/network-legend';
import {GraphPort} from 'intact-network-viewer';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {CytoscapeDesktopService} from '../../shared/service/cytoscape-desktop.service';
import {MatLegacyDialog as MatDialog} from '@angular/material/legacy-dialog';
import {CytoscapeDialogComponent} from './cytoscape-dialog.component/cytoscape-dialog.component';

@UntilDestroy()
@Component({
  selector: 'ip-interactions-viewer',
  templateUrl: './interactions-viewer.component.html',
  styleUrls: ['./interactions-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InteractionsViewerComponent implements AfterViewInit {
  private _hasMutation: boolean = false;
  private _interactionsJSON: any = {};
  legend: NetworkLegend = undefined;

  constructor(private route: ActivatedRoute,
              private networkSearchService: NetworkSearchService,
              public view: NetworkViewService,
              public cytoscape: CytoscapeDesktopService,
              private dialog: MatDialog) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      $('ip-interactions-viewer').foundation();
      this.view.viewer = new GraphPort('for-canvas-graph', 'nodeL');
      this.route.queryParamMap
        .pipe(untilDestroyed(this))
        .subscribe((paramMap: ParamMap) => {
          this.view.fromParams(paramMap);
          if (this.view.mustQuery) {
            this.requestIntactNetworkDetails()
          }
          this.view.mustQuery = true;
        });
    });
  }

  startCytoscapeCheck(): void {
    this.cytoscape.startCheck();
    const dialogRef = this.dialog.open(CytoscapeDialogComponent);
    dialogRef.afterClosed().subscribe(_ => this.cytoscape.stopCheck());
  }

  private requestIntactNetworkDetails() {
    this.view.visible = true;
    this.networkSearchService.getInteractionNetwork(this.view.groupBySpecies)
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (json) => {
          this.interactionsJSON = json;
          if (json.legend) {
            this.legend = json.legend;
            this._hasMutation = json.legend.edge_legend.mutation_color.true !== undefined;
            if (!this._hasMutation) {
              this.view.setAffectedByMutation(false, false);
            }
          }
          this.view.error = null;
          if (json.data.length > 0) {
            this.view.viewer.initializeWithData(this.interactionsJSON, this.view.expanded, this.view.affectedByMutation, this.view.layoutName);
          } else {
            this.view.visible = false;
            ProgressBarComponent.hideWithoutDelay();
          }
        },
        error: (e) => {
          this.view.visible = false;
          this.view.error = e;
          ProgressBarComponent.hideWithoutDelay();
        }
      });
  }

  onChangeLayout(event: Event, value) {
    if ((event.target as HTMLInputElement).checked) {
      this.view.setLayoutName(value);
    }
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
