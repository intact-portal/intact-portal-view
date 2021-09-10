import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'ip-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.css']
})
export class DatasetsComponent implements OnInit {

  curated = environment.intact_portal_documentation_url + 'download/curated-datasets.md';
  computationally = environment.intact_portal_documentation_url + 'download/computational-datasets.md';
  species = environment.intact_portal_documentation_url + 'download/species-based-datasets.md';
  mutations = environment.intact_portal_documentation_url + 'download/mutations.md';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('IntAct - Datasets');
    $('ip-datasets').foundation();
  }

}
