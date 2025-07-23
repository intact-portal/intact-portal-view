import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HBarGraphComponent } from './h-bar-graph.component';

describe('P4MethodComponent', () => {
  let component: HBarGraphComponent;
  let fixture: ComponentFixture<HBarGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HBarGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
