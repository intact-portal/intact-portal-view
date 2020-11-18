import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ip-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css', '../../app.component.css']
})
export class NewsComponent implements OnInit {
  version = '0.4.0';
  environmentName = 'dev';
  releaseDate = 'January 2020';
  publications = '21933';
  interactors = '118713';
  interactions = '1123041';

  constructor() { }

  ngOnInit() {
  }

}
