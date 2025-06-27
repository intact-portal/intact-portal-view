import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailsViewerComponent} from './details-viewer.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {InteractionsDetailsService} from "../../shared/service/interactions-details.service";
import {InteractionParticipantsService} from "../shared/service/interaction-participants.service";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {GoogleAnalyticsService} from "../../../shared/service/google-analytics/google-analytics.service";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('DetailsViewerComponent', () => {
  let component: DetailsViewerComponent;
  let fixture: ComponentFixture<DetailsViewerComponent>;
  const reporter = jasmine.createSpy('reporter');

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [DetailsViewerComponent],
    schemas: [NO_ERRORS_SCHEMA],
    imports: [],
    providers: [
        InteractionsDetailsService,
        InteractionParticipantsService,
        { provide: GoogleAnalyticsService, useValue: reporter },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
