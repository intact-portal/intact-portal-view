import {inject, TestBed} from '@angular/core/testing';

import {NetworkSearchService} from './network-search.service';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('NetworkSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetworkSearchService],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should be created', inject([NetworkSearchService], (service: NetworkSearchService) => {
    expect(service).toBeTruthy();
  }));
});
