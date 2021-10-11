import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifierTagComponent } from './identifier-tag.component';

describe('IdentifierTagComponent', () => {
  let component: IdentifierTagComponent;
  let fixture: ComponentFixture<IdentifierTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifierTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifierTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
