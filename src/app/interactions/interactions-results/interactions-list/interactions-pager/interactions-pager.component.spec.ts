import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionsPagerComponent } from './interactions-pager.component';

describe('InteractionsPagerComponent', () => {
  let component: InteractionsPagerComponent;
  let fixture: ComponentFixture<InteractionsPagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionsPagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
