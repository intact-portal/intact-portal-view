import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewEncapsulation} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {InteractionsDetailsService} from '../../shared/service/interactions-details.service';

import '../../../../assets/js/rgbcolor.js';
import {ProgressBarComponent} from "../../../layout/loading-indicators/progress-bar/progress-bar.component";
import * as complexviewer from 'complexviewer';
import {InteractionParticipantsService} from "../shared/service/interaction-participants.service";
import {Participant} from "../shared/model/participant.model";
import {Subscription} from "rxjs";

declare const require: any;
declare const $: any;
export var viewer: any;


@Component({
  selector: 'ip-details-viewer',
  templateUrl: './details-viewer.component.html',
  styleUrls: ['./details-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsViewerComponent implements AfterViewInit, OnDestroy {
  @Input() interactionAc: string;

  @Input() featureAc: string;
  @Output() error: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();
  private _interactionData: any;

  private SMALL_MOL = require('../../../../assets/images/detailsViewer/svgForKey/smallMol.svg');
  private GENE = require('../../../../assets/images/detailsViewer/svgForKey/gene.svg');
  private DNA = require('../../../../assets/images/detailsViewer/svgForKey/DNA.svg');
  private RNA = require('../../../../assets/images/detailsViewer/svgForKey/RNA.svg');
  private COMPLEX = require('../../../../assets/images/detailsViewer/svgForKey/RNA.svg');
  private PROTEIN_BLOB = require('../../../../assets/images/detailsViewer/svgForKey/proteinBlob.svg');
  private PROTEIN_BAR = require('../../../../assets/images/detailsViewer/svgForKey/proteinBar.svg');
  private _annotationSelected: string = 'MI Features';

  private _colorLegendGroups: { name: string, legends: ColorLegend[] }[] = [];
  private proteinUpdateSubscription: Subscription;
  private notifyViewerOfUpdates = true;

  constructor(private interactionsDetailsService: InteractionsDetailsService, private participantsService: InteractionParticipantsService) {
  }


  ngAfterViewInit() {
    this.requestInteractionViewerDetails();
    $('ip-interactions-viewer').foundation();
  }

  ngOnDestroy(): void {
    this.proteinUpdateSubscription.unsubscribe();
  }

  private requestInteractionViewerDetails() {
    this.interactionsDetailsService.getInteractionViewer(this.interactionAc)
      .subscribe(data => {
          this.interactionData = data;
          ProgressBarComponent.hide();

          if (this.interactionData !== undefined) {
            viewer = new complexviewer.App(document.getElementById('interaction-viewer-container'));
            viewer.readMIJSON(this.interactionData, true);
            viewer.autoLayout();
            this.expandAll();
            this.participantsService.initParticipants(viewer.getExpandedParticipants())
            this.updateColorLegend(viewer.getColorKeyJson())

            viewer.addExpandListener((expandedParticipants: Participant[]) => {
              this.notifyViewerOfUpdates = false;
              this.participantsService.updateProteinsStatus(expandedParticipants)
              this.notifyViewerOfUpdates = true;
            })

            this.proteinUpdateSubscription = this.participantsService.proteinSetsUpdated.subscribe(update => {
              if (this.notifyViewerOfUpdates) {
                viewer.expandAndCollapseSelection(update.expanded.map(protein => protein.identifier.id));
              }
            })
          }
        },
        (err: HttpErrorResponse) => {
          this.error.emit(err);
        }
      );
  }

  expandAll(): void {
    viewer.expandAll();
    this.participantsService.expandAllProteins();
  }

  collapseAll(): void {
    viewer.collapseAll();
    this.participantsService.collapseAllProteins();
  }

  changeAnnotations(event): void {
    viewer.showAnnotations(this.annotationSelected, false);
    this.annotationSelected = event.target.value;
    if (this.annotationSelected !== 'None') {
      this.updateColorLegend(viewer.showAnnotations(this.annotationSelected, true));
    }
  }

  private updateColorLegend(legendData: { [p: string]: ColorLegend[] }) {
    this._colorLegendGroups = []
    for (let group of Object.keys(legendData)) {
      if (group === 'Complex') {
        this._colorLegendGroups.push({
          name: 'Interaction', legends: legendData[group].map(legend => {
            legend.name = legend.name.replace('intact_', '');
            return legend;
          })
        })
      } else {
        if (legendData[group].length > 0) {
          this._colorLegendGroups.push({
            name: group, legends: legendData[group]
          })
        }
      }
    }
  }

  get interactionData(): any {
    return this._interactionData;
  }

  set interactionData(value: any) {
    this._interactionData = value;
  }

  get annotationSelected(): string {
    return this._annotationSelected;
  }

  set annotationSelected(value: string) {
    this._annotationSelected = value;
  }

  get colorLegendGroups(): { name: string; legends: ColorLegend[] }[] {
    return this._colorLegendGroups;
  }
}

class ColorLegend {
  constructor(public name: string, public color: string) {
  }
}
