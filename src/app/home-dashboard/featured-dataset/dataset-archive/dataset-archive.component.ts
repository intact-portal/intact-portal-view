import {Component, OnInit} from '@angular/core';
import {FeatureDatasetService} from '../service/feature-dataset.service';
import {Dataset} from '../model/dataset.model';
import {groupBy} from '../../../shared/utils/array-utils';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

@Component({
  selector: 'ip-dataset-archive',
  templateUrl: './dataset-archive.component.html',
  styleUrls: ['./dataset-archive.component.css']
})
export class DatasetArchiveComponent implements OnInit {
  $datasetByYear: Observable<{ group: string; elements: Dataset[] }[]>

  constructor(private featureDatasetService: FeatureDatasetService) {
  }

  ngOnInit() {
    this.requestDatasetArchive();
  }

  requestDatasetArchive() {
    this.$datasetByYear = this.featureDatasetService.getFeaturedDataset()
      .pipe(map(datasets => groupBy(datasets, dataset => dataset.year)));
  }
}
