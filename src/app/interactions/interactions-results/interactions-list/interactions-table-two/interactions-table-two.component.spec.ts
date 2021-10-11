import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionsTableTwoComponent } from './interactions-table-two.component';

describe('InteractionsTableTwoComponent', () => {
  let component: InteractionsTableTwoComponent;
  let fixture: ComponentFixture<InteractionsTableTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractionsTableTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsTableTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
