import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidencesComponent } from './confidences.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('ConfidencesComponent', () => {
  let component: ConfidencesComponent;
  let fixture: ComponentFixture<ConfidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidencesComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidencesComponent);
    component = fixture.componentInstance;
    component.confidences = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
