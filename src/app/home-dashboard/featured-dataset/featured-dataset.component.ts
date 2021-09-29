import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FeatureDatasetService} from './service/feature-dataset.service';
import {environment} from '../../../environments/environment';
import {FoundationUtils} from '../../shared/utils/foundation-utils';
import {Router} from '@angular/router';
import {SearchService} from '../search/service/search.service';
import {Dataset} from './model/dataset.model';
import {SubscriberComponent} from '../../shared/utils/observer-utils';

const intactFTP_URL = environment.intact_psi25_url;
const intactFTPMiTab_URL = environment.intact_psimitab_url;

@Component({
  selector: 'ip-featured-dataset',
  templateUrl: './featured-dataset.component.html',
  styleUrls: ['./featured-dataset.component.css', '../../app.component.css']
})
export class FeaturedDatasetComponent extends SubscriberComponent implements OnInit, AfterViewInit {

  dataset: Dataset;

  constructor(private featureDatasetService: FeatureDatasetService, public router: Router, private search: SearchService) {
    super();
  }

  ngOnInit() {
    this.requestDOTM();
  }

  requestDOTM() {
    this.subscribe(this.featureDatasetService.getFeaturedDataset(), response => {
      this.dataset = response.datasets[0];
      setTimeout(() => {
        $('#dataset-group').foundation();
        FoundationUtils.adjustWidth();
      })
    })
  }

  onIntActSearch() {
    this.search.search(this.firstPubmed.id, `publication: ${this.firstPubmed.author} (${this.firstPubmed.id})`);
  }

  ngAfterViewInit(): void {
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
