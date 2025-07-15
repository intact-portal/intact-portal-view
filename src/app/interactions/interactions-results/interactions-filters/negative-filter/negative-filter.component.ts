import { Component, OnInit } from '@angular/core';
import {Filter, FilterService} from '../../../shared/service/filter.service';
import {NegativeFilterStatus} from './negative-filter-status.model';

@Component({
    selector: 'ip-negative-filter',
    templateUrl: './negative-filter.component.html',
    styleUrls: ['./negative-filter.component.css'],
    standalone: false
})
export class NegativeFilterComponent implements OnInit {
  public STATUS = NegativeFilterStatus;
  public FILTER = Filter;

  constructor(public filters: FilterService) { }

  ngOnInit(): void {
  }

}
