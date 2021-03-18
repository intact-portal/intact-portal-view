import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractionsViewerComponent} from './interactions-viewer.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {TableFactoryService} from "../../shared/service/table-factory.service";
import {SearchService} from "../../../home-dashboard/search/service/search.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ActivatedRouteStub} from "../../../../testing/activated-route-stub";
import {NetworkViewService} from "../../shared/service/network-view.service";
import {NetworkSearchService} from "../../shared/service/network-search.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

const router = jasmine.createSpyObj('Router', ['navigate']);
describe('InteractionsViewerComponent', () => {
  let component: InteractionsViewerComponent;
  let fixture: ComponentFixture<InteractionsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionsViewerComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        TableFactoryService,
        SearchService,
        NetworkViewService,
        NetworkSearchService,
        {provide: ActivatedRoute, useValue: new ActivatedRouteStub({query: 'stat3'})},
        {provide: Router, useValue: router},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
