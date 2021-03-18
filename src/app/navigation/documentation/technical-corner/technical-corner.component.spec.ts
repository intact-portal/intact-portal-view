import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalCornerComponent } from './technical-corner.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('TechnicalCornerComponent', () => {
  let component: TechnicalCornerComponent;
  let fixture: ComponentFixture<TechnicalCornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalCornerComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
