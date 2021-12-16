import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import pkg from '../../../../package.json';

@Component({
  selector: 'ip-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css', '../../app.component.css']
})
export class NewsComponent implements OnInit {
  version = pkg.version;
  environmentName = 'dev';
  releaseDate = 'December 2021';

  statistics = environment.intact_portal_documentation_url + 'statistics.md';


  constructor() {
  }

  ngOnInit() {
  }

}
