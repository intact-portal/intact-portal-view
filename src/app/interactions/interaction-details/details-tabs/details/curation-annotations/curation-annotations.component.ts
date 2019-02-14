import {Component, Input, OnInit} from '@angular/core';
import {TypeValueModel} from '../../../../shared/model/interaction-details/type-value.model';

@Component({
  selector: 'iv-curation-annotations',
  templateUrl: './curation-annotations.component.html',
  styleUrls: ['./curation-annotations.component.css']
})
export class CurationAnnotationsComponent implements OnInit {

  @Input() annotations: TypeValueModel[];

  constructor() { }

  ngOnInit() {
  }

}
