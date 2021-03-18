import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationComponent } from './publication.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {Publication} from "../../../../shared/model/interaction-details/publication.model";

describe('PublicationComponent', () => {
  let component: PublicationComponent;
  let fixture: ComponentFixture<PublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationComponent);
    component = fixture.componentInstance;
    component.publication = new Publication('', '', '', '', [], [], []);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
