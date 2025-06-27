import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressSpinnerComponent} from './progress-spinner.component';
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    ProgressSpinnerComponent
  ],
  exports: [
    ProgressSpinnerComponent
  ]
})
export class ProgressSpinnerModule {
}
