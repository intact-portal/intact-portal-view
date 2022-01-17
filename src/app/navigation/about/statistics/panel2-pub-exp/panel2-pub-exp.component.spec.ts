import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel2PubExpComponent } from './panel2-pub-exp.component';

describe('Panel2PubExpComponent', () => {
  let component: Panel2PubExpComponent;
  let fixture: ComponentFixture<Panel2PubExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Panel2PubExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Panel2PubExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
