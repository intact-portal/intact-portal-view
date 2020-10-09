import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'ip-compact-header',
  templateUrl: './compact-header.component.html',
  styleUrls: ['./compact-header.component.css']
})
export class CompactHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('ip-compact-header').foundation();
  }

}
