import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalFooterComponent } from './local-footer.component';

describe('LocalFooterComponent', () => {
  let component: LocalFooterComponent;
  let fixture: ComponentFixture<LocalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
