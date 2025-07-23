import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractionsViewerComponent} from './interactions-viewer.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {TableFactoryService} from "../../shared/service/table-factory.service";
import {SearchService} from "../../../home-dashboard/search/service/search.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivatedRouteStub} from "../../../../testing/activated-route-stub";
import {NetworkViewService} from "../../shared/service/network-view.service";
import {NetworkSearchService} from "../../shared/service/network-search.service";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {GoogleAnalyticsService} from "../../../shared/service/google-analytics/google-analytics.service";
import {FilterService} from "../../shared/service/filter.service";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const router = jasmine.createSpyObj('Router', ['navigate']);
describe('InteractionsViewerComponent', () => {
  let component: InteractionsViewerComponent;
  let fixture: ComponentFixture<InteractionsViewerComponent>;
  const reporter = jasmine.createSpy('reporter');
  const filters = jasmine.createSpyObj('filters', ['toParams', 'fromParams', 'updates']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [InteractionsViewerComponent],
    schemas: [NO_ERRORS_SCHEMA],
    imports: [],
    providers: [
        TableFactoryService,
        SearchService,
        NetworkViewService,
        NetworkSearchService,
        { provide: ActivatedRoute, useValue: new ActivatedRouteStub() },
        { provide: Router, useValue: router },
        { provide: FilterService, useValue: filters },
        { provide: GoogleAnalyticsService, useValue: reporter },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsViewerComponent);
    component = fixture.componentInstance;
    component.visible = true;
    component.legend = {} as any;
    component.interactionsJSON = {};
    component.hasMutation = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
