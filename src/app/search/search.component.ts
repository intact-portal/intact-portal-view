import {AfterViewInit, Component, OnInit} from '@angular/core';
declare const $: any;

@Component({
  selector: 'iv-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    // $(document).foundation();
  }

  ngAfterViewInit() {
    $('iv-search').foundation();
  }



}
