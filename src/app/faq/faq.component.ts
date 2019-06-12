import {AfterViewInit, Component, OnInit} from '@angular/core';
import { environment } from '../../environments/environment';
import { Title } from '@angular/platform-browser';

declare const $: any;

@Component({
  selector: 'iv-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, AfterViewInit {

  data_sources = environment.intact_portal_documentation_url + 'help/faq/data-sources-and-annotation-practices.md';
  usage = environment.intact_portal_documentation_url + 'help/faq/usage.md';
  scoring = environment.intact_portal_documentation_url + 'help/faq/scoring.md';
  data_export = environment.intact_portal_documentation_url + 'help/faq/data-export.md';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('FAQ');
  }

  ngAfterViewInit(): void {
    $('iv-faq').foundation();
  }

}
