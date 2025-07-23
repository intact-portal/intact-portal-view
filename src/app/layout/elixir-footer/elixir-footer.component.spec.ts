import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElixirFooterComponent } from './elixir-footer.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('ElixirFooterComponent', () => {
  let component: ElixirFooterComponent;
  let fixture: ComponentFixture<ElixirFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElixirFooterComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElixirFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
