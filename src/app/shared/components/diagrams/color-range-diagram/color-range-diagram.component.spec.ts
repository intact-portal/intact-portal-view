import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ColorRangeDiagramComponent} from './color-range-diagram.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('RangeDiagramComponent', () => {
  let component: ColorRangeDiagramComponent;
  let fixture: ComponentFixture<ColorRangeDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColorRangeDiagramComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorRangeDiagramComponent);
    component = fixture.componentInstance;
    component.rangeMap = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
