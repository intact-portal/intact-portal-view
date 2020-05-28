import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'ip-expanded-header',
  templateUrl: './expanded-header.component.html',
  styleUrls: ['./expanded-header.component.css']
})
export class ExpandedHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('ip-expanded-header').foundation();
  }

}
