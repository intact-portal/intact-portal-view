import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {ProgressBarComponent} from "./layout/loading-indicators/progress-bar/progress-bar.component";


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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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

  private static initFoundation(): void {
    $(document).foundation();
    $(document).foundationExtendEBI();
  }
}
