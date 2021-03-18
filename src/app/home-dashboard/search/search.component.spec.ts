import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchComponent} from './search.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {SearchService} from "./service/search.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivatedRouteStub} from "../../../testing/activated-route-stub";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      providers: [
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
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
