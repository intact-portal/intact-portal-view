import {Component, input, OnInit} from '@angular/core';

@Component({
    selector: 'ip-progress-spinner',
    templateUrl: './progress-spinner.component.html',
    styleUrls: ['./progress-spinner.component.css'],
    standalone: false
})
export class ProgressSpinnerComponent implements OnInit {
  private static show: boolean;
  color = 'primary';
  mode = 'indeterminate';
  query = input<string>();
  takesLonger: boolean;

  public static display(): void {
    ProgressSpinnerComponent.show = true;
  }

  public static hide(): void {
    setTimeout(function () {
      ProgressSpinnerComponent.show = false;
    }, 1000);
  }

  constructor() {
    ProgressSpinnerComponent.show = false;
  }

  ngOnInit() {
    const context = this;
    setTimeout(function () {
      context.takesLonger = true;
    }, 5000);
  }

  get isDisplayed(): boolean {
    return ProgressSpinnerComponent.show;
  }
}
