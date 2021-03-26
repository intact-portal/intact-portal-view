import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DownloadFormComponent} from './download-form.component';
import {SearchService} from "../../../../home-dashboard/search/service/search.service";
import {FilterService} from "../../../shared/service/filter.service";
import {NetworkSelectionService} from "../../../shared/service/network-selection.service";
import {Format} from "../../../shared/model/download/format.model";

describe('DownloadFormComponent', () => {
  let component: DownloadFormComponent;
  let fixture: ComponentFixture<DownloadFormComponent>;
  const filters = jasmine.createSpy('filters');
  const search = jasmine.createSpy('search');
  const selection = jasmine.createSpy('selection');
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DownloadFormComponent],
      providers: [
        {provide: SearchService, useValue: search},
        {provide: FilterService, useValue: filters},
        {provide: NetworkSelectionService, useValue: selection},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadFormComponent);
    component = fixture.componentInstance;
    component.format = Format.json;
    component.last = true;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
