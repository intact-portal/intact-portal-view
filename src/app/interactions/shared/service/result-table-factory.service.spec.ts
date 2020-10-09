import { TestBed, inject } from '@angular/core/testing';

import { ResultTableFactoryService } from './result-table-factory.service';

describe('ResultTableFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultTableFactoryService]
    });
  });

  it('should be created', inject([ResultTableFactoryService], (service: ResultTableFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
