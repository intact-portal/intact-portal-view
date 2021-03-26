import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractionsTableComponent} from './interactions-table.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {TableFactoryService} from "../../../shared/service/table-factory.service";
import {SearchService} from "../../../../home-dashboard/search/service/search.service";
import {ActivatedRouteStub} from "../../../../../testing/activated-route-stub";
import {NetworkSelectionService} from "../../../shared/service/network-selection.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {GoogleAnalyticsService} from "../../../../shared/service/google-analytics/google-analytics.service";
import {FilterService} from "../../../shared/service/filter.service";

describe('InteractionsTableComponent', () => {
  let component: InteractionsTableComponent;
  let fixture: ComponentFixture<InteractionsTableComponent>;
  const reporter = jasmine.createSpyObj('reporter',['toParams', 'fromParams']);
  const filters = jasmine.createSpyObj('filters',['toParams', 'fromParams']);
  const search = jasmine.createSpyObj('search',['toParams', 'fromParams']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InteractionsTableComponent],
      providers: [
        TableFactoryService,
        NetworkSelectionService,
        SearchService,
        {provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate'])},
        {provide: ActivatedRoute, useValue: new ActivatedRouteStub()},
        {provide: SearchService, useValue: search},
        {provide: FilterService, useValue: filters},
        {provide: GoogleAnalyticsService, useValue: reporter}
      ],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
