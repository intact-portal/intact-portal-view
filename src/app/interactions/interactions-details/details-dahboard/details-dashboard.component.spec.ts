import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDashboardComponent } from './details-dashboard.component';

describe('DetailsDashboardComponent', () => {
  let component: DetailsDashboardComponent;
  let fixture: ComponentFixture<DetailsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
