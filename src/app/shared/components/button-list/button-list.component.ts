import {Component, Input, OnInit, TemplateRef, ViewChildren} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

export class ButtonListContext<T, U extends Array<T> = Array<T>> {
  constructor(public $implicit: T, public index, public array: U) {
  }
}

@Component({
    selector: 'ip-button-list',
    templateUrl: './button-list.component.html',
    styleUrls: ['./button-list.component.css'],
    animations: [
      trigger('viewsTrigger', [
        transition(':enter', [style({ height: 0 }), animate(200)]),
        transition(':leave', [animate(200, style({ height: 0 }))]),
      ])]
  }
)
export class ButtonListComponent<T> implements OnInit {

  @Input() template!: TemplateRef<ButtonListContext<T>>;
  @Input() elements!: T[];
  @Input() limit: number = 2;

  @Input() containerClass: string = '';
  @Input() alignTop: boolean = true

  contexts: ButtonListContext<T>[];
  isLimiting: boolean = true;
  delta: number;

  private _allContexts: ButtonListContext<T>[];
  private _firstContexts: ButtonListContext<T>[];

  constructor() {
  }

  ngOnInit(): void {
    this._allContexts = this.elements
      .map((value, idx, arr) => new ButtonListContext<T>(value, idx, arr))
      .filter(context => {
        const embeddedViewRef = this.template.createEmbeddedView(context);
        embeddedViewRef.detectChanges();
        return embeddedViewRef.rootNodes.some(value => value.innerText?.length > 0);
      })
    this._firstContexts = this._allContexts.slice(0, this.limit);
    this.contexts = this._firstContexts;
    this.delta = this._allContexts.length - this.limit;
  }

  static ngTemplateContextGuard<T>(dir: ButtonListComponent<T>, ctx: any): ctx is ButtonListContext<T> {
    return true;
  }

  onToggle() {
    this.isLimiting = !this.isLimiting;
    this.contexts = this.isLimiting ? this._firstContexts : this._allContexts;
  }

  get upperClass(): string {
    return this.containerClass + this.alignTop ? 'table-list' : '';
  }

}
