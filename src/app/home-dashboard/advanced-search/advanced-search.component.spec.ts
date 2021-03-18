import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSearchComponent } from './advanced-search.component';
import {QueryBuilderComponent, QueryBuilderModule} from "angular2-query-builder";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('AdvancedSearchComponent', () => {
  let component: AdvancedSearchComponent;
  let fixture: ComponentFixture<AdvancedSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedSearchComponent, QueryBuilderComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
