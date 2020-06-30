import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Title} from '@angular/platform-browser';

declare const $: any;

@Component({
  selector: 'ip-technical-corner',
  templateUrl: './technical-corner.component.html',
  styleUrls: ['./technical-corner.component.css']
})
export class TechnicalCornerComponent implements OnInit {

  apis = environment.intact_portal_documentation_url + 'technical-corner/apis.md';
  source_code = environment.intact_portal_documentation_url + 'technical-corner/source-code.md';
  tools = environment.intact_portal_documentation_url + 'technical-corner/tools.md';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('IntAct - Technical Corner');
    $('ip-technical-corner').foundation();
  }

}
