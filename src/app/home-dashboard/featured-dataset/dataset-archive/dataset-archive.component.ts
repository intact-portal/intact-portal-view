import {Component, OnInit} from '@angular/core';
import {FeatureDatasetService} from '../service/feature-dataset.service';
import {Dataset} from '../model/dataset.model';
import {groupBy} from '../../../shared/utils/array-utils';
import {SubscriberComponent} from '../../../shared/utils/observer-utils';


@Component({
  selector: 'ip-dataset-archive',
  templateUrl: './dataset-archive.component.html',
  styleUrls: ['./dataset-archive.component.css']
})
export class DatasetArchiveComponent extends SubscriberComponent implements OnInit {
  featuredDatasets: Dataset[];
  datasetsByYear: { group: string; elements: Dataset[] }[];

  constructor(private featureDatasetService: FeatureDatasetService) {
    super();
  }

  ngOnInit() {
    this.requestDatasetArchive();
  }

  requestDatasetArchive() {
    this.subscribe(this.featureDatasetService.getFeaturedDataset(), data => {
      this.featuredDatasets = data.datasets;
      this.datasetsByYear = groupBy(this.featuredDatasets, element => element.year);
    })
  }
}
