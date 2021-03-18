import {TestBed, inject, getTestBed, async} from '@angular/core/testing';

import {FeatureDatasetService} from './feature-dataset.service';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('FeatureDatasetService', () => {
  let injector: TestBed;
  let service: FeatureDatasetService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureDatasetService],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
    injector = getTestBed();
    service = injector.get(FeatureDatasetService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should be created', inject([FeatureDatasetService], (service: FeatureDatasetService) => {
    expect(service).toBeTruthy();
  }));
});
