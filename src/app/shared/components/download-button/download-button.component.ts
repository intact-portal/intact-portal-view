import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ip-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.css']
})
export class DownloadButtonComponent implements OnInit {

  @Input()
  formats: {name: string, url: string}[] = [];

  constructor() { }

  ngOnInit() {
  }

  showDownloads() {
    $('.download-buttons-container').stop().animate({width:'show'},350)
    $('.download-buttons .icon-download').stop().animate({
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0},350)
  }

  hideDownloads() {
    $('.download-buttons-container').stop().animate({width:'hide'},350)
    $('.download-buttons .icon-download').stop().animate({
      borderTopLeftRadius: '0.2rem',
      borderBottomLeftRadius: '0.2rem'},350)

  }
}
