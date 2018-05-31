import {AfterViewInit, Component, OnInit} from '@angular/core';

declare const $: any;

@Component({
  selector: 'iv-interactions-list',
  templateUrl: './interactions-list.component.html',
  styleUrls: ['./interactions-list.component.css']
})
export class InteractionsListComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('iv-interactions-list').foundation();
  }

}
