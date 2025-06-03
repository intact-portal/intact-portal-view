import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {Format} from '../../../shared/model/download/format.model';
import {Filter, FilterService} from '../../../shared/service/filter.service';
import {SearchService} from '../../../../home-dashboard/search/service/search.service';
import {NetworkSelectionService} from '../../../shared/service/network-selection.service';
import {HttpClient} from '@angular/common/http';
import {saveAs} from 'file-saver';
import {formatDate} from '@angular/common';

const baseURL = environment.intact_portal_graph_ws;

@Component({
  selector: 'ip-download-form',
  templateUrl: './download-form.component.html',
  styleUrls: ['./download-form.component.css']
})
export class DownloadFormComponent implements OnInit {
  @Input() format: Format = Format.json;
  @Input() last: boolean = false;

  readonly URL = `${baseURL}/graph/export/interaction/list/body`;

  constructor(private filters: FilterService,
              private search: SearchService,
              private selection: NetworkSelectionService,
              private http: HttpClient) {
  }

  ngOnInit() {
  }

  download() {
    const body: any = {
      format: this.format.name,
      query: this.search.spacedQuery,
      advancedSearch: this.search.isAdvancedSearch,
      batchSearch: this.search.isBatchSearch,
      mutationFilter: this.filters.mutation,
      expansionFilter: this.filters.expansion,
      intraSpecies: this.filters.intraSpecies,
      negativeFilter: this.filters.negative,
      interactorAcs: this.selection.interactorAcs,
      binaryInteractionIds: this.selection.binaryInteractionIds,
      minMIScore: this.filters.currentMinMIScore,
      maxMIScore: this.filters.currentMaxMIScore,
      interactorSpeciesFilter: this.filters.getFilter(Filter.SPECIES),
      interactorTypesFilter: this.filters.getFilter(Filter.INTERACTOR_TYPE),
      interactionTypesFilter: this.filters.getFilter(Filter.INTERACTION_TYPE),
      interactionDetectionMethodsFilter: this.filters.getFilter(Filter.DETECTION_METHOD),
      interactionHostOrganismsFilter: this.filters.getFilter(Filter.HOST_ORGANISM),
    };
    const formattedDate = formatDate(new Date(), 'yyyy-MM-dd-hh-mm', 'en-GB');
    const filename = `${formattedDate}.${this.format.extension}`;
    this.http.post(this.URL, body, {
      responseType: 'blob',
      headers: {'Content-Type': 'application/json'}
    }).subscribe(
        data => {
          saveAs(data, filename);
        },
        err => {
          alert('Problem exporting search results.');
          console.error(err);
        }
    );
  }
}
