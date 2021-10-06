import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'ip-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css', '../../app.component.css']
})
export class NewsComponent implements OnInit {
  version = '1.0.1';
  environmentName = 'dev';
  releaseDate = 'September 2021';

  statistics = environment.intact_portal_documentation_url + 'statistics.md';


  constructor() {
  }

  ngOnInit() {
  }

}
