import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismCellComponent } from './organism-cell.component';

describe('OrganismCellComponent', () => {
  let component: OrganismCellComponent;
  let fixture: ComponentFixture<OrganismCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganismCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
