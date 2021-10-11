/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  Directive,
  DoCheck,
  EmbeddedViewRef,
  Input,
  IterableChangeRecord,
  IterableChanges,
  IterableDiffer,
  IterableDiffers,
  NgIterable,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

/**
 * @publicApi
 */
export class NgForOfContext<T, U extends NgIterable<T> = NgIterable<T>> {
  constructor(public $implicit: T, public llElements: U, public index: number, public count: number) {
  }

  get first(): boolean {
    return this.index === 0;
  }

  get last(): boolean {
    return this.index === this.count - 1;
  }

  get even(): boolean {
    return this.index % 2 === 0;
  }

  get odd(): boolean {
    return !this.even;
  }
}


@Directive({selector: '[ipLimitedList]'})
export class LimitedListDirective<T, U extends NgIterable<T> = NgIterable<T>> implements DoCheck {


  /**
   * The value of the iterable expression, which can be used as a
   * [template input variable](guide/structural-directives#shorthand).
   */
  @Input()
  set ipLimitedListOf(ngForOf: U & NgIterable<T> | undefined | null) {
    this._ipLimitedListOf = ngForOf;
    this._dirty = true;
  }

  private _ipLimitedListOf: U | undefined | null = null;
  private _dirty: boolean = true;
  private _differ: IterableDiffer<T> | null = null;
  private _limit: number = 1;

  @Input() set ipLimitedListLimit(limit: number) {
    this._limit = limit;
  }


  constructor(
    private _viewContainer: ViewContainerRef,
    private _template: TemplateRef<NgForOfContext<T, U>>,
    private _differs: IterableDiffers) {
  }

  /**
   * A reference to the template that is stamped out for each item in the iterable.
   * @see [template reference variable](guide/template-reference-variables)
   */
  @Input()
  set ipLimitedListTemplate(value: TemplateRef<NgForOfContext<T, U>>) {
    if (value) {
      this._template = value;
    }
  }

  /**
   * Applies the changes when needed.
   */
  ngDoCheck(): void {
    if (this._dirty) {
      this._dirty = false;
      // React on ngForOf changes only once all inputs have been initialized
      const value = this._ipLimitedListOf;
      if (!this._differ && value) {
        try {
          this._differ = this._differs.find(value).create(Object.is);
        } catch {
          throw new Error(`Cannot find a differ supporting object '${value}' of type '${
            getTypeName(value)}'. NgFor only supports binding to Iterables such as Arrays.`);
        }
      }
    }
    if (this._differ) {
      const changes = this._differ.diff(this._ipLimitedListOf);
      if (changes) this._applyChanges(changes);
    }
  }

  private _applyChanges(changes: IterableChanges<T>) {
    const insertTuples: RecordViewTuple<T, U>[] = [];
    changes.forEachOperation(
      (item: IterableChangeRecord<any>, adjustedPreviousIndex: number | null,
       currentIndex: number | null) => {
        if (item.previousIndex == null) {
          // NgForOf is never "null" or "undefined" here because the differ detected
          // that a new item needs to be inserted from the iterable. This implies that
          // there is an iterable value for "_ngForOf".
          const view = this._viewContainer.createEmbeddedView(
            this._template, new NgForOfContext<T, U>(null!, this._ipLimitedListOf!, -1, -1),
            currentIndex === null ? undefined : currentIndex);
          const tuple = new RecordViewTuple<T, U>(item, view);
          insertTuples.push(tuple);
        } else if (currentIndex == null) {
          this._viewContainer.remove(
            adjustedPreviousIndex === null ? undefined : adjustedPreviousIndex);
        } else if (adjustedPreviousIndex !== null) {
          const view = this._viewContainer.get(adjustedPreviousIndex)!;
          this._viewContainer.move(view, currentIndex);
          const tuple = new RecordViewTuple(item, <EmbeddedViewRef<NgForOfContext<T, U>>>view);
          insertTuples.push(tuple);
        }
      });

    for (let i = 0; i < insertTuples.length; i++) {
      this._perViewChange(insertTuples[i].view, insertTuples[i].record);
    }

    for (let i = 0, ilen = this._viewContainer.length; i < ilen; i++) {
      const viewRef = <EmbeddedViewRef<NgForOfContext<T, U>>>this._viewContainer.get(i);
      viewRef.context.index = i;
      viewRef.context.count = ilen;
      viewRef.context.llElements = this._ipLimitedListOf!;
    }

    changes.forEachIdentityChange((record: any) => {
      const viewRef =
        <EmbeddedViewRef<NgForOfContext<T, U>>>this._viewContainer.get(record.currentIndex);
      viewRef.context.$implicit = record.item;
    });
  }

  private _perViewChange(
    view: EmbeddedViewRef<NgForOfContext<T, U>>, record: IterableChangeRecord<any>) {
    view.context.$implicit = record.item;
  }

  /**
   * Asserts the correct type of the context for the template that `NgForOf` will render.
   *
   * The presence of this method is a signal to the Ivy template type-check compiler that the
   * `NgForOf` structural directive renders its template with a specific context type.
   */
  static ngTemplateContextGuard<T, U extends NgIterable<T>>(dir: LimitedListDirective<T, U>, ctx: any):
    ctx is NgForOfContext<T, U> {
    return true;
  }
}

class RecordViewTuple<T, U extends NgIterable<T>> {
  constructor(public record: any, public view: EmbeddedViewRef<NgForOfContext<T, U>>) {
  }
}

function getTypeName(type: any): string {
  return type['name'] || typeof type;
}
