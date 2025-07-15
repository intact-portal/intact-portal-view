import {Component, OnInit} from '@angular/core';
import pkg from '../../../../package.json';
import {environment} from '../../../environments/environment';
import * as d3 from 'd3';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'ip-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css', '../../app.component.css'],
    standalone: false
})
export class NewsComponent implements OnInit {
  version = pkg.version;
  releaseDate = 'October 2023';

  release_url = environment.statistics_url + 'release.txt'

  stat_url = environment.statistics_url + 'summary_table.csv';

  release: string;
  summary: { [key: string]: number }


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http
      .get(this.release_url, {responseType: 'text'})
      .subscribe(value => this.release = value);

    d3.csv(this.stat_url, rawRow => ({
      feature: rawRow.Feature,
      amount: +rawRow.Count,
    })).then(value => {
      this.summary = value.reduce((summary, v) => {
        summary[v.feature] = v.amount;
        return summary;
      }, {});
    })
  }

}
