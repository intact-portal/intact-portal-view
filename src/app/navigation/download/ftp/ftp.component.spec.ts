import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FTPComponent } from './ftp.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('FTPComponent', () => {
  let component: FTPComponent;
  let fixture: ComponentFixture<FTPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FTPComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
