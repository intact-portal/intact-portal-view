import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'ip-data-submission',
  templateUrl: './data-submission.component.html',
  styleUrls: ['./data-submission.component.css']
})
export class DataSubmissionComponent implements OnInit {

  how_to_submit = environment.intact_portal_documentation_url + 'documentation/how-to-submit.md';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('IntAct - Data Submission');
    $('ip-datasets').foundation();
  }
}
