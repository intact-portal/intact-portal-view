import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

declare const $: any;

@Component({
  selector: 'ip-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('IntAct - Documentation');
    $('ip-documentation').foundation();
  }

}
