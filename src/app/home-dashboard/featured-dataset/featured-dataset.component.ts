import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FeatureDatasetService} from './service/feature-dataset.service';
import {environment} from '../../../environments/environment';
import {FoundationUtils} from '../../shared/utils/foundation-utils';
import {Router} from '@angular/router';
import {SearchService} from '../search/service/search.service';
import {Dataset} from './model/dataset.model';

const intactFTP_URL = environment.intact_psi25_url;
const intactFTPMiTab_URL = environment.intact_psimitab_url;

@Component({
  selector: 'ip-featured-dataset',
  templateUrl: './featured-dataset.component.html',
  styleUrls: ['./featured-dataset.component.css', '../../app.component.css']
})
export class FeaturedDatasetComponent implements OnInit, AfterViewInit {

  dataset: Dataset;

  constructor(private featureDatasetService: FeatureDatasetService, public router: Router, private search: SearchService) {
  }

  ngOnInit() {
    this.requestDOTM();
  }

  requestDOTM() {
    this.featureDatasetService.getFeaturedDataset().subscribe(
      response => {
        this.dataset = response.datasets[0];
      });
  }

  onIntActSearch() {
    this.search.search(this.firstPubmed.id);
  }

  ngAfterViewInit(): void {
    $('#dataset-group').foundation();
    FoundationUtils.adjustWidth();
  }

  get firstPubmed() {
    return this.dataset.pubmeds[0];
  }

  pubMedUrl() {
    return `https://europepmc.org/article/MED/${this.firstPubmed.id}`;
  }

  miXmlUrl() {
    return `${intactFTP_URL}/pmid/${this.firstPubmed.year}/${this.firstPubmed.id}.zip`;
  }

  miTabUrl() {
    return `${intactFTPMiTab_URL}/${this.firstPubmed.year}/${this.firstPubmed.id}.txt`;
  }

  archiveUrl() {
    return '/featured-dataset/archive';
  }
}
