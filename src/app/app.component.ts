import { Component } from '@angular/core';

@Component({
  selector: 'iv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  version = '0.0.1';
  environmentName = 'dev';

  constructor() { }

  ngOnInit() {
  }
}
