import {inject, TestBed} from '@angular/core/testing';

import {GoogleAnalyticsService} from './google-analytics.service';
import {Angulartics2, Angulartics2Module} from "angulartics2";
import {Angulartics2GoogleAnalytics} from "angulartics2/ga";
import {Router, RouterEvent} from "@angular/router";
import {Location} from "@angular/common";
import {ReplaySubject} from "rxjs";
import {Category} from "./types/category-enum";
import {Action} from "./types/action-enum";
import {Label} from "./types/label-enum";

describe('GoogleAnalyticsService', () => {
  let routerEventRelaySubject = new ReplaySubject<RouterEvent>(1);
  let routerMock = {events: routerEventRelaySubject.asObservable()};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GoogleAnalyticsService,
        {provide: Router, useValue: routerMock},
        {
          provide: Location,
          useValue: jasmine.createSpyObj('Location', ['back', 'forward', 'go', 'normalize', 'path', 'subscribe'])
        },
      ],
      imports: [Angulartics2Module.forRoot([Angulartics2GoogleAnalytics])]
    });
  });

  it('should be created', inject([GoogleAnalyticsService], (service: GoogleAnalyticsService) => {
    expect(service).toBeTruthy();
  }));

  it('string label', inject([GoogleAnalyticsService], (service: GoogleAnalyticsService) => {
    let angular: Angulartics2 = TestBed.get(Angulartics2);
    angular.eventTrack.subscribe(value => {
      expect(value.properties.label).toBe('stat3')
    });

    service.report(Category.home, Action.search, 'stat3')
  }));

  it('enum label', inject([GoogleAnalyticsService], (service: GoogleAnalyticsService) => {
    let angular: Angulartics2 = TestBed.get(Angulartics2);
    angular.eventTrack.subscribe(value => {
      expect(value.properties.label).toBe('svg')
    });

    service.report(Category.details, Action.download, Label.svg);
  }))
});
