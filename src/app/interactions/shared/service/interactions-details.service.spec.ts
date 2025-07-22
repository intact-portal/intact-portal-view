import {inject, TestBed} from '@angular/core/testing';

import {InteractionsDetailsService} from './interactions-details.service';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {GoogleAnalyticsService} from "../../../shared/service/google-analytics/google-analytics.service";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('InteractionsDetailsService', () => {
  const reporter = jasmine.createSpy('reporter');
  beforeEach(() => {
    TestBed.configureTestingModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [],
    providers: [InteractionsDetailsService, { provide: GoogleAnalyticsService, useValue: reporter }, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
  });

  it('should be created', inject([InteractionsDetailsService], (service: InteractionsDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
