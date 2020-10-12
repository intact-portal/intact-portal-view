import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvTermComponent } from './cv-term.component';

describe('CvTermComponent', () => {
  let component: CvTermComponent;
  let fixture: ComponentFixture<CvTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
