import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';


@Component({
    selector: 'ip-documentation',
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.css'],
    standalone: false
})
export class DocumentationComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('IntAct - Documentation');
    $('ip-documentation').foundation();
  }

}
