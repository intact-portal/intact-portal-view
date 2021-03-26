import {Injectable} from '@angular/core';
import {Angulartics2} from 'angulartics2';
import {Action} from "./types/action-enum";
import {Category} from "./types/category-enum";
import {Label} from "./types/label-enum";


@Injectable()
export class GoogleAnalyticsService {

  constructor(private angulartics2: Angulartics2) {
  }

  public report(category: Category, action: string | Action, label: string | Label): void {
    this.angulartics2.eventTrack.next({
      action: Action[action] || action,
      properties: {category: Category[category], label: Label[label] || label}
    });
  }

  public reportError(error: Error | any): void {
    if (error instanceof Error) {
      this.report(Category.error, error.name, error.message);
    } else {
      this.report(Category.error, Action.error, error.toString());
    }

    this.angulartics2.exceptionTrack.next({

    })
  }
}


