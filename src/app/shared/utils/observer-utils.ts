import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {PartialObserver} from 'rxjs/Observer';
import {OnDestroy} from '@angular/core';


export class SubscriberComponent implements OnDestroy {
  protected subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  subscribe<T>(observable: Observable<T>,
               observerOrNext?: PartialObserver<T> | ((value: T) => void),
               error?: (error: any) => void,
               complete?: () => void) {
    if (SubscriberComponent.isObserver(observerOrNext)) {
      this.subscriptions.push(observable.subscribe(observerOrNext));
    } else {
      this.subscriptions.push(observable.subscribe(observerOrNext.bind(this), error ? error.bind(this) : null, complete ? complete.bind(this) : null));
    }
  }

  private static isObserver<T>(toBeDetermined: PartialObserver<T> | ((value: T) => void)): toBeDetermined is PartialObserver<T> {
    const asObserver = toBeDetermined as PartialObserver<T>;
    return !!(asObserver.next || asObserver.error || asObserver.complete || asObserver.closed);
  }
}
