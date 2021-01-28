import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnToggleComponent } from './column-toggle.component';

describe('ColumnToggleComponent', () => {
  let component: ColumnToggleComponent;
  let fixture: ComponentFixture<ColumnToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
