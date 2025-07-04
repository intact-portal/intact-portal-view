import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FeatureDatasetService} from './service/feature-dataset.service';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {SearchService} from '../search/service/search.service';
import {Dataset} from './model/dataset.model';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';
import {PubmedDataset} from './model/pubmed-dataset.model';
import {UntilDestroy} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'ip-featured-dataset',
  templateUrl: './featured-dataset.component.html',
  styleUrls: ['./featured-dataset.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeaturedDatasetComponent implements OnInit, AfterViewInit {

  dataset$: Observable<Dataset>;

  constructor(private featureDatasetService: FeatureDatasetService, public router: Router, private search: SearchService) {
  }

  ngOnInit() {
    this.dataset$ = this.featureDatasetService.getFeaturedDataset().pipe(map(value => value[0]));
  }

  ngAfterViewInit(): void {
  }

  onIntActSearch(pubmed: PubmedDataset) {
    this.search.search(PubmedDataset.searchQuery(pubmed), PubmedDataset.searchTitle(pubmed));
  }

  isReleased(pubmed: PubmedDataset): boolean {
    return pubmed.id.startsWith('unassigned');
  }

  pubMedUrl(pubmed: PubmedDataset): string {
    return `https://europepmc.org/article/MED/${pubmed.id}`;
  }

  miXml25Url(pubmed: PubmedDataset): string {
    return PubmedDataset.ftpFilePath(environment.intact_psi25_url, pubmed, 'zip');
  }

  miXml30Url(pubmed: PubmedDataset): string {
    return PubmedDataset.ftpFilePath(environment.intact_psi30_url, pubmed, 'zip');
  }

  miTabUrl(pubmed: PubmedDataset): string {
    return PubmedDataset.ftpFilePath(environment.intact_psimitab_url, pubmed, 'txt');
  }

  archiveUrl(): string {
    return '/featured-dataset/archive';
  }
}
