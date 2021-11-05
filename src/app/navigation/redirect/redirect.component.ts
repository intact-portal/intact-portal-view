import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UntilDestroy} from '@ngneat/until-destroy';
import {zip} from 'rxjs';

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
    zip(
      this.route.data,
      this.route.params,
      this.route.queryParams
    ).subscribe(([href, params, queryParams]) => {
      this.href = href.externalUrl;

      for (const param of Object.keys(params)) {
        this.href = this.href.replace(':' + param, params[param])
      }

      const paramList = Object.keys(queryParams);
      if (paramList.length > 0) {
        this.href += `?${paramList.map(param => `${param}=${queryParams[param]}`).join('&')}`;
      }

      window.location.href = this.href;
    });
  }
}
