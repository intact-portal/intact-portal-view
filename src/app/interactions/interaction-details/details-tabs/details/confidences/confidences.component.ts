import {Component, Input, OnInit} from '@angular/core';
import {TypeValueModel} from '../../../../shared/model/interaction-details/type-value.model';

@Component({
  selector: 'iv-confidences',
  templateUrl: './confidences.component.html',
  styleUrls: ['./confidences.component.css']
})
export class ConfidencesComponent implements OnInit {

  @Input() confidences: TypeValueModel[];

  constructor() { }

  ngOnInit() {
  }

}
