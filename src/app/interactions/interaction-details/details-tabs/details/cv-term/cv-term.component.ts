import {Component, OnInit, input} from '@angular/core';
import {CvTerm} from "../../../../shared/model/interaction-details/cv-term.model";
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'ip-cv-term',
    templateUrl: './cv-term.component.html',
    styleUrls: ['./cv-term.component.css'],
    standalone: false
})
export class CvTermComponent implements OnInit {

  readonly cvTerm = input<CvTerm>(undefined);
  description: string;

  constructor() {
  }

  ngOnInit() {
  }
}
