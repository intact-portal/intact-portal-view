import {Component, OnInit, input} from '@angular/core';
import {Annotation} from '../../../../shared/model/interaction-details/annotation.model';

@Component({
    selector: 'ip-curation-annotations',
    templateUrl: './curation-annotations.component.html',
    styleUrls: ['./curation-annotations.component.css'],
    standalone: false
})
export class CurationAnnotationsComponent implements OnInit {

  readonly annotations = input<Annotation[]>(undefined);

  constructor() { }

  ngOnInit() {
  }

}
