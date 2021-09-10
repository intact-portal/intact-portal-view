import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'ip-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('IntAct - Download');
    $('ip-download').foundation();
  }

}
