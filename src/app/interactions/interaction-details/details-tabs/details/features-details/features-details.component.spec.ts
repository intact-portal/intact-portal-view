import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesDetailsComponent } from './features-details.component';

describe('FeaturesDetailsComponent', () => {
  let component: FeaturesDetailsComponent;
  let fixture: ComponentFixture<FeaturesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
