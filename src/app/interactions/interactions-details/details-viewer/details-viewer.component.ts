import {AfterViewInit, Component, Input, ViewEncapsulation} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

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

  private _interactionsJSON: any;

  constructor(private httpService: HttpClient) { }

  ngAfterViewInit() {
    this.httpService.get('../../../assets/demo_interactions.json').subscribe(
      data => {
        this.interactionsJSON = data;

        if (this.interactionsJSON !== undefined) {
          console.log('InteractionsJson dummy is ' + this.interactionsJSON);

          $('iv-interactions-viewer').foundation();
          xlv = new xiNET('graphViewerContainer');
          xlv.readMIJSON(this.interactionsJSON, true);
          xlv.autoLayout();
        }
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  }

  get interactionsJSON(): any {
    return this._interactionsJSON;
  }

  set interactionsJSON(value: any) {
    this._interactionsJSON = value;
  }

}
