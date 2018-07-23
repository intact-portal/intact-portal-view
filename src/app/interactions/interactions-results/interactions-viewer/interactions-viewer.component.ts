import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'iv-interactions-viewer',
  templateUrl: './interactions-viewer.component.html',
  styleUrls: ['./interactions-viewer.component.css']
})
export class InteractionsViewerComponent implements OnInit {

  private _interactorsSelected: string[];

  @Input()  name: string;

  constructor() { }

  ngOnInit() {
    console.log('Arriving interactors list ----> ' + this.interactorsSelected);
    console.log(this.name);
  }


  get interactorsSelected(): string[] {
    return this._interactorsSelected;
  }

  @Input()
  set interactorsSelected(value: string[]) {
    this._interactorsSelected = value;
  }
}
