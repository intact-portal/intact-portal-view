import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractionDetailsComponent} from './interaction-details.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {TableFactoryService} from "../../../shared/service/table-factory.service";
import {OrganismPipe} from "./organism/organism.pipe";
import {InteractionDetails} from "../../../shared/model/interaction-details/interaction-details.model";
import {Organism} from "../../../shared/model/interaction-details/organism.model";
import {CvTerm} from "../../../shared/model/interaction-details/cv-term.model";
import {Publication} from "../../../shared/model/interaction-details/publication.model";

describe('InteractionDetailsComponent', () => {
  let component: InteractionDetailsComponent;
  let fixture: ComponentFixture<InteractionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InteractionDetailsComponent, OrganismPipe],
      providers: [],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionDetailsComponent);
    component = fixture.componentInstance;
    component.interactionDetails = new InteractionDetails('', '',
      new Organism('', ''),
      new CvTerm('', ''),
      new CvTerm('', ''),
      [], [], [], [],
      new Publication('', '', '', '', [], [], [])
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
