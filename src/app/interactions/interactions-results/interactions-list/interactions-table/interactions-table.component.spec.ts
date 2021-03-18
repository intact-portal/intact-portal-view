import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractionsTableComponent} from './interactions-table.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {TableFactoryService} from "../../../shared/service/table-factory.service";
import {SearchService} from "../../../../home-dashboard/search/service/search.service";
import {ActivatedRouteStub} from "../../../../../testing/activated-route-stub";
import {NetworkSelectionService} from "../../../shared/service/network-selection.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('InteractionsTableComponent', () => {
  let component: InteractionsTableComponent;
  let fixture: ComponentFixture<InteractionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InteractionsTableComponent],
      providers: [
        TableFactoryService,
        NetworkSelectionService,
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
    fixture = TestBed.createComponent(InteractionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
