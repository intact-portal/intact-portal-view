import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'iv-interactions-results',
  templateUrl: './interactions-results.component.html',
  styleUrls: ['./interactions-results.component.css']
})
export class InteractionsResultsComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Intact - Search Results');
  }

}
