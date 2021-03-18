import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BatchSearchComponent} from './batch-search.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {SearchService} from "../search/service/search.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivatedRouteStub} from "../../../testing/activated-route-stub";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('BatchSearchComponent', () => {
  let component: BatchSearchComponent;
  let fixture: ComponentFixture<BatchSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BatchSearchComponent],
      imports: [HttpClientTestingModule],
      providers: [
        SearchService,
        {provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate'])},
        {provide: ActivatedRoute, useValue: new ActivatedRouteStub({query: 'stat3'})},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
