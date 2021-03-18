import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractionsResultsComponent} from './interactions-results.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {SearchService} from "../../home-dashboard/search/service/search.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivatedRouteStub} from "../../../testing/activated-route-stub";
import {InteractionsSearchService} from "../shared/service/interactions-search.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('InteractionsComponent', () => {
  let component: InteractionsResultsComponent;
  let fixture: ComponentFixture<InteractionsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionsResultsComponent ],
      providers: [
        InteractionsSearchService,
        SearchService,
        {provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate'])},
        {provide: ActivatedRoute, useValue: new ActivatedRouteStub({query:'stat3'})},
      ],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
