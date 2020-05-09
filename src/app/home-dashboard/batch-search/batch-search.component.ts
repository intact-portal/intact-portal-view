import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {environment} from '../../../environments/environment';
import {SearchService} from '../search/service/search.service';

declare const $: any;
const baseURL = environment.intact_portal_ws;

@Component({
  selector: 'iv-batch-search',
  templateUrl: './batch-search.component.html',
  styleUrls: ['./batch-search.component.css']
})
export class BatchSearchComponent implements OnInit, AfterViewInit {

  uploader: FileUploader;
  hasBaseDropZoneOver: boolean;
  response: any;

  constructor(private searchService: SearchService) {
    this.uploader = new FileUploader({
      url: `${baseURL}/interaction/uploadFile/`,
      disableMultipart: false
    });

    this.hasBaseDropZoneOver = false;
    this.response = '';
    this.uploader.response.subscribe(res => this.response = res);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('iv-batch-search').foundation();
  }

  private batchSearch(fileName: string, typeOfButton: string) {
    this.searchService.batchSearch(fileName);
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileSelected() {
    console.log('FileSelected');
  }
}
