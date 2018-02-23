import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetArchiveComponent } from './dataset-archive.component';

describe('DatasetArchiveComponent', () => {
  let component: DatasetArchiveComponent;
  let fixture: ComponentFixture<DatasetArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
