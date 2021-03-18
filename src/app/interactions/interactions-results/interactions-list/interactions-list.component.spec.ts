import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractionsListComponent} from './interactions-list.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {InteractionsTableComponent} from "./interactions-table/interactions-table.component";
import {InteractorsTableComponent} from "./interactors-table/interactors-table.component";
import {TableFactoryService} from "../../shared/service/table-factory.service";
import {NetworkSelectionService} from "../../shared/service/network-selection.service";
import {SearchService} from "../../../home-dashboard/search/service/search.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivatedRouteStub} from "../../../../testing/activated-route-stub";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('InteractionsListComponent', () => {
  let component: InteractionsListComponent;
  let fixture: ComponentFixture<InteractionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        TableFactoryService,
        NetworkSelectionService,
        SearchService,
        {provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate'])},
        {provide: ActivatedRoute, useValue: new ActivatedRouteStub({query:'stat3'})},
      ],
      declarations: [InteractionsListComponent, InteractionsTableComponent, InteractorsTableComponent],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
