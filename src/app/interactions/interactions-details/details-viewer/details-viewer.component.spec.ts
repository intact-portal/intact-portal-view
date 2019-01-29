import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsViewerComponent } from './details-viewer.component';

describe('DetailsViewerComponent', () => {
  let component: DetailsViewerComponent;
  let fixture: ComponentFixture<DetailsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsViewerComponent ]
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
