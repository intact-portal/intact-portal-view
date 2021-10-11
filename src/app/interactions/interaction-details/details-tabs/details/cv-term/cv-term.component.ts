import {Component, Input, OnInit} from '@angular/core';
import {CvTerm} from '../../../../shared/model/interaction-details/cv-term.model';

@Component({
  selector: 'ip-cv-term',
  templateUrl: './cv-term.component.html',
  styleUrls: ['./cv-term.component.css']
})
export class CvTermComponent implements OnInit {

  @Input() cvTerm: CvTerm
  description: string;

  constructor() {
  }

  ngOnInit() {
  }
}
