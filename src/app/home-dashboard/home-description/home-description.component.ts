import {Component} from '@angular/core';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'ip-home-description',
  templateUrl: './home-description.component.html',
  styleUrls: ['./home-description.component.css'],
})
export class HomeDescriptionComponent {

  readonly formerURL = environment.former_intact_url;

  constructor() {
  }

}
