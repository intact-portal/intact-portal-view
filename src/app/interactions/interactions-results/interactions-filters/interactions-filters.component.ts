import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LabelType, Options} from '@angular-slider/ngx-slider';
import {TableFactoryService} from '../../shared/service/table-factory.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NetworkViewService} from '../../shared/service/network-view.service';
import {FoundationUtils} from '../../../shared/utils/foundation-utils';
import {Format} from '../../shared/model/download/format.model';
import {Filter, FilterService} from '../../shared/service/filter.service';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';
import {NodeShape} from '../../shared/model/network-shapes/node-shape';
import {environment} from '../../../../environments/environment';


@Component({
  selector: 'ip-interactions-filters',
  templateUrl: './interactions-filters.component.html',
  styleUrls: ['./interactions-filters.component.css', './custom_switchOnOff.css'],
  animations: [
    trigger('bendTip', [
      state('tipBended', style({
        borderRadius: '0 1.4em 1.4em 0'
      })),
      state('tipStraight', style({
        borderRadius: '0 0 0 0'
      })),
      transition('tipBended => tipStraight', [
        animate('250ms')
      ]),
      transition('tipStraight => tipBended', [
        animate('250ms 250ms')
      ]),
    ]),
    trigger('slideIn', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('350ms 150ms')
      ]),
      transition(':leave', [
        animate('350ms', style({transform: 'translateX(-100%)'}))
      ])
    ]),
  ]
})
export class InteractionsFiltersComponent implements OnInit, AfterViewInit {

  options: Options;
  formats = Format.instances;
  filterTypes = Filter;
  shapes = NodeShape;

  readonly NO_EXPORT_TEXT = 'Exports are disabled when there are more than 2000 interactions for performance issues.\n' +
    'Please use Cytoscape IntAct App to support large networks'

  constructor(private tableFactory: TableFactoryService, public view: NetworkViewService, public filters: FilterService) {
  }

  ngOnInit() {
    this.initSliderRange();
  }

  get enableExports(): boolean {
    return environment.avoidDownloadOverload ? this.filters.totalElements < 35_000 : true;
  }

  ngAfterViewInit(): void {
    $('#filters-bar').foundation();
    $(window).trigger('load.zf.sticky');
    this.tableFactory.makeTableHeaderSticky(); // Enables sticky header for all tables on the page
    FoundationUtils.adjustWidth();
  }

  initSliderRange(): void {
    this.options = {
      floor: 0,
      ceil: 1,
      minLimit: 0,
      maxLimit: 1,
      step: 0.01,
      animate: false,
      showSelectionBar: true,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return '<b>Min:</b> ' + value;
          case LabelType.High:
            return '<b>Max:</b> ' + value;
          default:
            return String(value);
        }
      },
      getPointerColor: (value: number): string => {
        if (value <= 0.1) {
          return '#FFFFE5';
        } else if (value <= 0.2) {
          return '#FFF7BC';
        } else if (value <= 0.3) {
          return '#FEE391';
        } else if (value <= 0.4) {
          return '#FEC44F';
        } else if (value <= 0.5) {
          return '#FE9929';
        } else if (value <= 0.6) {
          return '#EC7014';
        } else if (value <= 0.7) {
          return '#CC4C02';
        } else if (value <= 0.8) {
          return '#993404';
        } else if (value <= 0.9) {
          return '#662506';
        } else {
          return '#361303';
        }
      }
    };
  }

  fontColor(backgroundColor: string): string {
    const rgb = this.hexToRgb(backgroundColor.substring(1));
    const lum = 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
    return lum < 100 ? '#ffffff' : '#000000b0';
  }

  hexToRgb(hex: string): { r: number, g: number, b: number } {
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return {r, g, b};
  }

  /**
   * Use this function to avoid horizontal scrollbar in firefox
   */
  scrollStyle(filter: Filter) {
    return this.filters.getFacets(filter).length > 20 ?
      {'overflow-y': 'scroll', 'height': '39vh'} :
      {'overflow-y': 'hidden', 'height': 'auto'};
  }

  onChangeInteractorSpeciesFilter(event: Event) {
    this.filters.updateFilter(Filter.SPECIES, (event.target as HTMLInputElement).value);
  }

  onChangeInteractorTypeFilter(event: Event) {
    this.filters.updateFilter(Filter.INTERACTOR_TYPE, (event.target as HTMLInputElement).value);
  }

  onChangeInteractionTypeFilter(event: Event) {
    this.filters.updateFilter(Filter.INTERACTION_TYPE, (event.target as HTMLInputElement).value);
  }

  onChangeInteractionDetectionMethodFilter(event: Event) {
    this.filters.updateFilter(Filter.DETECTION_METHOD, (event.target as HTMLInputElement).value);
  }

  onChangeInteractionHostOrganismFilter(event: Event) {
    this.filters.updateFilter(Filter.HOST_ORGANISM, (event.target as HTMLInputElement).value);
  }

  onChangeInteractionIntraSpeciesFilter(event: MatSlideToggleChange) {
    this.filters.updateFilter(Filter.INTRA_SPECIES, event.checked)
  }
}
