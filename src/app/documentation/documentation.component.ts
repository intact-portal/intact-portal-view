import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';

declare const $: any;

@Component({
  selector: 'iv-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {

  constructor(
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.titleService.setTitle('IntAct - Documentation');
    $('iv-documentation').foundation();
  }

}
