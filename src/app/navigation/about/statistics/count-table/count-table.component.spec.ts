import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountTableComponent } from './count-table.component';

describe('CountTableComponent', () => {
  let component: CountTableComponent;
  let fixture: ComponentFixture<CountTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
