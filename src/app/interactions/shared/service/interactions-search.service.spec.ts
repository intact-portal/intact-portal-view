import { TestBed, inject } from '@angular/core/testing';

import { InteractionsSearchService } from './interactions-search.service';

describe('InteractionsSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InteractionsSearchService]
    });
  });

  it('should be created', inject([InteractionsSearchService], (service: InteractionsSearchService) => {
    expect(service).toBeTruthy();
  }));
});
