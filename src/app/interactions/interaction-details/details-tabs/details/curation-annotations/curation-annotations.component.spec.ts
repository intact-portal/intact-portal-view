import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurationAnnotationsComponent } from './curation-annotations.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('CurationAnnotationsComponent', () => {
  let component: CurationAnnotationsComponent;
  let fixture: ComponentFixture<CurationAnnotationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurationAnnotationsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurationAnnotationsComponent);
    component = fixture.componentInstance;
    component.annotations = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
