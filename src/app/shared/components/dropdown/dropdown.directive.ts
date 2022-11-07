import {ComponentFactory, Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {DropdownComponent} from './dropdown.component';

@Directive({
  selector: '[ipDropdown]'
})
export class DropdownDirective {
  private title: string;

  @Input()
  set ipDropdown(title: string) {
    this.title = title;

    // this.viewContainer.createComponent(DropdownComponent)
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

}
