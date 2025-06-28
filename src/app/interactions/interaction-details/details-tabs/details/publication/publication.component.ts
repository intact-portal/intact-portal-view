import {Component, Input, OnInit} from '@angular/core';
import {Publication} from '../../../../shared/model/interaction-details/publication.model';


@Component({
    selector: 'ip-publication',
    templateUrl: './publication.component.html',
    styleUrls: ['./publication.component.css'],
    standalone: false
})
export class PublicationComponent implements OnInit {

  @Input() publication: Publication;

  hover = false;

  constructor() {
  }

  ngOnInit() {
    if (this.publication.publicationDate)
      this.publication.publicationDate = this.publication.publicationDate
        .split('-')
        .reverse()
        .join('/');
  }
}
