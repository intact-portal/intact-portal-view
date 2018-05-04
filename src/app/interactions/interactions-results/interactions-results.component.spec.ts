import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionsResultsComponent } from './interactions-results.component';

describe('InteractionsComponent', () => {
  let component: InteractionsResultsComponent;
  let fixture: ComponentFixture<InteractionsResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionsResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
