import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesTableComponent } from './features-table.component';

describe('FeaturesDetailsComponent', () => {
  let component: FeaturesTableComponent;
  let fixture: ComponentFixture<FeaturesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
