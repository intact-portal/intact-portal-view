import {Component} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {environment} from '../../../environments/environment';
import {SearchService} from '../search/service/search.service';
import {Pagination} from "../shared/pagination.model";
import {Interactor} from "../../interactions/shared/model/interactions-results/interactor/interactor.model";
import {ResolutionEntry} from "./resolution-interactor-model";

declare const $: any;
const baseURL = environment.intact_portal_ws;

@Component({
  selector: 'ip-batch-search',
  templateUrl: './batch-search.component.html',
  styleUrls: ['./batch-search.component.css']
})
export class BatchSearchComponent {
  private _query: string;

  private _uploader: FileUploader;
  private _hasBaseDropZoneOver: boolean;
  private _response: any;
  private _dataReceived: boolean = false;
  private _foundEntries: ResolutionEntry[] = [];
  private _notFoundEntries: string[] = [];

  private _entriesToComplete: Map<string, ResolutionEntry> = new Map<string, ResolutionEntry>();

  private _interactorAcs: Set<string> = new Set<string>();
  private _totalInteractorsToQuery = 0;
  private _interactorsQueried = 0;
  private _acCollectionProgress = 0;
  private _acCollectionFinished = false;

  constructor(private search: SearchService) {
    this.uploader = new FileUploader({
      url: `${baseURL}/interactor/uploadFile/`,
      disableMultipart: false
    });

    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
      this.search.title = item.file.name;
    }

    this.hasBaseDropZoneOver = false;
    this.response = '';
    this.uploader.response.subscribe(res => this.response = res);
  }

  resolveSearch() {
    this.search.resolveSearch(this.query)
      .subscribe(data => {
        this.splitData(data)
      });
  }

  splitData(data: { [term: string]: Pagination<Interactor[]> }) {
    for (let key of Object.keys(data)) {
      let entry: ResolutionEntry = data[key];
      if (entry.totalElements !== 0) {
        entry.term = key;
        entry.content.forEach(interactor => this._interactorAcs.add(interactor.interactorAc));
        if (!entry.last) this._entriesToComplete.set(key, entry);
        this._foundEntries.push(entry);
      } else {
        this._notFoundEntries.push(key);
      }
    }
    this.dataReceived = true;
  }

  batchSearch() {
    this.search.batchSearch(Array.from(this.interactorAcs.values()).join('\n'));
  }

  validateSearchBox(query: string) {
    this.search.title = query;
    this.setQuery(query)
  }

  setQuery(response: string) {
    this.query = response;
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  fileSelected() {
    console.log('FileSelected');
  }

  onInteractorSelection(event) {
    if (event.target.checked) {
      this._interactorAcs.add(event.target.value)
    } else {
      this._interactorAcs.delete(event.target.value)
    }
  }

  onCompletionSelection(event) {
    let term = event.target.value;
    if (event.target.checked) {
      let entry = this._foundEntries.find(value => value.term === term);
      this._entriesToComplete.set(term, entry);
    } else {
      this._entriesToComplete.delete(term);
    }
  }

  collectNextPagesInteractors(entriesToComplete?: ResolutionEntry[], page = 1) {
    if (page === 1) {
      entriesToComplete = Array.from(this._entriesToComplete.values());
      this._totalInteractorsToQuery = entriesToComplete.reduce((total, entry) => total + entry.totalElements - 50, 0);
    }
    let query = entriesToComplete.map(entry => entry.term).join(', ')
    this.search.resolveSearch(query, page, 50).subscribe(data => {
      let nextEntriesToComplete = [];
      for (let key of Object.keys(data)) {
        let entry: ResolutionEntry = data[key];
        entry.term = key;
        entry.content.forEach(interactor => {
          this._interactorAcs.add(interactor.interactorAc);
          this._interactorsQueried++;
          this._acCollectionProgress = (this._interactorsQueried / this._totalInteractorsToQuery) * 100;
        });
        if (!entry.last) nextEntriesToComplete.push(entry);
      }
      if (nextEntriesToComplete.length !== 0) this.collectNextPagesInteractors(nextEntriesToComplete, page + 1);
      else this._acCollectionFinished = true;
    })
  }

  resetSteps() {
    this.resetSecondStep();
    this.resetThirdStep();
  }
  resetSecondStep() {
    this._foundEntries = [];
    this._notFoundEntries = [];
    this._dataReceived = false;
    this._entriesToComplete.clear();

    this._totalInteractorsToQuery = 0;
    this._interactorsQueried = 0;
    this._acCollectionProgress = 0;
    this._acCollectionFinished = false;

    this._interactorAcs.clear();
  }

  resetThirdStep() {
    this._totalInteractorsToQuery = 0;
    this._interactorsQueried = 0;
    this._acCollectionProgress = 0;
    this._acCollectionFinished = false;

    this._interactorAcs.clear();
    $('input[name="interactor"]').each((i, input) => {
      if (input.checked) {
        this.interactorAcs.add(input.value);
      }
    });
  }

  get query(): string {
    return this._query;
  }

  set query(query: string) {
    this._query = query;
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

  get dataReceived(): boolean {
    return this._dataReceived;
  }

  set dataReceived(value: boolean) {
    this._dataReceived = value;
  }

  get foundEntries(): ResolutionEntry[] {
    return this._foundEntries;
  }

  get hasNotFoundEntries(): boolean {
    return this._notFoundEntries.length !== 0;
  }

  get notFoundEntries(): string {
    return this._notFoundEntries.join(' ');
  }

  get entriesToComplete(): Map<string, ResolutionEntry> {
    return this._entriesToComplete;
  }

  get totalInteractorsToQuery(): number {
    return this._totalInteractorsToQuery;
  }

  get interactorsQueried(): number {
    return this._interactorsQueried;
  }

  get acCollectionProgress(): number {
    return this._acCollectionProgress;
  }

  get acCollectionFinished(): boolean {
    return this._acCollectionFinished;
  }

  get interactorAcs(): Set<string> {
    return this._interactorAcs;
  }
}
