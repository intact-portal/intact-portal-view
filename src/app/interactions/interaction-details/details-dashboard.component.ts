import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {HttpErrorResponse} from "@angular/common/http";
import {ProgressBarComponent} from "../../layout/loading-indicators/progress-bar/progress-bar.component";
import {viewer} from "./details-viewer/details-viewer.component";
import {FoundationUtils} from "../../shared/utils/foundation-utils";
import {TextEncoder} from "util";
import {saveAs} from "file-saver";
import {Download, DownloadService, DownloadState} from "../shared/service/download/download.service";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs";
import {Format} from "../shared/model/download/format.model";


@Component({
  selector: 'ip-details-dashboard',
  templateUrl: './details-dashboard.component.html',
  styleUrls: ['./details-dashboard.component.css']
})
export class DetailsDashboardComponent implements OnInit, AfterViewInit {
  private _interactionAc: string;
  @Input() featureSelected: string;
  private _error: HttpErrorResponse;
  viewer = viewer;
  formats = Format.instances;
  states = DownloadState;
  download$: Observable<Download>;

  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private downloads: DownloadService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.interactionAc = params['id'];
        this.titleService.setTitle('Interaction - ' + this.interactionAc);
      })
  }

  ngAfterViewInit(): void {
    $('#detail-export').foundation();
    FoundationUtils.adjustWidth();
  }


  public searchError(error: HttpErrorResponse) {
    this._error = error;
    ProgressBarComponent.hideWithoutDelay();
  }

  get interactionAc(): string {
    return this._interactionAc;
  }

  set interactionAc(value: string) {
    this._interactionAc = value;
  }

  public onFeatureSelectedChanged(featureAc: string): void {
    this.featureSelected = featureAc;
  }

  get error(): HttpErrorResponse {
    return this._error;
  }

  export(format: Format) {
    this.download$ = this.downloads.downloadByAc(this.interactionAc, format);
    let subscription: Subscription;
    let clear = () => {
      subscription.unsubscribe();
      this.download$ = null;
    }
    subscription = this.download$.subscribe(value => {
      if (value.state === DownloadState.DONE) clear();
    }, clear);
  }

  exportSVG() {
    const svgXML = viewer.getSVG();
    this.download(svgXML, "application/svg", `${this.interactionAc}.svg`);
  }

  download(content, contentType, fileName) {
    var oldToNewTypes = {
      "application/svg": "image/svg+xml;charset=utf-8",
      "plain/text": "plain/text;charset=utf-8",
    };
    var newContentType = oldToNewTypes[contentType] || contentType;

    function dataURItoBlob(binary) {
      var array = [];
      var te;

      try {
        // @ts-ignore
        te = new TextEncoder("utf-8");
      } catch (e) {
        te = undefined;
      }

      if (te) {
        array = te.encode(binary); // html5 encoding api way
      } else {
        // https://stackoverflow.com/a/18729931/368214
        // fixes unicode bug
        for (let i = 0; i < binary.length; i++) {
          let charcode = binary.charCodeAt(i);
          if (charcode < 0x80) array.push(charcode);
          else if (charcode < 0x800) {
            array.push(0xc0 | (charcode >> 6),
              0x80 | (charcode & 0x3f));
          } else if (charcode < 0xd800 || charcode >= 0xe000) {
            array.push(0xe0 | (charcode >> 12),
              0x80 | ((charcode >> 6) & 0x3f),
              0x80 | (charcode & 0x3f));
          }
          // surrogate pair
          else {
            i++;
            // UTF-16 encodes 0x10000-0x10FFFF by
            // subtracting 0x10000 and splitting the
            // 20 bits of 0x0-0xFFFFF into two halves
            charcode = 0x10000 + (((charcode & 0x3ff) << 10) |
              (binary.charCodeAt(i) & 0x3ff));
            array.push(0xf0 | (charcode >> 18),
              0x80 | ((charcode >> 12) & 0x3f),
              0x80 | ((charcode >> 6) & 0x3f),
              0x80 | (charcode & 0x3f));
          }
        }
      }

      return new Blob([new Uint8Array(array)], {
        type: newContentType
      });
    }

    saveAs(dataURItoBlob(content), fileName)
  }
}
