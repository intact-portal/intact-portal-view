import { TestBed, inject } from '@angular/core/testing';

import { TableFactoryService } from './table-factory.service';

describe('ResultTableFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableFactoryService]
    });
  });

  it('should be created', inject([TableFactoryService], (service: TableFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
