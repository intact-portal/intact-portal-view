import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'iv-tile-menu',
  templateUrl: './tile-menu.component.html',
  styleUrls: ['./tile-menu.component.css']
})
export class TileMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('iv-tile-menu').foundation();
  }

}
