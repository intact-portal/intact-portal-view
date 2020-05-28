import {Component, Input, OnInit} from '@angular/core';
import {Interactome} from '../interactome.model';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'ip-interactome',
  templateUrl: './interactome.component.html',
  styleUrls: ['./interactome.component.css']
})
export class InteractomeComponent implements OnInit {

  private _interactome: Interactome;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  search(specieName: string) {
    this.router.navigate(['search'], {queryParams: {query: specieName, species: specieName, miScoreMin: 0, miScoreMax: 1, page: 1}});
  }

  goToInteractomePSI25(): void {
    window.open(environment.intact_psi25_url + '/species/' + this.interactome.psi25 + '.zip', '_blank');
  }

  goToInteractomePSI30(): void {
    window.open(environment.intact_psi30_url + '/species/' + this.interactome.psi30 + '.zip', '_blank');
  }

  get interactome(): Interactome {
    return this._interactome;
  }

  @Input()
  set interactome(value: Interactome) {
    this._interactome = value;
  }
}
