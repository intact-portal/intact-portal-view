import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCellComponent } from './cv-cell.component';

describe('CvCellComponent', () => {
  let component: CvCellComponent;
  let fixture: ComponentFixture<CvCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
