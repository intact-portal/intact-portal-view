import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ProgressBarComponent} from './layout/loading-indicators/progress-bar/progress-bar.component';
import {environment} from '../environments/environment';
import {APP_BASE_HREF} from '@angular/common';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'ip-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  version = '0.0.1';
  showCompactHeader = false;
  showFooter = true;
  title = 'IntAct';


  private static initFoundation(): void {
    $(document).foundation();
    $(document).foundationExtendEBI();
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(APP_BASE_HREF) private baseHref: string) {
  }

  ngOnInit() {
    environment.context_path = /\/$/.test(this.baseHref) ? this.baseHref.substring(0, this.baseHref.length - 1) : this.baseHref;
    AppComponent.initFoundation();
    this.router.events
      .pipe(untilDestroyed(this))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.showCompactHeader = this.activatedRoute.firstChild.snapshot.data.showCompactHeader !== false;
          this.showFooter = this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
          ProgressBarComponent.display();
        }
      })
  }

  scrollTo(topScrollAnchor: HTMLDivElement) {
    setTimeout(() => {
      topScrollAnchor.scrollIntoView(true)
    }, 0);
  }
}
