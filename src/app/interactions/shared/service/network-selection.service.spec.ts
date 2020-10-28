import { TestBed, inject } from '@angular/core/testing';

import { NetworkSelectionService } from './network-selection.service';

describe('NetworkSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetworkSelectionService]
    });
  });

  it('should be created', inject([NetworkSelectionService], (service: NetworkSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
