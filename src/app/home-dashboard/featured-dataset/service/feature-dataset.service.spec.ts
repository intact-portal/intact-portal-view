import {getTestBed, inject, TestBed} from '@angular/core/testing';

import {FeatureDatasetService} from './feature-dataset.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('FeatureDatasetService', () => {
  let injector: TestBed;
  let service: FeatureDatasetService;
  let httpMock: HttpTestingController;
  const reporter = jasmine.createSpy('reporter');

  beforeEach(() => {
    TestBed.configureTestingModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [],
    providers: [
        FeatureDatasetService,
        { provide: GoogleAnalyticsService, useValue: reporter },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
});
    injector = getTestBed();
    service = injector.inject(FeatureDatasetService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', inject([FeatureDatasetService], (service: FeatureDatasetService) => {
    expect(service).toBeTruthy();
  }));
});
