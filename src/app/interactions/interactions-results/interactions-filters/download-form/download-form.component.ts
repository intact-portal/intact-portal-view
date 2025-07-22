import {Component, OnInit, input} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {Format} from '../../../shared/model/download/format.model';
import {Filter, FilterService} from '../../../shared/service/filter.service';
import {SearchService} from '../../../../home-dashboard/search/service/search.service';
import {NetworkSelectionService} from '../../../shared/service/network-selection.service';

const baseURL = environment.intact_portal_graph_ws;

@Component({
    selector: 'ip-download-form',
    templateUrl: './download-form.component.html',
    styleUrls: ['./download-form.component.css'],
    standalone: false
})
export class DownloadFormComponent implements OnInit {
  readonly format = input<Format>(Format.json);
  readonly last = input<boolean>(false);

  filterTypes = Filter;
  readonly URL = `${baseURL}/graph/export/interaction/list`;

  constructor(public filters: FilterService, public search: SearchService, public selection: NetworkSelectionService) {
  }

  ngOnInit() {
  }

}
