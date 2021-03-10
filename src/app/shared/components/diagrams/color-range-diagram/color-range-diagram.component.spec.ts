import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorRangeDiagramComponent } from './color-range-diagram.component';

describe('RangeDiagramComponent', () => {
  let component: ColorRangeDiagramComponent;
  let fixture: ComponentFixture<ColorRangeDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorRangeDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorRangeDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
