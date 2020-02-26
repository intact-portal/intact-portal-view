import {Component, Input, OnInit} from '@angular/core';
import {Publication} from '../../../../shared/model/interaction-details/publication.model';

declare const $: any;

@Component({
  selector: 'iv-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  @Input() publication: Publication;

  private hover = false;

  constructor() { }

  ngOnInit() {
  }

  togglePublicationButton(): void {
    if ($('#publicationPanel').is(':visible')) {
      $('#publicationPanel').hide();
      $('i#togglePublication').removeClass('icon-minus').addClass('icon-plus');
    } else {
      $('#publicationPanel').show();
      $('i#togglePublication').removeClass('icon-plus').addClass('icon-minus');
    }
  }
}
