import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationCellComponent } from './publication-cell.component';

describe('PublicationCellComponent', () => {
  let component: PublicationCellComponent;
  let fixture: ComponentFixture<PublicationCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
