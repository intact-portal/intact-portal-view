import {Component, OnInit} from '@angular/core';
import pkg from '../../../../package.json';
import {environment} from '../../../environments/environment';
import * as d3 from 'd3';

@Component({
  selector: 'ip-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css', '../../app.component.css']
})
export class NewsComponent implements OnInit {
  version = pkg.version;
  releaseDate = 'December 2021';

  stat_url = environment.statistics_url + 'summary_table.csv';

  summary: { [key: string]: number }


  constructor() {
  }

  ngOnInit() {
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
