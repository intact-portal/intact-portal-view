import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AboutComponent} from './about.component';
import {MarkdownComponent} from "../documentation/shared/markdown/markdown.component";
import {MarkdownModule} from "../documentation/shared/markdown/markdown.module";
import {MarkdownRendererService} from "../documentation/shared/markdown/service/markdown-renderer.service";



describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [MarkdownModule],
      providers: [MarkdownRendererService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

