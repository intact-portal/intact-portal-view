import {inject, TestBed} from '@angular/core/testing';

import {SearchService} from './search.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivatedRouteStub} from '../../../../testing/activated-route-stub';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
describe('SearchService', () => {
  const reporter = jasmine.createSpy('reporter');
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SearchService,
        {provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate'])},
        {provide: ActivatedRoute, useValue: new ActivatedRouteStub({query: 'stat3'})},
        {provide: GoogleAnalyticsService, useValue: reporter}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should be created', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));
});
