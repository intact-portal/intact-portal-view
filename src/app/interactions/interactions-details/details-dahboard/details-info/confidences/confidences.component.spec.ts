import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidencesComponent } from './confidences.component';

describe('ConfidencesComponent', () => {
  let component: ConfidencesComponent;
  let fixture: ComponentFixture<ConfidencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
