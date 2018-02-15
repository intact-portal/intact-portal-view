import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedDatasetComponent } from './featured-dataset.component';

describe('FeaturedDatasetComponent', () => {
  let component: FeaturedDatasetComponent;
  let fixture: ComponentFixture<FeaturedDatasetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedDatasetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
