import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractomesComponent } from './interactomes.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('InteractomesComponent', () => {
  let component: InteractomesComponent;
  let fixture: ComponentFixture<InteractomesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractomesComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
