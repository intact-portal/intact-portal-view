import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {InteractionsDetailsService} from '../../shared/service/interactions-details.service';

import '../../../../assets/js/rgbcolor.js';
import {ProgressBarComponent} from "../../../layout/loading-indicators/progress-bar/progress-bar.component";
import * as complexviewer from 'complexviewer';

declare const require: any;
declare const $: any;
export var viewer: any;


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
      viewer.expandAndCollapseSelection(cur);
    }
  }

  private requestInteractionViewerDetails() {
    this.interactionsDetailsService.getInteractionViewer(this.interactionAc)
      .subscribe(data => {
          this.interactionData = data;
          ProgressBarComponent.hide();

          if (this.interactionData !== undefined) {
            viewer = new complexviewer.App(document.getElementById('interaction-viewer-container'));
            viewer.readMIJSON(this.interactionData, true);
            console.log(data);
            viewer.autoLayout();
            this.legendColours();
            //TODO Replace by proper implementation with complexviewer
            // $('#colours').on('DOMSubtreeModified', this.adjustLegend);
            this.viewerActionsToTable();
          }
        },
        (err: HttpErrorResponse) => {
          this.error.emit(err);
        }
      );
  }

  expandAll(): void {
    viewer.expandAll();
  }

  collapseAll(): void {
    viewer.collapseAll();
  }

  changeAnnotations(event): void {
    viewer.showAnnotations(this.annotationSelected, false);
    this.annotationSelected = event.target.value;
    if (this.annotationSelected !== 'None') {
      viewer.showAnnotations(this.annotationSelected, true);
    }
    // this.adjustLegend();
  }

  selectedMolecule;

  private legendColours(): void {
    console.log(viewer.getFeatureColors());
    viewer.addColorSchemeKey(document.getElementById('colours'));
    console.log(this.interactionData);
    for (let elt of this.interactionData) {
    }
  }

  private adjustLegend(): void {
    let interactionLegend = $('table.color-key').first();
    let thead = interactionLegend.children('thead');
    if (thead.text() !== 'Interaction') {
      thead.text('Interaction')
      interactionLegend.find('td').last().text(function () {
        return $(this).text().replace('intact_', '')
      })
    }
  }

  private viewerActionsToTable() {
    //TODO Replace by proper listener implementation in complexviewer
    viewer.addHoverListener((e: string[]) => {
      if (e.length > 0) {
        this.selectedMolecule = e[0].split('_').slice(1).join('_');
      }
    });

    $(document).on('click', '.collapse', () => $(`#${this.selectedMolecule}:checkbox`).prop('checked', false))

    var dragging = 0;

    function isDragging() {
      return dragging = 1;
    }

    $('#proteinUpper rect').mousedown(() => $(document).on('mousemove', '#proteinUpper rect', isDragging));

    $(document).on('click', '#proteinUpper rect', (e) => {
      if (dragging === 0) {
        let moleculeTableSelector = $(`#${this.selectedMolecule}:checkbox`);
        if (!moleculeTableSelector.prop('checked')) {
          moleculeTableSelector.prop('checked', true);
        }
      }
      dragging = 0;
      $(document).off('mousemove', '#proteinUpper rect', isDragging);
    })
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
