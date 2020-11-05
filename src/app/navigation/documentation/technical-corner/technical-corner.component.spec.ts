import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalCornerComponent } from './technical-corner.component';

describe('TechnicalCornerComponent', () => {
  let component: TechnicalCornerComponent;
  let fixture: ComponentFixture<TechnicalCornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalCornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
