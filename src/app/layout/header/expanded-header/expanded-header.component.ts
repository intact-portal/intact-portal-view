import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';


@UntilDestroy()
@Component({
  selector: 'ip-expanded-header',
  templateUrl: './expanded-header.component.html',
  styleUrls: ['./expanded-header.component.css']
})
export class ExpandedHeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  isHome$ = this.router.events.pipe(
    filter(e => e instanceof NavigationEnd),
    map((e: NavigationEnd) => e.urlAfterRedirects.includes('home')),
    distinctUntilChanged(),
    untilDestroyed(this),
  )


  ngOnInit() {
    $('ip-expanded-header').foundation();
  }

}
