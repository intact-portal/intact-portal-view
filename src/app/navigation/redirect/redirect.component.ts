import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {forkJoin} from 'rxjs/internal/observable/forkJoin';

@UntilDestroy()
@Component({
  selector: 'ip-redirect',
  templateUrl: './redirect.component.html',
  styles: []
})
export class RedirectComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  href: string;

  ngOnInit() {
    forkJoin({
      href: this.route.data,
      params: this.route.params,
      queryParams: this.route.queryParams
    }).pipe(untilDestroyed(this))
      .subscribe(route => {
        this.href = route.href.data.externalUrl;

        for (const param of Object.keys(route.params)) {
          this.href = this.href.replace(':' + param, route.params[param])
        }

        const paramList = Object.keys(route.queryParams);
        if (paramList.length > 0) {
          this.href += `?${paramList.map(param => `${param}=${route.queryParams[param]}`).join('&')}`;
        }

        window.location.href = this.href;
      });
  }
}
