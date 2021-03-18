import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantTableComponent } from './participant-table.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {TableFactoryService} from "../../../../shared/service/table-factory.service";
import {InteractionParticipantsService} from "../../../shared/service/interaction-participants.service";

describe('ParticipantDetailsComponent', () => {
  let component: ParticipantTableComponent;
  let fixture: ComponentFixture<ParticipantTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantTableComponent],
      providers: [TableFactoryService, InteractionParticipantsService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
