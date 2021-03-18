import {inject, TestBed} from '@angular/core/testing';

import {InteractionsSearchService} from './interactions-search.service';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('InteractionsSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InteractionsSearchService],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should be created', inject([InteractionsSearchService], (service: InteractionsSearchService) => {
    expect(service).toBeTruthy();
  }));
});
