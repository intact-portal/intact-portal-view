import {AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {FeatureDatasetService} from '../service/feature-dataset.service';
import {environment} from '../../../../environments/environment';
import {Dataset} from '../model/dataset.model';
import {PubmedDataset} from "../model/pubmed-dataset.model";
import {groupBy} from "../../../shared/utils/array-utils";

declare const require: any;
declare const $: any;

const parseString = require('xml2js').parseString;

const baseURL = environment.ebi_base_url;
const intactFTP_URL = environment.intact_psi25_url;
const intactFTPMiTab_URL = environment.intact_psimitab_url;

@Component({
  selector: 'ip-dataset-archive',
  templateUrl: './dataset-archive.component.html',
  styleUrls: ['./dataset-archive.component.css']
})
export class DatasetArchiveComponent implements OnInit {
  private _featuredDatasets: Dataset[];

  constructor(private featureDatasetService: FeatureDatasetService) {
  }

  ngOnInit() {
    this.requestDatasetArchive();
  }

  private _datasetsByYear: { group: string; elements: Dataset[] }[];

  requestDatasetArchive() {
    this.featureDatasetService.getFeaturedDataset().subscribe(
      response => {
        parseString(response, (err, result) => {
          this.featuredDatasets = result.datasets.dataset;
          this.datasetsByYear = groupBy(this.featuredDatasets, element => element.$.year);
        });
      });
  }

  get featuredDatasets(): Dataset[] {
    return this._featuredDatasets;
  }

  set featuredDatasets(value: Dataset[]) {
    this._featuredDatasets = value;
  }

  set datasetsByYear(value: { group: string; elements: Dataset[] }[]) {
    this._datasetsByYear = value;
  }

  get datasetsByYear(): { group: string; elements: Dataset[] }[] {
    return this._datasetsByYear;
  }
}
