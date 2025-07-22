import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'ip-local-footer',
    templateUrl: './local-footer.component.html',
    styleUrls: ['./local-footer.component.css'],
    standalone: false
})
export class LocalFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('ip-local-footer').foundation();
  }

}
