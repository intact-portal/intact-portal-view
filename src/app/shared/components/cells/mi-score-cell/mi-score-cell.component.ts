import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {Score} from '../../../pipes/score-parser.pipe';

@Component({
  selector: 'ip-mi-score-cell',
  templateUrl: './mi-score-cell.component.html',
  styleUrls: ['./mi-score-cell.component.css']
})
export class MiScoreCellComponent implements OnInit {

  private static readonly YELLOW_ORANGE_BROWN_PALETTE: string[] = [
    'rgb(255,255,229)',
    'rgb(255,247,188)',
    'rgb(254,227,145)',
    'rgb(254,196,79)',
    'rgb(254,153,41)',
    'rgb(236,112,20)',
    'rgb(204,76,2)',
    'rgb(153,52,4)',
    'rgb(102,19,5)',
    'rgb(54, 19, 3)'
  ];

  private static readonly YELLOW_ORANGE_BROWN_PALETTE_TEXT: string[] = [
    'rgb(254,153,41)',
    'rgb(254,153,41)',
    'rgb(254,153,41)',
    'rgb(254,153,41)',
    'rgb(254,153,41)',
    'rgb(236,112,20)',
    'rgb(204,76,2)',
    'rgb(153,52,4)',
    'rgb(102,19,5)',
    'rgb(54, 19, 3)'
  ];

  private static readonly YELLOW_ORANGE_BROWN_PALETTE_BG: string[] = [
    'rgba(255,255,229,0.1)',
    'rgba(255,247,188,0.1)',
    'rgba(254,227,145,0.1)',
    'rgba(254,196,79,0.1)',
    'rgba(254,153,41,0.1)',
    'rgba(236,112,20,0.1)',
    'rgba(204,76,2,0.1)',
    'rgba(153,52,4,0.1)',
    'rgba(102,19,5,0.1)',
    'rgba(54, 19,3,0.1)'
  ];

  @Input() score!: Score;

  url = `${environment.context_path}/documentation/docs#interaction_scoring`;
  style = {};

  constructor() {
  }

  ngOnInit(): void {
    const paletteIndex = Math.floor(this.score.value * 10);
    this.style = {
      'background-color': MiScoreCellComponent.YELLOW_ORANGE_BROWN_PALETTE_BG[paletteIndex],
      'border': '1px solid ' + MiScoreCellComponent.YELLOW_ORANGE_BROWN_PALETTE[paletteIndex],
      'color': MiScoreCellComponent.YELLOW_ORANGE_BROWN_PALETTE_TEXT[paletteIndex]
    }
  }


}
