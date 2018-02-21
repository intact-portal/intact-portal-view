import {Component, OnInit} from '@angular/core';
declare const $: any;

@Component({
  selector: 'iv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  version = '0.0.1';
  environmentName = 'dev';

  constructor() { }

  ngOnInit() {
    
    this.initFoundation();
    console.log('The component is initialized.');
  }

  private initFoundation(): void {
    $(document).foundation();
    $(document).foundationExtendEBI();
  }
}
