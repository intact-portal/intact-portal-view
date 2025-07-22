import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DatasetArchiveComponent} from './dataset-archive.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FeatureDatasetService} from '../service/feature-dataset.service';
import { HttpTestingController, TestRequest, provideHttpClientTesting } from '@angular/common/http/testing';
import {GoogleAnalyticsService} from 'ngx-google-analytics';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('DatasetArchiveComponent', () => {
  let component: DatasetArchiveComponent;
  let fixture: ComponentFixture<DatasetArchiveComponent>;
  let featuredDatasetService: FeatureDatasetService;
  let req: TestRequest;
  let httpMock: HttpTestingController;
  const reporter = jasmine.createSpy('reporter');

  const subset =
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
    schemas: [NO_ERRORS_SCHEMA],
    imports: [],
    providers: [
        FeatureDatasetService,
        { provide: GoogleAnalyticsService, useValue: reporter },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
}).compileComponents();
    fixture = TestBed.createComponent(DatasetArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpMock = TestBed.inject(HttpTestingController);
    featuredDatasetService = TestBed.inject(FeatureDatasetService);
    req = httpMock.expectOne(featuredDatasetService.API_URL);
    expect(req.request.method).toBe('GET');
    req.flush(subset);
  }));

  afterEach(() => httpMock.verify());

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
