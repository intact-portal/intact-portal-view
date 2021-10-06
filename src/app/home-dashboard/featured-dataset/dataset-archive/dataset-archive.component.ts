import {Component, OnInit} from '@angular/core';
import {FeatureDatasetService} from '../service/feature-dataset.service';
import {Dataset} from '../model/dataset.model';
import {groupBy} from '../../../shared/utils/array-utils';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'ip-dataset-archive',
  templateUrl: './dataset-archive.component.html',
  styleUrls: ['./dataset-archive.component.css']
})
export class DatasetArchiveComponent implements OnInit {
  featuredDatasets: Dataset[];
  datasetsByYear: { group: string; elements: Dataset[] }[];

  constructor(private featureDatasetService: FeatureDatasetService) {
  }

  ngOnInit() {
    this.requestDatasetArchive();
  }

  requestDatasetArchive() {
    this.featureDatasetService.getFeaturedDataset()
      .pipe(untilDestroyed(this))
      .subscribe(data => {
        this.featuredDatasets = data.datasets;
        this.datasetsByYear = groupBy(this.featuredDatasets, element => element.year);
      })
  }
}
