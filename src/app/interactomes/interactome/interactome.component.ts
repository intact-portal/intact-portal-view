import {Component, computed, input, Input, OnInit} from '@angular/core';
import {Interactome} from '../interactome.model';
import {environment} from '../../../environments/environment';
import {SearchService} from '../../home-dashboard/search/service/search.service';

@Component({
    selector: 'ip-interactome',
    templateUrl: './interactome.component.html',
    styleUrls: ['./interactome.component.css'],
    standalone: false
})
export class InteractomeComponent implements OnInit {

  interactome = input.required<Interactome>();
  psi25 = computed(() => `${environment.intact_psi25_url}/species/${this.interactome().filename}.zip`)
  psi30 = computed(() => `${environment.intact_psi30_url}/species/${this.interactome().filename}.zip`)
  miTab = computed(() => `${environment.intact_psimitab_url}/species/${this.interactome().filename}.zip`)

  constructor(public search: SearchService) {
  }

  ngOnInit() {
  }


  maskStyle(url: string): string {
    return `mask: url(${url}) no-repeat center; -webkit-mask: url(${url}) no-repeat center`;
  }
}
