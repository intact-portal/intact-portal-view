import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegativeFilterComponent } from './negative-filter.component';

describe('NegativeFilterComponent', () => {
  let component: NegativeFilterComponent;
  let fixture: ComponentFixture<NegativeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NegativeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NegativeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
