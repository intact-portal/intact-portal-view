import {Component, Input, OnInit} from '@angular/core';
import {TypeValue} from '../../../../shared/model/interaction-details/type.value';
import {CvTerm} from "../../../../shared/model/interaction-details/cv-term.model";
import {Parameter} from "../../../../shared/model/interaction-details/parameter.model";

@Component({
  selector: 'ip-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  @Input() parameters: Parameter[];

  constructor() { }

  ngOnInit() {
  }

}
