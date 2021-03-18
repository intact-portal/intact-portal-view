import {ReplaySubject} from "rxjs";
import {convertToParamMap, ParamMap, Params} from "@angular/router";

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub {
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  private subject = new ReplaySubject<Params>();
  private subjectParamMap = new ReplaySubject<ParamMap>();

  constructor(initialParams?: Params) {
    this.setParamMap(initialParams);
  }

  readonly params = this.subject.asObservable();
  readonly queryParams = this.subject.asObservable();
  /** The mock paramMap observable */
  readonly paramMap = this.subjectParamMap.asObservable();

  /** Set the paramMap observables's next value */
  setParamMap(params?: Params) {
    this.subject.next(params);
    this.subjectParamMap.next(convertToParamMap(params));
  }
}
