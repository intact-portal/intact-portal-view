import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalXrefsComponent } from './external-xrefs.component';

describe('ExternalXrefsComponent', () => {
  let component: ExternalXrefsComponent;
  let fixture: ComponentFixture<ExternalXrefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalXrefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalXrefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
