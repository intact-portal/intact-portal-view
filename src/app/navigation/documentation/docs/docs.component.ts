import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Title} from '@angular/platform-browser';

declare const $: any;

@Component({
  selector: 'ip-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  curation_manual = environment.intact_portal_documentation_url + 'docs/curation-manual/README.md';
  interaction_scoring = environment.intact_portal_documentation_url + 'docs/interaction-scoring.md';
  expansion_method = environment.intact_portal_documentation_url + 'docs/expansion-method.md';
  definitions_formats = environment.intact_portal_documentation_url + 'docs/definitions-and-formats/README.md';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('IntAct - Docs');
    $('ip-docs').foundation();
  }

}
