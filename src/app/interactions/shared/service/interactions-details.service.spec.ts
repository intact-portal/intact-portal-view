import { TestBed, inject } from '@angular/core/testing';

import { InteractionsDetailsService } from './interactions-details.service';

describe('InteractionsDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InteractionsDetailsService]
    });
  });

  it('should be created', inject([InteractionsDetailsService], (service: InteractionsDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
