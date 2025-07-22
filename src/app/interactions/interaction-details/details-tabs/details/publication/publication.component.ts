import {Component, OnInit, input} from '@angular/core';
import {Publication} from '../../../../shared/model/interaction-details/publication.model';


@Component({
    selector: 'ip-publication',
    templateUrl: './publication.component.html',
    styleUrls: ['./publication.component.css'],
    standalone: false
})
export class PublicationComponent implements OnInit {

  readonly publication = input<Publication>(undefined);

  hover = false;

  constructor() {
  }

  ngOnInit() {
    const publication = this.publication();
    if (publication.publicationDate)
      publication.publicationDate = publication.publicationDate
        .split('-')
        .reverse()
        .join('/');
  }
}
