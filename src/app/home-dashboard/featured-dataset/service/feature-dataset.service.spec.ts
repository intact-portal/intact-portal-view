import {getTestBed, inject, TestBed} from '@angular/core/testing';

import {FeatureDatasetService} from './feature-dataset.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

describe('FeatureDatasetService', () => {
  let injector: TestBed;
  let service: FeatureDatasetService;
  let httpMock: HttpTestingController;
  const reporter = jasmine.createSpy('reporter');

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FeatureDatasetService,
        {provide: GoogleAnalyticsService, useValue: reporter}
      ],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
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
