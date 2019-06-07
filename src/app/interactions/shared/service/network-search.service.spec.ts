import { TestBed, inject } from '@angular/core/testing';

import { NetworkSearchService } from './network-search.service';

describe('NetworkSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetworkSearchService]
    });
  });

  it('should be created', inject([NetworkSearchService], (service: NetworkSearchService) => {
    expect(service).toBeTruthy();
  }));
});
