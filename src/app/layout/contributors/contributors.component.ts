import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'ip-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('ip-contributors').foundation();
  }

}
