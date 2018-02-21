import { TestBed, inject } from '@angular/core/testing';

import { FeatureDatasetService } from './feature-dataset.service';

describe('FeatureDatasetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureDatasetService]
    });
  });

  it('should be created', inject([FeatureDatasetService], (service: FeatureDatasetService) => {
    expect(service).toBeTruthy();
  }));
});
