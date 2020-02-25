import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

declare const $: any;

@Component({
  selector: 'iv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  version = '0.0.1';
  showCompactHeader = false;
  showFooter = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initFoundation();
    console.log('The component is initialized.');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showCompactHeader = this.activatedRoute.firstChild.snapshot.data.showCompactHeader !== false;
        this.showFooter = this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
      }
    });
  }

  private initFoundation(): void {
    $(document).foundation();
    $(document).foundationExtendEBI();
  }
}
