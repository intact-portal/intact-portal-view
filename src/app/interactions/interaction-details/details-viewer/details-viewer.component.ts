import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {InteractionsDetailsService} from '../../shared/service/interactions-details.service';

import '../../../../assets/js/rgbcolor.js';
import {ProgressBarComponent} from "../../../layout/loading-indicators/progress-bar/progress-bar.component";

declare const RGBColor: any;

declare const require: any;
declare const $: any;
const xiNET = require('expose-loader?xiNET!complexviewer');
let xlv: any;


@Component({
  selector: 'ip-details-viewer',
  templateUrl: './details-viewer.component.html',
  styleUrls: ['./details-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsViewerComponent implements AfterViewInit, OnChanges {

  @Input() interactionAc: string;
  @Input() featureAc: string;
  @Input() expandedParticipantAc: string[];

  private _interactionData: any;
  private SMALL_MOL = require('../../../../assets/images/detailsViewer/svgForKey/smallMol.svg');
  private GENE = require('../../../../assets/images/detailsViewer/svgForKey/gene.svg');
  private DNA = require('../../../../assets/images/detailsViewer/svgForKey/DNA.svg');
  private RNA = require('../../../../assets/images/detailsViewer/svgForKey/RNA.svg');
  private COMPLEX = require('../../../../assets/images/detailsViewer/svgForKey/RNA.svg');
  private PROTEIN_BLOB = require('../../../../assets/images/detailsViewer/svgForKey/proteinBlob.svg');
  private PROTEIN_BAR = require('../../../../assets/images/detailsViewer/svgForKey/proteinBar.svg');

  private _annotationSelected: string;

  constructor(private interactionsDetailsService: InteractionsDetailsService) {
  }

  ngAfterViewInit() {
    this.requestInteractionViewerDetails();
    $('ip-interactions-viewer').foundation();
  }

  ngOnChanges(changes: SimpleChanges) {
    const chng = changes['expandedParticipantAc'];
    const cur = JSON.stringify(chng.currentValue);

    if (cur !== undefined) {
      xlv.expandAndCollapseSelection(cur);
    }
  }

  private requestInteractionViewerDetails() {
    this.interactionsDetailsService.getInteractionViewer(this.interactionAc)
      .subscribe(data => {
          this.interactionData = data;
          ProgressBarComponent.hide();

          if (this.interactionData !== undefined) {
            xlv = new xiNET('interaction-viewer-container');
            xlv.readMIJSON(this.interactionData, true);
            xlv.autoLayout();

            // Initialise the legend colours for the features by default MI features
            this.legendColours();
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      );
  }

  expandAll(): void {
    xlv.expandAll();
  }

  collapseAll(): void {
    xlv.collapseAll();
  }

  changeAnnotations(event): void {
    this.annotationSelected = event.target.value;
    xlv.setAnnotations(this.annotationSelected);
  }

  private legendColours(): void {
    xlv.legendCallbacks.push(function (colourAssignment) {

      const coloursKeyDiv = document.getElementById('colours');

      if (colourAssignment) {
        // TODO: Replace this (ugly code) for more readable code, copy and paste from the complexviewer for the SAB.
        // TODO: Add the html in the template html and process in the ts the values as we use to do for the rest of the app.
        let table = `<table id="colourViewer">
                       <tr>
                         <td style='width:100px;margin:10px;background:#b3e2cd; border:1px solid #82ad98;'></td>
                         <td class="legend-label">${this.interactionAc}</td>
                       </tr>`;
        const domain = colourAssignment.domain();
        const range = colourAssignment.range();

        for (let i = 0; i < domain.length; i++) {
          // make transparent version of colour
          const temp = new RGBColor(range[i % 20]);
          const trans = `rgba(${temp.r},${temp.g},${temp.b}, 0.6)`;
          table += `<tr>
                      <td style='width:75px;margin:10px;background:${trans};border:1px solid ${range[i % 20]};'></td>
                      <td class="legend-label">${domain[i]}</td>
                    </tr>`;
        }
        table += '</table>';
        coloursKeyDiv.innerHTML = table;
      }
    }.bind(this));

    // By default the annotation selected is MI Features when the page is loaded the first time
    if (this.annotationSelected === undefined) {
      xlv.setAnnotations('MI features');
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
}
