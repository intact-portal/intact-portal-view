import { TestBed, inject } from '@angular/core/testing';

import { InteractorsSearchService } from './interactors-search.service';

describe('InteractorsSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InteractorsSearchService]
    });
  });

  it('should be created', inject([InteractorsSearchService], (service: InteractorsSearchService) => {
    expect(service).toBeTruthy();
  }));
});
