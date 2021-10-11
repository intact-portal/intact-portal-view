import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifierCellComponent } from './identifier-cell.component';

describe('IdentfierCellComponent', () => {
  let component: IdentifierCellComponent;
  let fixture: ComponentFixture<IdentifierCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifierCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifierCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
