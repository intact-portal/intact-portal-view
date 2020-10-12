import {Component, Input, OnInit} from '@angular/core';
import {TypeValueModel} from '../../../../shared/model/interaction-details/type-value.model';
import {CvTerm} from "../../../../shared/model/interaction-details/cv-term.model";

@Component({
  selector: 'ip-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  @Input() parameters: TypeValueModel<CvTerm>[];

  constructor() { }

  ngOnInit() {
  }

}
