import {Component, Input, OnInit} from '@angular/core';
import {Organism} from '../../../../interactions/shared/model/interaction-details/organism.model';

@Component({
  selector: 'ip-organism-cell',
  templateUrl: './organism-cell.component.html',
  styleUrls: ['./organism-cell.component.css']
})
export class OrganismCellComponent implements OnInit {

  @Input() organism: Organism;
  @Input() scientificName: string;
  @Input() taxId: number;

  url: string;

  constructor() {
  }

  ngOnInit(): void {
    this.organism = this.organism || {scientificName: this.scientificName, taxId: this.taxId};
    if (parseInt(this.organism.taxId, 10) > 0) {
      this.url = `https://www.uniprot.org/taxonomy/${this.organism.taxId}`;
    }
  }
}
