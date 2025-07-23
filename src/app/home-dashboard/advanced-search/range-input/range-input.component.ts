import {ChangeDetectionStrategy, Component, computed, effect, input, linkedSignal, model} from '@angular/core';
import {extractRange} from '../utils';
import {MatInput} from '@angular/material/input';

@Component({
    selector: 'ip-range-input',
    templateUrl: './range-input.component.html',
    styleUrls: ['./range-input.component.css'],
    standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RangeInputComponent {
  /**
   * type of input to be used left and right
   */
  readonly typeD = input<MatInput['type']>('number');
  /**
   * Increment / decrement value
   */
  readonly step = input<number>(1);

  readonly model = model.required<string>();
  readonly ranges = computed(() => extractRange(this.model()) as [string, string])

  readonly start = linkedSignal(() => this.ranges()[0]);
  readonly stop = linkedSignal(() => this.ranges()[1]);

  constructor() {
    effect(() => this.model.set(`[${this.start()} TO ${this.stop()}]`));
  }
}
