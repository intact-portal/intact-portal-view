import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Subject} from 'rxjs/internal/Subject';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class FragmentService {

  private _value: string;
  private subject: Subject<string> = new Subject();
  public $onChange = this.subject.asObservable();

  constructor(private route: ActivatedRoute) {
    route.fragment.pipe(untilDestroyed(this)).subscribe(fragment => this.value = fragment);
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
    this.subject.next(value);
  }
}
