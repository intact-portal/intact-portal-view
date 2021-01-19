import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'ip-download-button',
  templateUrl: './download-button.component.html',
  styleUrls: ['./download-button.component.css']
})
export class DownloadButtonComponent implements OnInit, AfterViewInit {

  @Input()
  formats: { name: string, url: string }[] = [];

  @ViewChild('container')
  private container: ElementRef;
  private $container: JQuery;
  @ViewChild('icon')
  private icon: ElementRef;
  private $icon: JQuery;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.$container = $(this.container.nativeElement);
    this.$icon = $(this.icon.nativeElement);
    this.$icon.width(Math.max(this.$container.outerWidth(false), this.$icon.width()));
  }


  showDownloads() {
    this.$icon.stop().animate({
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0
    }, {
      duration: 50,
      complete: () => this.$container.stop().slideDown(350)
    });
  }


  hideDownloads() {
    this.$container.stop().slideUp({
      duration: 350,
      complete: () => {
        this.$icon.stop().animate({
          borderBottomRightRadius: '0.3rem',
          borderBottomLeftRadius: '0.3rem'
        }, 50)
      }
    });
  }
}
