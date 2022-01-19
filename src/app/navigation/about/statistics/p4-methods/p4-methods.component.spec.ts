import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P4MethodsComponent } from './p4-methods.component';

describe('P4MethodsComponent', () => {
  let component: P4MethodsComponent;
  let fixture: ComponentFixture<P4MethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ P4MethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(P4MethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
