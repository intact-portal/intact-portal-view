import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactHeaderComponent } from './compact-header.component';

describe('CompactHeaderComponent', () => {
  let component: CompactHeaderComponent;
  let fixture: ComponentFixture<CompactHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompactHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
