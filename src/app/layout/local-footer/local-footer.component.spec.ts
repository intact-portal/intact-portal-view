import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalFooterComponent } from './local-footer.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('LocalFooterComponent', () => {
  let component: LocalFooterComponent;
  let fixture: ComponentFixture<LocalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalFooterComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
