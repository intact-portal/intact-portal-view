import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {environment} from '../../environments/environment';

declare const $: any;

@Component({
  selector: 'iv-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit, AfterViewInit {

  ftp = environment.intact_portal_documentation_url + 'download/ftp.md';
  curated_datasets = environment.intact_portal_documentation_url + 'download/dataset-files/curated-datasets.md';
  species_based_datasets = environment.intact_portal_documentation_url + 'download/dataset-files/species-based-datasets.md';
  mutations = environment.intact_portal_documentation_url + 'download/dataset-files/mutations.md';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Download');
  }

  ngAfterViewInit(): void {
    $('iv-download').foundation();
  }
}
