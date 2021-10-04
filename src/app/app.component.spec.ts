import {async, TestBed} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ActivatedRoute, Router, RouterEvent} from '@angular/router';
import {ActivatedRouteStub} from '../testing/activated-route-stub';
import {ReplaySubject} from 'rxjs';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

const activatedRoute = new ActivatedRouteStub();

describe('AppComponent', () => {
  let routerEventRelaySubject: ReplaySubject<RouterEvent>;
  let routerMock;
  const analytics = jasmine.createSpy('analytics');


  beforeEach(async(() => {
    routerEventRelaySubject = new ReplaySubject<RouterEvent>(1);
    routerMock = {
      events: routerEventRelaySubject.asObservable()
    };
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {provide: Router, useValue: routerMock},
        {provide: ActivatedRoute, useValue: activatedRoute},
        {provide: GoogleAnalyticsService, useValue: analytics}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'IntAct'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('IntAct');
  }));
});
