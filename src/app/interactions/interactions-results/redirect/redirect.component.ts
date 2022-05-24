import { Component, OnInit } from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ActivatedRoute, Router} from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'ip-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Switch path params to query params
    this.route.params
      .pipe(untilDestroyed(this))
      .subscribe(pathParams => {
        if (Object.keys(pathParams).length > 0) {
          this.router.navigate(['search'], {queryParams: pathParams})
        }
      })
  }

}
