import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedHeaderComponent } from './expanded-header.component';

describe('ExpandedHeaderComponent', () => {
  let component: ExpandedHeaderComponent;
  let fixture: ComponentFixture<ExpandedHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandedHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
