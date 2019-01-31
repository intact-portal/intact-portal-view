import {AfterViewInit, Component, OnInit} from '@angular/core';

declare const $: any;

@Component({
  selector: 'iv-details',
  templateUrl: './details-dashboard.component.html',
  styleUrls: ['./details-dashboard.component.css']
})
export class DetailsDashboardComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    $('iv-details').foundation();
  }

}
