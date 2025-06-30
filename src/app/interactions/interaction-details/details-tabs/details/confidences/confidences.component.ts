import {Component, OnInit, input} from '@angular/core';
import {TypeValueModel} from '../../../../shared/model/interaction-details/type-value.model';
import {CvTerm} from "../../../../shared/model/interaction-details/cv-term.model";

@Component({
    selector: 'ip-confidences',
    templateUrl: './confidences.component.html',
    styleUrls: ['./confidences.component.css'],
    standalone: false
})
export class ConfidencesComponent implements OnInit {

  readonly confidences = input<TypeValueModel<CvTerm>[]>(undefined);

  constructor() { }

  ngOnInit() {
  }

}
