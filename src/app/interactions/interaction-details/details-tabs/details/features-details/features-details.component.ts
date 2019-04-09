import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'iv-features-details',
  templateUrl: './features-details.component.html',
  styleUrls: ['./features-details.component.css']
})
export class FeaturesDetailsComponent implements OnInit {

  @Input() interactionAc: string;

  constructor() { }

  ngOnInit() {
  }

}
