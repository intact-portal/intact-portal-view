import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractorsTableComponent} from './interactors-table.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {SearchService} from "../../../../home-dashboard/search/service/search.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivatedRouteStub} from "../../../../../testing/activated-route-stub";
import {TableFactoryService} from "../../../shared/service/table-factory.service";
import {NetworkSelectionService} from "../../../shared/service/network-selection.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('InteractorsTableComponent', () => {
  let component: InteractorsTableComponent;
  let fixture: ComponentFixture<InteractorsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InteractorsTableComponent],
      providers: [
        TableFactoryService,
        NetworkSelectionService,
        SearchService,
        {provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate'])},
        {provide: ActivatedRoute, useValue: new ActivatedRouteStub({query: 'stat3'})},
      ],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
