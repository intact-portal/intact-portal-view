import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeThicknessDiagramComponent } from './edge-thickness-diagram.component';

describe('EdgeThicknessDiagramComponent', () => {
  let component: EdgeThicknessDiagramComponent;
  let fixture: ComponentFixture<EdgeThicknessDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdgeThicknessDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeThicknessDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
