import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';


@Component({
  selector: 'ip-user-guide',
  templateUrl: './user-guide.component.html',
  styleUrls: ['./user-guide.component.css']
})
export class UserGuideComponent implements OnInit {

  data_sources = environment.intact_portal_documentation_url + 'documentation/user-guide/data-sources-and-annotation-practices.md';
  usage = environment.intact_portal_documentation_url + 'documentation/user-guide/searching-intact.md';
  expansion_method = environment.intact_portal_documentation_url + 'documentation/user-guide/expansion-method.md';
  interaction_scoring = environment.intact_portal_documentation_url + 'documentation/user-guide/interaction-scoring.md';
  definitions_formats = environment.intact_portal_documentation_url + 'documentation/user-guide/definitions-and-formats.md';
  data_export = environment.intact_portal_documentation_url + 'documentation/user-guide/data-export.md';
  access_intact = environment.intact_portal_documentation_url + 'documentation/user-guide/access-intact.md';
  curation_manual = environment.intact_portal_documentation_url + 'documentation/user-guide/curation-manual.md';


  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('IntAct - User Guide');
    $('ip-user-guide').foundation();
  }

}
