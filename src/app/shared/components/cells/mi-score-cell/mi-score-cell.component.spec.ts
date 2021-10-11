import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiScoreCellComponent } from './mi-score-cell.component';

describe('MiScoreCellComponent', () => {
  let component: MiScoreCellComponent;
  let fixture: ComponentFixture<MiScoreCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiScoreCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiScoreCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
