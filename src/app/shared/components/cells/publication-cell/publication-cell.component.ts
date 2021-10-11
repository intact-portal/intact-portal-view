import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {PublicationRef, PublicationsParserPipe} from '../../../pipes/publications-parser.pipe';

const ebiURL = environment.ebi_url;

@Component({
  selector: 'ip-publication-cell',
  templateUrl: './publication-cell.component.html',
  styleUrls: ['./publication-cell.component.css']
})
export class PublicationCellComponent implements OnInit {

  @Input() publicationString: string;
  @Input() publication: PublicationRef;

  url: string;
  id: string;
  source: string;

  constructor() {
  }

  ngOnInit(): void {
    this.publication = this.publication || PublicationsParserPipe.stringToPublication(this.publicationString);
    if (this.publication.source === 'pubmed' && !this.publication.id.includes('unassigned')) {
      this.url = 'https://europepmc.org/article/MED/' + this.publication.id;
    } else if (this.publication.source === 'imex') {
      this.url = ebiURL + '/intact/imex/main.xhtml?query=' + this.publication.id;
    } else if (this.publication.source === 'doi') {
      this.url = 'https://www.doi.org/' + this.publication.id;
    }
  }

}
