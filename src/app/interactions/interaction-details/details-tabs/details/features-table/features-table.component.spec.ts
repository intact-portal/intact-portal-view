import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesTableComponent } from './features-table.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {TableFactoryService} from "../../../../shared/service/table-factory.service";

describe('FeaturesDetailsComponent', () => {
  let component: FeaturesTableComponent;
  let fixture: ComponentFixture<FeaturesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesTableComponent ],
      providers: [TableFactoryService],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
