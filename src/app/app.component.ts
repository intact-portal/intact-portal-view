import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ProgressBarComponent} from './layout/loading-indicators/progress-bar/progress-bar.component';
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import {environment} from '../environments/environment';


@Component({
  selector: 'ip-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  version = '0.0.1';
  showCompactHeader = false;
  showFooter = true;
  title = 'IntAct';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private analytics: Angulartics2GoogleAnalytics) {
  }

  ngOnInit() {
    AppComponent.initFoundation();
    console.log('The component is initialized.');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showCompactHeader = this.activatedRoute.firstChild.snapshot.data.showCompactHeader !== false;
        this.showFooter = this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
        ProgressBarComponent.display();
      }
    });
  }

  ngAfterViewInit(): void {
    ga('create', environment.analytics_id, 'none');
  }


  private static initFoundation(): void {
    $(document).foundation();
    $(document).foundationExtendEBI();
  }
}
