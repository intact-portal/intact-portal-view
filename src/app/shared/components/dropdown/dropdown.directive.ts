import {ComponentRef, Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {DropdownComponent} from './dropdown.component';

/**
 * Dropdown directive.
 *
 * Features:
 * - Title as input
 * - Disabled / Enabled
 * - Same width between trigger button and hidden panel content
 * - Small animation for appearance
 * - Support rounded .button-group
 *
 * Usage:
 * ```html
 * <ng-content *ipDropdown="title; disabled: disabled">
 *    <!-- Hidden panel to be displayed when hovered -->
 * </ng-content>
 * ```
 *
 * @param title: string, Title of the dropdown menu
 * @param disabled: boolean, Whether the dropdown is activated or not. Changes UI
 */
@Directive({
  selector: '[ipDropdown]'
})
export class DropdownDirective {
  private component: ComponentRef<DropdownComponent>;

  /**
   * Usage:
   * ```html
   * <ng-content *ipDropdown="title; disabled: disabled">
   *    <!-- Hidden panel to be displayed when hovered -->
   * </ng-content>
   * ```
   * @param{string} title Title of the dropdown menu
   */
  @Input()
  set ipDropdown(title: string) {
    this.component.setInput('title', title);
  }

  @Input('ipDropdownDisabled')
  set disabled(disabled: boolean) {
    this.component.setInput('disabled', disabled);
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    this.component = this.viewContainer.createComponent(DropdownComponent);
    this.component.setInput('template', this.templateRef);
  }

}
