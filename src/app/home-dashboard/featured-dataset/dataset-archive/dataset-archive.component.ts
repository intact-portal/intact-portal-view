import { Component, OnInit } from '@angular/core';
import { FeatureDatasetService } from '../service/feature-dataset.service';
import { environment } from '../../../../environments/environment';
import { Dataset } from '../model/dataset.model';

declare const require: any;
const parseString = require('xml2js').parseString;

const baseURL = environment.ebi_base_url;
const intactFTP_URL = environment.intact_psi25_url;
const intactFTPMiTab_URL = environment.intact_psimitab_url;

@Component({
  selector: 'iv-dataset-archive',
  templateUrl: './dataset-archive.component.html',
  styleUrls: ['./dataset-archive.component.css']
})
export class DatasetArchiveComponent implements OnInit {

  private _featuredDatasets: Dataset[];

  constructor(private featureDatasetService: FeatureDatasetService) { }

  ngOnInit() {
    this.requestDatasetArchive();
  }

  requestDatasetArchive() {
    this.featureDatasetService.getFeaturedDataset().subscribe(
      response => {

        let datasets: Dataset[];
        parseString(response, function (err, result) {
          datasets = result.datasets.dataset;
        });

        this.featuredDatasets = datasets;
      });
  }

  goPSIMI25FTP(pubmedYear: string, pubmedId: string) {
    window.open(intactFTP_URL + `/pmid/${pubmedYear}/${pubmedId}.zip`);
  }

  goPSIMITABFTP(pubmedYear: string, pubmedId: string) {
    window.open(intactFTPMiTab_URL + `/${pubmedYear}/${pubmedId}.txt`);
  }


  get featuredDatasets(): Dataset[] {
    return this._featuredDatasets;
  }

  set featuredDatasets(value: Dataset[]) {
    this._featuredDatasets = value;
  }
}
