import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SearchService} from '../../../home-dashboard/search/service/search.service';

@Component({
  selector: 'ip-interactions-redirect',
  templateUrl: './interactions-redirect.component.html',
  styleUrls: ['./interactions-redirect.component.css']
})
export class InteractionsRedirectComponent implements OnInit {

  constructor(private route: ActivatedRoute, private search: SearchService) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(value => {
      this.search.search(value.get('query').replace(/ OR /g, ' '));
    })
  }
}
