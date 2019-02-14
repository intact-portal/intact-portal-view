import {Component, Input, OnInit} from '@angular/core';
import {Xreferences} from '../../../../shared/model/interaction-details/xreferences.model';

@Component({
  selector: 'iv-external-xrefs',
  templateUrl: './external-xrefs.component.html',
  styleUrls: ['./external-xrefs.component.css']
})
export class ExternalXrefsComponent implements OnInit {

  @Input() xrefs: Xreferences[];

  constructor() { }

  ngOnInit() {
  }

}
