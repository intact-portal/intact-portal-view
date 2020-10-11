import {Component, Input, OnInit} from '@angular/core';
import {Publication} from '../../../../shared/model/interaction-details/publication.model';
import {Router} from "@angular/router";

declare const $: any;

@Component({
  selector: 'ip-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  @Input() publication: Publication;

  private hover = false;

  constructor() {
  }

  ngOnInit() {
    this.publication.publicationDate = this.publication.publicationDate
      .split("-")
      .reverse()
      .join('/');
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
