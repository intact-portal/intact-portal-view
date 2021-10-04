import {Subscription, Observable, PartialObserver} from 'rxjs';
import {OnDestroy} from '@angular/core';


export class SubscriberComponent implements OnDestroy {
  protected subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  subscribe<T>(observable: Observable<T>, observerOrNext?: PartialObserver<T> | ((value: T) => void)) {
    if (SubscriberComponent.isObserver(observerOrNext)) {
      this.subscriptions.push(observable.subscribe(observerOrNext));
    } else {
      this.subscriptions.push(observable.subscribe(observerOrNext.bind(this)));
    }
  }

  private static isObserver<T>(toBeDetermined: PartialObserver<T> | ((value: T) => void)): toBeDetermined is PartialObserver<T> {
    const asObserver = toBeDetermined as PartialObserver<T>;
    return !!(asObserver.next || asObserver.error || asObserver.complete || asObserver.closed);
  }
}
