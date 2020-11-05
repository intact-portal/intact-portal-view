import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetByYearComponent } from './dataset-by-year.component';

describe('DatasetByYearComponent', () => {
  let component: DatasetByYearComponent;
  let fixture: ComponentFixture<DatasetByYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetByYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
