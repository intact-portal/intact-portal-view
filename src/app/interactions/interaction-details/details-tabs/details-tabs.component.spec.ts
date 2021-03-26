import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailsTabsComponent} from './details-tabs.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {InteractionsDetailsService} from "../../shared/service/interactions-details.service";
import {HttpClientTestingModule, HttpTestingController, TestRequest} from "@angular/common/http/testing";
import {environment} from "../../../../environments/environment";
import {FeatureDatasetService} from "../../../home-dashboard/featured-dataset/service/feature-dataset.service";
import {GoogleAnalyticsService} from "../../../shared/service/google-analytics/google-analytics.service";

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
      providers: [
        InteractionsDetailsService,
        {provide: GoogleAnalyticsService, useValue: reporter}
      ],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
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
