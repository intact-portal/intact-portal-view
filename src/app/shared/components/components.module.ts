import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NodeDiagramComponent} from "./diagrams/node-diagram/node-diagram.component";
import {EdgeDiagramComponent} from "./diagrams/edge-diagram/edge-diagram.component";
import {ColorRangeDiagramComponent} from "./diagrams/color-range-diagram/color-range-diagram.component";
import {EdgeThicknessDiagramComponent} from "./diagrams/edge-thickness-diagram/edge-thickness-diagram.component";
import {ColumnToggleComponent} from "./column-toggle/column-toggle.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ColumnToggleComponent,
    NodeDiagramComponent,
    EdgeDiagramComponent,
    ColorRangeDiagramComponent,
    EdgeThicknessDiagramComponent
  ],
  exports: [
    ColumnToggleComponent,
    NodeDiagramComponent,
    EdgeDiagramComponent,
    ColorRangeDiagramComponent,
    EdgeThicknessDiagramComponent
  ]
})
export class ComponentsModule {

}
