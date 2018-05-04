import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionsFiltersComponent } from './interactions-filters.component';

describe('InteractionsFiltersComponent', () => {
  let component: InteractionsFiltersComponent;
  let fixture: ComponentFixture<InteractionsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionsFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
