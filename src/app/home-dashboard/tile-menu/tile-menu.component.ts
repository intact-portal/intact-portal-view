import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ip-tile-menu',
  templateUrl: './tile-menu.component.html',
  styleUrls: ['./tile-menu.component.css']
})
export class TileMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('ip-tile-menu').foundation();
  }

}
