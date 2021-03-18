import {inject, TestBed} from '@angular/core/testing';

import {InteractionsDetailsService} from './interactions-details.service';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('InteractionsDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InteractionsDetailsService],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should be created', inject([InteractionsDetailsService], (service: InteractionsDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
