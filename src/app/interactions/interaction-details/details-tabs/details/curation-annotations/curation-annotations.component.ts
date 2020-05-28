import {Component, Input, OnInit} from '@angular/core';
import {Annotation} from '../../../../shared/model/interaction-details/annotation.model';

@Component({
  selector: 'ip-curation-annotations',
  templateUrl: './curation-annotations.component.html',
  styleUrls: ['./curation-annotations.component.css']
})
export class CurationAnnotationsComponent implements OnInit {

  @Input() annotations: Annotation[];

  constructor() { }

  ngOnInit() {
  }

}
