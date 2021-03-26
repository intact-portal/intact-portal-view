import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatasetArchiveComponent} from './dataset-archive.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {FeatureDatasetService} from "../service/feature-dataset.service";
import {HttpClientTestingModule, HttpTestingController, TestRequest} from "@angular/common/http/testing";
import {Angulartics2GoogleAnalytics} from "angulartics2/ga";
import {GoogleAnalyticsService} from "../../../shared/service/google-analytics/google-analytics.service";

describe('DatasetArchiveComponent', () => {
  let component: DatasetArchiveComponent;
  let fixture: ComponentFixture<DatasetArchiveComponent>;
  let featuredDatasetService: FeatureDatasetService;
  let req: TestRequest;
  let httpMock: HttpTestingController;
  const reporter = jasmine.createSpy('reporter');

  let subset =
    '<datasets xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"' +
    '          xsi:noNamespaceSchemaLocation="http://www.ebi.ac.uk/~intact/site/dotm/dotm-1_1.xsd">' +
    '  <dataset month="September" year="2020" title="Interactome Mapping Provides a Network of Neurodegenerative Disease Proteins and Uncovers Widespread Protein Aggregation in Affected Brains.">' +
    '    <pubmed>' +
    '      <id>32814053</id>' +
    '      <author>Haenig C. et al.</author>' +
    '      <year>2020</year>' +
    '    </pubmed>' +
    '  </dataset>' +
    '</datasets>';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatasetArchiveComponent],
      providers: [
        FeatureDatasetService,
        {provide: GoogleAnalyticsService, useValue: reporter}
      ],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(DatasetArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpMock = TestBed.get(HttpTestingController);
    featuredDatasetService = TestBed.get(FeatureDatasetService);
    req = httpMock.expectOne(featuredDatasetService.API_URL);
    expect(req.request.method).toBe("GET");
    req.flush(subset);
  }));

  afterEach(() => httpMock.verify());

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
