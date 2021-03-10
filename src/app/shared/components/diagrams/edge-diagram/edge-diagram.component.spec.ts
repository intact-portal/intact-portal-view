import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeDiagramComponent } from './edge-diagram.component';

describe('EdgeDiagramComponent', () => {
  let component: EdgeDiagramComponent;
  let fixture: ComponentFixture<EdgeDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdgeDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
