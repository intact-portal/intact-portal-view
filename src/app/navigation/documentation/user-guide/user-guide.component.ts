import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {environment} from '../../../../environments/environment';


@Component({
  selector: 'ip-user-guide',
  templateUrl: './user-guide.component.html',
  styleUrls: ['./user-guide.component.css']
})
export class UserGuideComponent implements OnInit {

  user_guide = environment.intact_portal_documentation_url + 'help/user-guide/README.md';

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('IntAct - User Guide');
    $('ip-user-guide').foundation();
  }

}
