import {Component, Input, OnInit} from '@angular/core';
import {TypeValueModel} from '../../../../shared/model/interaction-details/type-value.model';

@Component({
  selector: 'iv-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  @Input() parameters: TypeValueModel[];

  constructor() { }

  ngOnInit() {
  }

}
