import { TestBed, inject } from '@angular/core/testing';

import { NetworkViewService } from './network-view.service';

describe('NetworkViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetworkViewService]
    });
  });

  it('should be created', inject([NetworkViewService], (service: NetworkViewService) => {
    expect(service).toBeTruthy();
  }));
});
