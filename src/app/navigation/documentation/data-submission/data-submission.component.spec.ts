import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSubmissionComponent } from './data-submission.component';

describe('DataSubmissionComponent', () => {
  let component: DataSubmissionComponent;
  let fixture: ComponentFixture<DataSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
