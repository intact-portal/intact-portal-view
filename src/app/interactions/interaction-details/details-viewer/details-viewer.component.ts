import {AfterViewInit, Component, Input, ViewEncapsulation} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {InteractionsDetailsService} from '../../shared/service/interactions-details.service';

declare const require: any;
declare const $: any;
const xiNET = require('expose-loader?xiNET!complexviewer');
let xlv: any;


@Component({
  selector: 'iv-details-viewer',
  templateUrl: './details-viewer.component.html',
  styleUrls: ['./details-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsViewerComponent implements AfterViewInit {

  @Input() interactionAc: string;
  @Input() featureAc: string;

  private _interactionData: any;
  private SMALL_MOL = require('../../../../assets/images/detailsViewer/svgForKey/smallMol.svg');
  private GENE = require('../../../../assets/images/detailsViewer/svgForKey/gene.svg');
  private DNA = require('../../../../assets/images/detailsViewer/svgForKey/DNA.svg');
  private RNA = require('../../../../assets/images/detailsViewer/svgForKey/RNA.svg');
  private PROTEIN_BLOB = require('../../../../assets/images/detailsViewer/svgForKey/proteinBlob.svg');
  private PROTEIN_BAR = require('../../../../assets/images/detailsViewer/svgForKey/proteinBar.svg');


  constructor(private interactionsDetailsService: InteractionsDetailsService) { }

  ngAfterViewInit() {
    this.requestInteractionViewerDetails();
  }

  private requestInteractionViewerDetails() {
    this.interactionsDetailsService.getInteractionViewer(this.interactionAc)
      .subscribe(data => {
        this.interactionData = data;

        if (this.interactionData !== undefined) {
          $('iv-interactions-viewer').foundation();
          xlv = new xiNET('graphViewerContainer');
          xlv.readMIJSON(this.interactionData, true);
          xlv.autoLayout();
        }
      },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        })
  }

  expandAll(): void {
    xlv.expandAll();
  }

  collapseAll(): void {
    xlv.collapseAll();
  }

  changeAnnotations(event): void {
    // const annotationSelected = $(document).getElementById('annotationsSelect').value;
    const annotationSelected = event.target.value;
    console.log('Annotation selected ' + annotationSelected);
    xlv.setAnnotations(annotationSelected);

    // xlv.setAnnotations("MI features");	//show features from MI data
    // xlv.setAnnotations("UniprotKB");	//show annotations from uniprot
    // xlv.setAnnotations("SuperFamily");	//from SuperFamily
    // xlv.setAnnotations("None");			//no annotations
    // xlv.setAnnotations("Interactor");	//colour bars and circles according to interactor (may help indicate stoichiometry)
    //
  }

  get interactionData(): any {
    return this._interactionData;
  }

  set interactionData(value: any) {
    this._interactionData = value;
  }

}
