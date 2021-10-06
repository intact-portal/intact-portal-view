import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';

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
    this.route.data
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.href = data.externalUrl;
        this.route.params
          .pipe(untilDestroyed(this))
          .subscribe((params) => {
            for (const param of Object.keys(params)) {
              this.href = this.href.replace(':' + param, params[param])
            }
            this.route.queryParams
              .pipe(untilDestroyed(this))
              .subscribe((queryParams) => {
                const paramList = Object.keys(queryParams);
                if (paramList.length > 0) {
                  this.href += `?${paramList.map(param => `${param}=${queryParams[param]}`).join('&')}`;
                }
                window.location.href = this.href;
              });
          });
      });
  }
}
