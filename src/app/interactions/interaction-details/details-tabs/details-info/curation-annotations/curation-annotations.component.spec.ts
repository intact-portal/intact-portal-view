import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurationAnnotationsComponent } from './curation-annotations.component';

describe('CurationAnnotationsComponent', () => {
  let component: CurationAnnotationsComponent;
  let fixture: ComponentFixture<CurationAnnotationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurationAnnotationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurationAnnotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
