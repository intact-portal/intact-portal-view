import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionsViewerComponent } from './interactions-viewer.component';

describe('InteractionsViewerComponent', () => {
  let component: InteractionsViewerComponent;
  let fixture: ComponentFixture<InteractionsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
