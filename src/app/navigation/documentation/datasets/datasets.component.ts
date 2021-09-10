import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'ip-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.css']
})
export class DatasetsComponent implements OnInit {

  dataset = environment.intact_portal_documentation_url + 'dataset-descriptions/datasets.md';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('IntAct - Datasets');
    $('ip-datasets').foundation();
  }

}
