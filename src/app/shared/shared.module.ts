import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ColumnToggleComponent} from './components/column-toggle/column-toggle.component';
import {NodeDiagramComponent} from './components/diagrams/node-diagram/node-diagram.component';
import {EdgeDiagramComponent} from './components/diagrams/edge-diagram/edge-diagram.component';
import {ColorRangeDiagramComponent} from './components/diagrams/color-range-diagram/color-range-diagram.component';
import {EdgeThicknessDiagramComponent} from './components/diagrams/edge-thickness-diagram/edge-thickness-diagram.component';
import {IdentifierCellComponent} from './components/cells/identfier-cell/identifier-cell.component';
import {IdentifierTagComponent} from './components/identifier-tag/identifier-tag.component';
import {IdPipe} from './pipes/id.pipe';
import {AnnotationPipe} from './pipes/annotation.pipe';
import {AliasPipe} from './pipes/alias.pipe';
import {LimitedListDirective} from './directives/limited-list.directive';
import {CvPipe} from './pipes/cv.pipe';
import {CvCellComponent} from './components/cells/cv-cell/cv-cell.component';
import {OrganismCellComponent} from './components/cells/organism-cell/organism-cell.component';
import {PublicationCellComponent} from './components/cells/publication-cell/publication-cell.component';
import {ButtonListComponent} from './components/button-list/button-list.component';
import {PublicationsParserPipe} from './pipes/publications-parser.pipe';
import {StyleParserPipe} from './pipes/styled-parser.pipe';
import {MiScoreCellComponent} from './components/cells/mi-score-cell/mi-score-cell.component';
import {ScoreParserPipe} from './pipes/score-parser.pipe';


@NgModule({
  declarations: [
    ColumnToggleComponent,
    NodeDiagramComponent,
    EdgeDiagramComponent,
    ColorRangeDiagramComponent,
    EdgeThicknessDiagramComponent,
    IdentifierCellComponent,
    IdentifierTagComponent,
    IdPipe,
    AnnotationPipe,
    AliasPipe,
    LimitedListDirective,
    CvPipe,
    CvCellComponent,
    OrganismCellComponent,
    PublicationCellComponent,
    ButtonListComponent,
    PublicationsParserPipe,
    StyleParserPipe,
    MiScoreCellComponent,
    ScoreParserPipe
  ],
  exports: [
    ColumnToggleComponent,
    NodeDiagramComponent,
    EdgeDiagramComponent,
    ColorRangeDiagramComponent,
    EdgeThicknessDiagramComponent,
    IdentifierCellComponent,
    IdPipe,
    AnnotationPipe,
    AliasPipe,
    LimitedListDirective,
    CvPipe,
    CvCellComponent,
    OrganismCellComponent,
    PublicationCellComponent,
    ButtonListComponent,
    PublicationsParserPipe,
    StyleParserPipe,
    MiScoreCellComponent,
    ScoreParserPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
