import {Component, Input, OnInit} from '@angular/core';
import {Interactome} from '../interactome.model';
import {environment} from '../../../environments/environment';
import {SearchService} from '../../home-dashboard/search/service/search.service';

@Component({
  selector: 'ip-interactome',
  templateUrl: './interactome.component.html',
  styleUrls: ['./interactome.component.css']
})
export class InteractomeComponent implements OnInit {

  private _interactome: Interactome;

  constructor(public search: SearchService) {
  }

  ngOnInit() {
  }

  goToInteractomePSI25(): void {
    window.open(environment.intact_psi25_url + '/species/' + this.interactome.filename + '.zip', '_blank');
  }

  goToInteractomePSI30(): void {
    window.open(environment.intact_psi30_url + '/species/' + this.interactome.filename + '.zip', '_blank');
  }

  goToInteractomeMiTab(): void {
    window.open(environment.intact_psimitab_url + '/species/' + this.interactome.filename + '.zip', '_blank');
  }

  get interactome(): Interactome {
    return this._interactome;
  }

  @Input()
  set interactome(value: Interactome) {
    this._interactome = value;
  }
}
