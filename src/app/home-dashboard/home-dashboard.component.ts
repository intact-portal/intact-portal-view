import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'ip-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  constructor(private titleService: Title) { }

  surveyBannerMessage = 'Do data resources managed by EMBL-EBI and our collaborators make a difference to your work? \n' +
      'Please take 10 minutes to fill in our annual user survey, and help us make the case for why sustaining open data resources is critical for life sciences research.\n' +
      'Survey link: ' +
      '<a class="vf-banner__link" href="https://www.surveymonkey.com/r/HJKYKTT?channel=[intact]" target="_blank">https://www.surveymonkey.com/r/HJKYKTT</a>';

  ngOnInit() {
    this.titleService.setTitle('IntAct');
  }

}
