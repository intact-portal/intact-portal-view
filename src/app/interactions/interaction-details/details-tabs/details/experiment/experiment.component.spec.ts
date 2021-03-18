import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentComponent } from './experiment.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {Experiment} from "../../../../shared/model/interaction-details/experiment.model";

describe('ExperimentComponent', () => {
  let component: ExperimentComponent;
  let fixture: ComponentFixture<ExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentComponent);
    component = fixture.componentInstance;
    component.experiment = new Experiment('','','',[],[]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
