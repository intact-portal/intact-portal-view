import {Component, Input, OnInit} from '@angular/core';
import {Id} from '../../../../interactions/shared/model/interaction-details/id.model';

@Component({
  selector: 'ip-identifier-cell',
  templateUrl: './identifier-cell.component.html',
  styleUrls: ['./identifier-cell.component.css']
})
export class IdentifierCellComponent implements OnInit {

  @Input() id: Id;

  constructor() {
  }

  ngOnInit(): void {
  }

}
