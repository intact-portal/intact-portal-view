import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Title} from '@angular/platform-browser';

declare const $: any;

@Component({
  selector: 'ip-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('IntAct - Help');
    $('ip-help').foundation();
  }

}
