import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSubscriptionComponent } from './newsletter-subscription.component';

describe('NewsletterComponent', () => {
  let component: NewsletterSubscriptionComponent;
  let fixture: ComponentFixture<NewsletterSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
