import {Component, Input, OnInit} from '@angular/core';
import {TypeValue} from '../../../../shared/model/interaction-details/type.value';
import {CvTerm} from "../../../../shared/model/interaction-details/cv-term.model";

@Component({
  selector: 'ip-confidences',
  templateUrl: './confidences.component.html',
  styleUrls: ['./confidences.component.css']
})
export class ConfidencesComponent implements OnInit {

  @Input() confidences: TypeValue<CvTerm>[];

  constructor() { }

  ngOnInit() {
  }

}
