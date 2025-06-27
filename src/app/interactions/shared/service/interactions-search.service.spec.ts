import {inject, TestBed} from '@angular/core/testing';

import {InteractionsSearchService} from './interactions-search.service';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {GoogleAnalyticsService} from "../../../shared/service/google-analytics/google-analytics.service";
import {SearchService} from "../../../home-dashboard/search/service/search.service";
import {FilterService} from "./filter.service";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('InteractionsSearchService', () => {
  const reporter = jasmine.createSpy('reporter');
  const search = jasmine.createSpy('search');
  const filters = jasmine.createSpy('filters');

  beforeEach(() => {
    TestBed.configureTestingModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [],
    providers: [
        InteractionsSearchService,
        { provide: GoogleAnalyticsService, useValue: reporter },
        { provide: SearchService, useValue: search },
        { provide: FilterService, useValue: filters },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ]
});
  });

  it('should be created', inject([InteractionsSearchService], (service: InteractionsSearchService) => {
    expect(service).toBeTruthy();
  }));
});
