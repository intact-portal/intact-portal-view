import {Component, OnInit} from '@angular/core';
import {environment} from '../../../environments/environment';
import {SearchService} from '../search/service/search.service';


@Component({
  selector: 'ip-home-description',
  templateUrl: './home-description.component.html',
  styleUrls: ['./home-description.component.css']
})
export class HomeDescriptionComponent implements OnInit {

  readonly formerURL = environment.former_intact_url;

  constructor(private search: SearchService) {
  }

  ngOnInit() {
  }
}
