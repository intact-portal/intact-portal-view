import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentalConditionsComponent } from './experimental-conditions.component';

describe('ExperimentalConditionsComponent', () => {
  let component: ExperimentalConditionsComponent;
  let fixture: ComponentFixture<ExperimentalConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentalConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentalConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
