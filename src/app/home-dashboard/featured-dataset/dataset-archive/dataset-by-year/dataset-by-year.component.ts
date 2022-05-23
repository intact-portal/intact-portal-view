import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Dataset} from '../../model/dataset.model';
import {environment} from '../../../../../environments/environment';
import {PubmedDataset} from '../../model/pubmed-dataset.model';
import {Router} from '@angular/router';
import {SearchService} from '../../../search/service/search.service';


const intactFTP_URL = environment.intact_psi25_url;
const intactFTPMiTab_URL = environment.intact_psimitab_url;

@Component({
  selector: 'ip-dataset-by-year',
  templateUrl: './dataset-by-year.component.html',
  styleUrls: ['./dataset-by-year.component.css']
})
export class DatasetByYearComponent implements AfterViewInit {

  @Input() year: string;

  @Input() datasets: Dataset[]

  constructor(private search: SearchService) {
  }

  ngAfterViewInit(): void {
    $(`#accordion-${this.year}`).foundation();
    $('.accordion-title').on('mouseup', function () {
      const $accordionItem = $(this).parent(),
        // is the section hidden? if the section is not yet visible, the click is to open it
        opening = ($accordionItem.find('.accordion-content:hidden').length === 1);
      //
      if (opening) {
        // the accordion that has just been clicked
        const $currentAccordion = $accordionItem.parent();

        // close all other accodions
        $('.accordion').each(function () {
          const $acc = $(this);

          // ignore the accordion that was just clicked
          if ($acc[0] !== $currentAccordion[0]) {
            // find any open sections
            const $openSections = $acc.find('.accordion-item.is-active .accordion-content');
            $openSections.each(function (i, section) {
              // close them
              $acc.foundation('up', $(section));
            });
          }
        });
      }
    });
  }

  searchIntAct(pubmedId: string, pubmedAuthor: string) {
    this.search.search(`pubid:${pubmedId}`, `publication: ${pubmedAuthor} (${pubmedId})`);
  }

  goPSIMI25FTP(pubmedYear: string, pubmedId: string) {
    window.open(intactFTP_URL + `/pmid/${pubmedYear}/${pubmedId}.zip`);
  }

  goPSIMITABFTP(pubmedYear: string, pubmedId: string) {
    window.open(intactFTPMiTab_URL + `/${pubmedYear}/${pubmedId}.txt`);
  }

  hasPubMedId(pubMed: PubmedDataset): boolean {
    return !pubMed.id.toString().includes('unassigned');
  }
}
