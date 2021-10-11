import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {ActivatedRoute} from '@angular/router';
import {TableFactoryService} from '../../../shared/service/table-factory.service';
import {NetworkSelectionService} from '../../../shared/service/network-selection.service';
import {SearchService} from '../../../../home-dashboard/search/service/search.service';
import {FilterService} from '../../../shared/service/filter.service';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Interaction} from '../../../shared/model/interactions-results/interaction/interaction.model';
import {Column} from '../../../shared/model/tables/column.model';
import {InteractionTable} from '../../../shared/model/tables/interaction-table.model';
import {Subject} from 'rxjs/Rx';
import {DataTableDirective} from 'angular-datatables';

class DataTablesResponse<T> {
  data: T[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

const baseURL = environment.intact_portal_ws;

@UntilDestroy()
@Component({
  selector: 'ip-interactions-table-two',
  templateUrl: './interactions-table-two.component.html',
  styleUrls: ['./interactions-table-two.component.css']
})
export class InteractionsTableTwoComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  dtOptions: DataTables.Settings;
  interactions: Interaction[];
  columns: Column[] = new InteractionTable();
  trigger: Subject<any> = new Subject<any>();

  @ViewChild(DataTableDirective, {static: false})
  dtElement: DataTableDirective;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private tableFactory: TableFactoryService,
    private networkSelection: NetworkSelectionService,
    private search: SearchService,
    private filters: FilterService
  ) {
  }

  ngOnInit(): void {
    this.dtOptions = {
      ordering: false,
      searching: false,
      paging: true,
      lengthMenu: [25, 50, 75, 100, 150, 200, 500],
      pageLength: 25,
      pagingType: 'numbers',
      processing: true,
      serverSide: true,
      dom: '<"top"filp>rt<"bottom"ifp>',
      scrollX: true,
      fixedHeader: false,
      columns: this.columns,
      drawCallback: () => {
      },
      ajax: (d: any, callback) => {
        d.page = d.start / d.length;
        d.pageSize = d.length;
        this.search.toParams(d);
        this.networkSelection.toParams(d);
        this.filters.toParams(d);
        this.http
          .post<DataTablesResponse<Interaction>>(`${baseURL}/interaction/list/`, new HttpParams({fromObject: d}))
          .pipe(untilDestroyed(this))
          .subscribe(resp => {
            this.interactions = resp.data;
            // callback({
            //   recordsTotal: resp.recordsTotal,
            //   recordsFiltered: resp.recordsFiltered,
            //   data: resp.data
            // })
            this.trigger.next(this.dtOptions);
          })
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.trigger.next(this.dtOptions);
  }


  ngAfterViewInit(): void {
    // this.trigger.next(this.dtOptions);
    this.rerender();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.trigger.next(this.dtOptions);
    });
  }

  ngOnDestroy(): void {
    this.trigger.unsubscribe();
  }

  detailUrl(interaction: Interaction) {
    return `${environment.context_path}/details/interaction/${interaction.ac}`;
  }



}
