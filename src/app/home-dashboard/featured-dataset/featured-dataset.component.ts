import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FeatureDatasetService} from './service/feature-dataset.service';
import {environment} from '../../../environments/environment';
import {FoundationUtils} from '../../shared/utils/foundation-utils';
import {parseString} from 'xml2js';

declare const require: any;

const parseString = require('xml2js').parseString;
const baseURL = environment.ebi_base_url;
const intactFTP_URL = environment.intact_psi25_url;
const intactFTPMiTab_URL = environment.intact_psimitab_url;

@Component({
  selector: 'ip-featured-dataset',
  templateUrl: './featured-dataset.component.html',
  styleUrls: ['./featured-dataset.component.css', '../../app.component.css']
})
export class FeaturedDatasetComponent implements OnInit, AfterViewInit {

  private _title: string;
  private _pubmedId: any;
  private _pubmedAuthor: any;
  private _pubmedYear: any;

  constructor(private featureDatasetService: FeatureDatasetService) {
  }

  ngOnInit() {
    this.requestDOTM();
  }

  requestDOTM() {
    this.featureDatasetService.getFeaturedDataset().subscribe(
      response => {
        let t, pId, pA, pY;
        parseString(response, function (err, result) {
          t = result.datasets.dataset[0].$.title;
          pId = result.datasets.dataset[0].pubmed[0].id;
          pA = result.datasets.dataset[0].pubmed[0].author;
          pY = result.datasets.dataset[0].pubmed[0].year;
        });

        this.title = t;
        this.pubmedId = pId;
        this.pubmedAuthor = pA;
        this.pubmedYear = pY;
      });
  }

  ngAfterViewInit(): void {
    $('#dataset-group').foundation();
    FoundationUtils.adjustWidth();
  }


  pubMedUrl() {
    return `http://europepmc.org/article/MED/${this.pubmedId}`;
  }

  searchUrl() {
    return `${baseURL}/intact/query/pubid:${this.pubmedId}`;
  }

  miXmlUrl() {
    return `${intactFTP_URL}/pmid/${this.pubmedYear}/${this.pubmedId}.zip`;
  }

  miTabUrl() {
    return `${intactFTPMiTab_URL}/${this.pubmedYear}/${this.pubmedId}.txt`;
  }

  archiveUrl() {
    return '/featured-dataset/archive';
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get pubmedId(): any {
    return this._pubmedId;
  }

  set pubmedId(value: any) {
    this._pubmedId = value;
  }

  get pubmedAuthor(): any {
    return this._pubmedAuthor;
  }

  set pubmedAuthor(value: any) {
    this._pubmedAuthor = value;
  }

  get pubmedYear(): any {
    return this._pubmedYear;
  }

  set pubmedYear(value: any) {
    this._pubmedYear = value;
  }
}
