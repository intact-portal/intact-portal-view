import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionsLegendComponent } from './interactions-legend.component';

describe('InteractionsLegendComponent', () => {
  let component: InteractionsLegendComponent;
  let fixture: ComponentFixture<InteractionsLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionsLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
