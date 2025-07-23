import {ChangeDetectionStrategy, Component, computed, linkedSignal, model} from '@angular/core';
import moment from 'moment';
import {extractRange} from '../utils';

@Component({
  selector: 'ip-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateRangeComponent {

  model = model.required<string>()

  ranges = computed(() => extractRange(this.model()) as [string, string])
  start = linkedSignal(() => moment(this.ranges()[0], 'YYYYMMDD'));
  end = linkedSignal(() => moment(this.ranges()[1], 'YYYYMMDD'));

  onChange(value: string) {
    // Only update the model value if the triggering input is fully valid
    if (value.length === 10) {
      this.model.set(`[${this.start().format('YYYYMMDD')} TO ${this.end().format('YYYYMMDD')}]`)
    }
  }
}
