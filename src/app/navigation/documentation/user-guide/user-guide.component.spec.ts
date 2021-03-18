import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGuideComponent } from './user-guide.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('UserGuideComponent', () => {
  let component: UserGuideComponent;
  let fixture: ComponentFixture<UserGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGuideComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
