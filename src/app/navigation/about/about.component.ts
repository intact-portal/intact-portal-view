import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';


@Component({
    selector: 'ip-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
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
  imex_partners = environment.intact_portal_documentation_url + 'about/imex-consortium-partners.md';
  cite_us = environment.intact_portal_documentation_url + 'about/cite-us.md';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('IntAct - About');
    $('ip-about').foundation();
  }
}
