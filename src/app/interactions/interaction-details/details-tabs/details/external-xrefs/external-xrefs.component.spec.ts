import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalXrefsComponent } from './external-xrefs.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('ExternalXrefsComponent', () => {
  let component: ExternalXrefsComponent;
  let fixture: ComponentFixture<ExternalXrefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalXrefsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalXrefsComponent);
    component = fixture.componentInstance;
    component.xrefs = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
