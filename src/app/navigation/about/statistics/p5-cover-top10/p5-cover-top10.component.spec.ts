import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P5CoverTop10Component } from './p5-cover-top10.component';

describe('P4MethodComponent', () => {
  let component: P5CoverTop10Component;
  let fixture: ComponentFixture<P5CoverTop10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P5CoverTop10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P5CoverTop10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
