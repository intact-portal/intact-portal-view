import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';


@Component({
  selector: 'ip-download',
  templateUrl: './ftp.component.html',
  styleUrls: ['./ftp.component.css']
})
export class FTPComponent implements OnInit {

  ftp = environment.intact_portal_documentation_url + 'download/ftp.md';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('IntAct - Download');
    $('ip-download').foundation();
  }
}
