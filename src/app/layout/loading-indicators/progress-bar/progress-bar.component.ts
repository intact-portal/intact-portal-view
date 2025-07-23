import {Component, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
    selector: 'ip-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css'],
    standalone: false
})
export class ProgressBarComponent implements OnInit {
  private static show: boolean;
  private _color: ThemePalette = 'primary';
  private _mode: 'determinate' | 'indeterminate' | 'buffer' | 'query' = 'indeterminate';

  public static display(): void {
    ProgressBarComponent.show = true;
  }

  public static hide(): void {
    setTimeout(() => {
      ProgressBarComponent.show = false;
    }, 1000);
  }

  public static hideWithoutDelay(): void {
    ProgressBarComponent.show = false;
  }

  constructor() {
    ProgressBarComponent.show = true;
  }

  ngOnInit() {
  }

  get isDisplayed(): boolean {
    return ProgressBarComponent.show;
  }

  get color(): ThemePalette {
    return this._color;
  }

  set color(value: ThemePalette) {
    this._color = value;
  }

  get mode(): 'determinate' | 'indeterminate' | 'buffer' | 'query' {
    return this._mode;
  }

  set mode(value: 'determinate' | 'indeterminate' | 'buffer' | 'query') {
    this._mode = value;
  }
}
