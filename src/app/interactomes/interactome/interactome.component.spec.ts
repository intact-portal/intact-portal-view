import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractomeComponent} from './interactome.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {SearchService} from "../../home-dashboard/search/service/search.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivatedRouteStub} from "../../../testing/activated-route-stub";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Interactome} from "../interactome.model";
import {GoogleAnalyticsService} from "../../shared/service/google-analytics/google-analytics.service";

describe('InteractomeComponent', () => {
  let component: InteractomeComponent;
  let fixture: ComponentFixture<InteractomeComponent>;
  const reporter = jasmine.createSpy('reporter');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InteractomeComponent],
      providers: [
        SearchService,
        {provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate'])},
        {provide: ActivatedRoute, useValue: new ActivatedRouteStub({query: 'stat3'})},
        {provide: GoogleAnalyticsService, useValue: reporter}
      ],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractomeComponent);
    component = fixture.componentInstance;
    component.interactome = new Interactome('Homo sapiens','','','',9606)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
