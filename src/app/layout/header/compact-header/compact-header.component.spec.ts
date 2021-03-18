import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactHeaderComponent } from './compact-header.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('CompactHeaderComponent', () => {
  let component: CompactHeaderComponent;
  let fixture: ComponentFixture<CompactHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompactHeaderComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
