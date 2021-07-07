import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionsRedirectComponent } from './interactions-redirect.component';

describe('InteractionsRedirectComponent', () => {
  let component: InteractionsRedirectComponent;
  let fixture: ComponentFixture<InteractionsRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionsRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
