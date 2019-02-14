import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTabsComponent } from './details-tabs.component';

describe('DetailsTabsComponent', () => {
  let component: DetailsTabsComponent;
  let fixture: ComponentFixture<DetailsTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
