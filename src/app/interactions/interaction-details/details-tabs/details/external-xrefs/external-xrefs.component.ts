import {Component, Input, OnInit} from '@angular/core';
import {CrossReference} from "../../../../shared/model/interaction-details/cross-reference.model";


@Component({
  selector: 'ip-external-xrefs',
  templateUrl: './external-xrefs.component.html',
  styleUrls: ['./external-xrefs.component.css']
})
export class ExternalXrefsComponent implements OnInit {

  @Input() xrefs: CrossReference[];

  constructor() { }

  ngOnInit() {
  }

}
