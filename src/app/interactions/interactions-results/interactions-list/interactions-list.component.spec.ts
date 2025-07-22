import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractionsListComponent} from './interactions-list.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {InteractionsTableComponent} from "./interactions-table/interactions-table.component";
import {InteractorsTableComponent} from "./interactors-table/interactors-table.component";
import {TableFactoryService} from "../../shared/service/table-factory.service";
import {NetworkSelectionService} from "../../shared/service/network-selection.service";
import {SearchService} from "../../../home-dashboard/search/service/search.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivatedRouteStub} from "../../../../testing/activated-route-stub";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {GoogleAnalyticsService} from "../../../shared/service/google-analytics/google-analytics.service";
import {FilterService} from "../../shared/service/filter.service";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('InteractionsListComponent', () => {
  let component: InteractionsListComponent;
  let fixture: ComponentFixture<InteractionsListComponent>;
  const reporter = jasmine.createSpy('reporter');
  const filters = jasmine.createSpyObj('filters', ['toParams']);
  const search = jasmine.createSpy('search');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [InteractionsListComponent],
    schemas: [NO_ERRORS_SCHEMA],
    imports: [],
    providers: [
        TableFactoryService,
        NetworkSelectionService,
        SearchService,
        { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
        { provide: ActivatedRoute, useValue: new ActivatedRouteStub() },
        { provide: SearchService, useValue: search },
        { provide: FilterService, useValue: filters },
        { provide: GoogleAnalyticsService, useValue: reporter },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
