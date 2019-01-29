import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionsDetailsComponent } from './interactions-details.component';

describe('InteractionsDetailsComponent', () => {
  let component: InteractionsDetailsComponent;
  let fixture: ComponentFixture<InteractionsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
