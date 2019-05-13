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

  get interactionData(): any {
    return this._interactionData;
  }

  set interactionData(value: any) {
    this._interactionData = value;
  }

}
