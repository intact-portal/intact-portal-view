import {inject, TestBed} from '@angular/core/testing';

import {NetworkSearchService} from './network-search.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import {SearchService} from '../../../home-dashboard/search/service/search.service';
import {FilterService} from './filter.service';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('NetworkSearchService', () => {
  const reporter = jasmine.createSpy('reporter');
  const search = jasmine.createSpy('search');
  const filters = jasmine.createSpy('filters');
  beforeEach(() => {
    TestBed.configureTestingModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [],
    providers: [
        NetworkSearchService,
        { provide: GoogleAnalyticsService, useValue: reporter },
        { provide: SearchService, useValue: search },
        { provide: FilterService, useValue: filters },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),
    ]
});
  });

  it('should be created', inject([NetworkSearchService], (service: NetworkSearchService) => {
    expect(service).toBeTruthy();
  }));
});
