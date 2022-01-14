import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel1Component } from './panel1.component';

describe('Panel1Component', () => {
  let component: Panel1Component;
  let fixture: ComponentFixture<Panel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Panel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
