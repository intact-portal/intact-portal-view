import { TestBed } from '@angular/core/testing';

import { CytoscapeDesktopService } from './cytoscape-desktop.service';

describe('CytoscapeDesktopService', () => {
  let service: CytoscapeDesktopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CytoscapeDesktopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
