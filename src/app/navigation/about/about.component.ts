import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

declare const $: any;

@Component({
  selector: 'ip-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  overview = environment.intact_portal_documentation_url + 'about/overview.md';
  collaborators = environment.intact_portal_documentation_url + 'about/collaborators.md';
  funding = environment.intact_portal_documentation_url + 'about/funding.md';
  statistics = `# Statistics`; // Temporary until we have the statistics page
  publications = environment.intact_portal_documentation_url + 'about/publications.md';
  license_privacy = environment.intact_portal_documentation_url + 'about/license-privacy.md';
  conceptual_design = environment.intact_portal_documentation_url + 'about/conceptual-design.md';
  sab = environment.intact_portal_documentation_url + 'about/scientific-advisory-board.md';
  cite_us = environment.intact_portal_documentation_url + 'about/cite-us.md';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('IntAct - About');
    $('ip-about').foundation();
  }

}
