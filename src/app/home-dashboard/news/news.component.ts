import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ip-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css', '../../app.component.css']
})
export class NewsComponent implements OnInit {
  version = '1.0.0';
  environmentName = 'dev';
  releaseDate = 'September 2021';
  publications = '22496';
  interactors = '122612';
  interactions = '1144256';

  constructor() { }

  ngOnInit() {
  }

}
