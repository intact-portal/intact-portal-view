import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {PartialObserver} from 'rxjs/Observer';
import {toSubscriber} from 'rxjs/util/toSubscriber';
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
    this.subscriptions.push(observable.subscribe(toSubscriber(observerOrNext, error, complete)));
  }
}
