import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iv-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css', '../../app.component.css']
})
export class NewsComponent implements OnInit {
  version = '0.0.1';
  environmentName = 'dev';
  releaseDate = '15th February 2018';
  publications = '20080';
  interactors = '794782';
  interactions = '104896';

  constructor() { }

  ngOnInit() {
  }

}
