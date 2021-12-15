import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DensitySliderComponent } from './density-slider.component';

describe('HistogramSliderComponent', () => {
  let component: DensitySliderComponent;
  let fixture: ComponentFixture<DensitySliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DensitySliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DensitySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
