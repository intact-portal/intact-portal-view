import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailsDashboardComponent} from './details-dashboard.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ActivatedRouteStub} from "../../../testing/activated-route-stub";
import {DownloadService} from "../shared/service/download/download.service";

describe('DetailsDashboardComponent', () => {
  let component: DetailsDashboardComponent;
  let fixture: ComponentFixture<DetailsDashboardComponent>;
  const downloads = jasmine.createSpy('downloads');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsDashboardComponent],
      providers: [
        {provide: ActivatedRoute, useValue: new ActivatedRouteStub({id: 'EBI-8787011'})},
        {provide: DownloadService, useValue: downloads}
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
