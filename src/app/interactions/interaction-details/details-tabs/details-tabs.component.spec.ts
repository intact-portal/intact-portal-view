import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailsTabsComponent} from './details-tabs.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {InteractionsDetailsService} from "../../shared/service/interactions-details.service";
import { HttpTestingController, TestRequest, provideHttpClientTesting } from "@angular/common/http/testing";
import {environment} from "../../../../environments/environment";
import {FeatureDatasetService} from "../../../home-dashboard/featured-dataset/service/feature-dataset.service";
import {GoogleAnalyticsService} from "../../../shared/service/google-analytics/google-analytics.service";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const baseURL = environment.intact_portal_ws;


describe('DetailsTabsComponent', () => {
  let component: DetailsTabsComponent;
  let fixture: ComponentFixture<DetailsTabsComponent>;
  let httpMock: HttpTestingController;
  let interactionsDetailsService: InteractionsDetailsService;
  let req: TestRequest;
  const reporter = jasmine.createSpy('reporter');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [DetailsTabsComponent],
    schemas: [NO_ERRORS_SCHEMA],
    imports: [],
    providers: [
        InteractionsDetailsService,
        { provide: GoogleAnalyticsService, useValue: reporter },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
}).compileComponents();

    fixture = TestBed.createComponent(DetailsTabsComponent);
    component = fixture.componentInstance;
    component.interactionAc = 'EBI-702075';
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
