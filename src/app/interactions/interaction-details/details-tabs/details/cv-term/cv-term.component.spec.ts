import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvTermComponent } from './cv-term.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {CvToUrlPipe} from "./cv-to-url.pipe";
import {CvTerm} from "../../../../shared/model/interaction-details/cv-term.model";

describe('CvTermComponent', () => {
  let component: CvTermComponent;
  let fixture: ComponentFixture<CvTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvTermComponent, CvToUrlPipe],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvTermComponent);
    component = fixture.componentInstance;
    component.cvTerm = new CvTerm('test','MI:0000')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
