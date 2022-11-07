import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NodeDiagramComponent} from './diagrams/node-diagram/node-diagram.component';
import {EdgeDiagramComponent} from './diagrams/edge-diagram/edge-diagram.component';
import {ColorRangeDiagramComponent} from './diagrams/color-range-diagram/color-range-diagram.component';
import {EdgeThicknessDiagramComponent} from './diagrams/edge-thickness-diagram/edge-thickness-diagram.component';
import {ColumnToggleComponent} from './column-toggle/column-toggle.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import {DropdownDirective} from './dropdown/dropdown.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ColumnToggleComponent,
    NodeDiagramComponent,
    EdgeDiagramComponent,
    ColorRangeDiagramComponent,
    EdgeThicknessDiagramComponent,
    DropdownComponent,
    DropdownDirective
  ],
  exports: [
    ColumnToggleComponent,
    NodeDiagramComponent,
    EdgeDiagramComponent,
    ColorRangeDiagramComponent,
    EdgeThicknessDiagramComponent,
    DropdownComponent,
    DropdownDirective
  ]
})
export class ComponentsModule {

}
