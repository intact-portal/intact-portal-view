import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel3CurAutRequestComponent } from './panel3-cur-aut-request.component';

describe('Panel3CurAutRequestComponent', () => {
  let component: Panel3CurAutRequestComponent;
  let fixture: ComponentFixture<Panel3CurAutRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panel3CurAutRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Panel3CurAutRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
