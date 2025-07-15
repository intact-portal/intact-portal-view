import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'ip-contributors',
    templateUrl: './contributors.component.html',
    styleUrls: ['./contributors.component.css'],
    standalone: false
})
export class ContributorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('ip-contributors').foundation();
  }

}
