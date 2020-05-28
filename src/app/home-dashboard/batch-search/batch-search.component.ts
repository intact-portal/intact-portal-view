import {Component} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {environment} from '../../../environments/environment';
import {SearchService} from '../search/service/search.service';

declare const $: any;
const baseURL = environment.intact_portal_ws;

@Component({
  selector: 'ip-batch-search',
  templateUrl: './batch-search.component.html',
  styleUrls: ['./batch-search.component.css']
})
export class BatchSearchComponent {

  private _ids: string;

  private _uploader: FileUploader;
  private _hasBaseDropZoneOver: boolean;
  private _response: any;
  private _data: any;


  constructor(private searchService: SearchService) {
    this.uploader = new FileUploader({
      url: `${baseURL}/interaction/uploadFile/`,
      disableMultipart: false
    });

    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }

    this.hasBaseDropZoneOver = false;
    this.response = '';
    this.uploader.response.subscribe(res => this.response = res);
  }

  private batchSearch(query: string, typeOfButton: string) {
    this.searchService.batchSearch(query);
  }

  private setIds(response: string) {
    this.ids = response;
  }

  private resolveSearch() {
    this.searchService.resolveSearch(this.ids).subscribe(data => this.data = data);
  }

  private fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  private fileSelected() {
    console.log('FileSelected');
  }

  get ids(): string {
    return this._ids;
  }

  set ids(value: string) {
    this._ids = value;
  }

  get uploader(): FileUploader {
    return this._uploader;
  }

  set uploader(value: FileUploader) {
    this._uploader = value;
  }

  get hasBaseDropZoneOver(): boolean {
    return this._hasBaseDropZoneOver;
  }

  set hasBaseDropZoneOver(value: boolean) {
    this._hasBaseDropZoneOver = value;
  }

  get response(): any {
    return this._response;
  }

  set response(value: any) {
    this._response = value;
  }

  get data(): any {
    return this._data;
  }

  set data(value: any) {
    this._data = value;
  }
}
