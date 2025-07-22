import {Component, OnInit, input} from '@angular/core';
import {CrossReference} from "../../../../shared/model/interaction-details/cross-reference.model";


@Component({
    selector: 'ip-external-xrefs',
    templateUrl: './external-xrefs.component.html',
    styleUrls: ['./external-xrefs.component.css'],
    standalone: false
})
export class ExternalXrefsComponent implements OnInit {

  readonly xrefs = input<CrossReference[]>(undefined);

  constructor() { }

  ngOnInit() {
  }

  public extractImexPubId(imexRef: string): string {
    let parts = imexRef.split('-');
    if (parts.length > 2) parts.splice(2, parts.length - 2)
    return parts.join('-')
  }

}
