import {Component, OnInit} from '@angular/core';
import {Interactome} from './interactome.model';
import {Title} from '@angular/platform-browser';
import {InteractomesConstants} from './interactomes-constants';

@Component({
  selector: 'ip-interactomes',
  templateUrl: './interactomes.component.html',
  styleUrls: ['./interactomes.component.css']
})
export class InteractomesComponent implements OnInit {

  private _interactomes: Interactome[] = [];

  constructor(private titleService: Title) {
    this.interactomes = InteractomesConstants.interactomes;
  }

  ngOnInit() {
    this.titleService.setTitle('IntAct - Interactomes');
  }

  get interactomes(): Interactome[] {
    return this._interactomes;
  }

  set interactomes(value: Interactome[]) {
    this._interactomes = value;
  }
}
