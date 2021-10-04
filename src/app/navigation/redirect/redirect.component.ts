import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {SubscriberComponent} from '../../shared/utils/observer-utils';

@Component({
  selector: 'ip-redirect',
  templateUrl: './redirect.component.html',
  styles: []
})
export class RedirectComponent extends SubscriberComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    super()
  }

  href: string;
  subscriptions: Subscription[] = [];

  ngOnInit() {
    this.subscribe(this.route.data, (data) => {
      this.href = data.externalUrl;
      this.subscribe(this.route.params, (params) => {
        for (const param of Object.keys(params)) {
          this.href = this.href.replace(':' + param, params[param])
        }
        this.subscribe(this.route.queryParams, (queryParams) => {
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
