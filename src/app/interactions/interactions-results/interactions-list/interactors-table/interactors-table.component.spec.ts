import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractorsTableComponent } from './interactors-table.component';

describe('InteractorsTableComponent', () => {
  let component: InteractorsTableComponent;
  let fixture: ComponentFixture<InteractorsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractorsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
