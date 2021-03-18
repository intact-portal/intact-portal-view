import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractionsFiltersComponent} from './interactions-filters.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {TableFactoryService} from "../../shared/service/table-factory.service";
import {NetworkViewService} from "../../shared/service/network-view.service";
import {InteractionFacets} from "../../shared/model/interactions-results/interaction/interaction-facets.model";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('InteractionsFiltersComponent', () => {
  let component: InteractionsFiltersComponent;
  let fixture: ComponentFixture<InteractionsFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InteractionsFiltersComponent],
      providers: [TableFactoryService, NetworkViewService],
      imports: [BrowserAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsFiltersComponent);

    component = fixture.componentInstance;
    component.interactionFacets = new InteractionFacets([], [], [], [], [], [], []);
    component.interactorTypeFilter = [];
    component.interactorSpeciesFilter = [];
    component.interactionHostOrganismFilter = [];
    component.interactionTypeFilter = [];
    component.interactionDetectionMethodFilter = [];
    component.negativeFilter = ""
    component.miScoreMinFilter = 0;
    component.miScoreMaxFilter = 1;
    component.intraSpeciesFilter = false;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
