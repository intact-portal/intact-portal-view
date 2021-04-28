import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {HttpErrorResponse} from '@angular/common/http';
import {ProgressBarComponent} from '../../layout/loading-indicators/progress-bar/progress-bar.component';
import {viewer} from './details-viewer/details-viewer.component';
import {FoundationUtils} from '../../shared/utils/foundation-utils';
import {Format} from '../shared/model/download/format.model';
import {environment} from '../../../environments/environment';

const baseURL = environment.intact_portal_ws;

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
  formatTypes = Format.instances;

  constructor(private titleService: Title,
              private route: ActivatedRoute) {
  }

  downloadURL(format: Format): string {
    return `${baseURL}/graph/export/interaction/${this.interactionAc}?format=${format.name}`;
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

  exportSVG() {
    const svgXML = viewer.getSVG();
    this.download(svgXML, 'application/svg', `${this.interactionAc}.svg`);
  }

  download(content, contentType, fileName) {
    const oldToNewTypes = {
      'application/svg': 'image/svg+xml;charset=utf-8',
      'plain/text': 'plain/text;charset=utf-8',
    };
    const newContentType = oldToNewTypes[contentType] || contentType;

    function dataURItoBlob(binary) {
      let array = [];
      let te;

      try {
        // @ts-ignore
        te = new TextEncoder('utf-8');
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
          } else {
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

    let blob = dataURItoBlob(content);

    if (navigator.msSaveOrOpenBlob) {
      navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      // Give filename you wish to download
      a.download = fileName;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(a.href); // clear up url reference to blob so it can be g.c.'ed
    }

    blob = null;
  }
}
