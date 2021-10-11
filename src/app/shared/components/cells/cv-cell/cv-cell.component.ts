import {Component, Input, OnInit} from '@angular/core';
import {CvTerm} from '../../../../interactions/shared/model/interaction-details/cv-term.model';

@Component({
  selector: 'ip-cv-cell',
  templateUrl: './cv-cell.component.html',
  styleUrls: ['./cv-cell.component.css']
})
export class CvCellComponent implements OnInit {

  @Input() cv: CvTerm;
  @Input() term: string;
  @Input() miId: string;


  constructor() {
  }

  ngOnInit(): void {
    this.cv = this.cv || {shortName: this.term, identifier: this.miId}
  }

}
