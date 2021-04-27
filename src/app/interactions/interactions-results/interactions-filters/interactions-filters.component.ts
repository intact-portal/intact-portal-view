import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ChangeContext, LabelType, Options} from 'ng5-slider';
import {TableFactoryService} from '../../shared/service/table-factory.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NetworkViewService} from '../../shared/service/network-view.service';
import {FoundationUtils} from '../../../shared/utils/foundation-utils';
import {Format} from '../../shared/model/download/format.model';
import {Filter, FilterService} from '../../shared/service/filter.service';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';
import {NodeShape} from '../../shared/model/network-shapes/node-shape';


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

  constructor(private tableFactory: TableFactoryService, public viewerService: NetworkViewService, public filters: FilterService) {
  }

  ngOnInit() {
    this.initSliderRange();
  }

  ngAfterViewInit(): void {
    $('ip-interactions-filters').foundation();
    $(window).trigger('load.zf.sticky');
    this.tableFactory.makeTableHeaderSticky(); // Enables sticky header for all tables on the page
    FoundationUtils.adjustWidth();
  }

  filterStyle(filterKey: string): any {
    // console.log(filterKey, this.filters.facets[filterKey])
    if (this.filters.facets[filterKey].length > 20) {
      return {
        height: ['detection_method_s', 'host_organism_s'].includes(filterKey) ? '500px' : '400px',
        width: '100%',
        'overflow-y': 'auto',
      };
    } else {
      return {
        width: '100%',
        'overflow-x': 'auto',
        'overflow-y': 'hidden',
      };
    }
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

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.filters.updateFilter(Filter.MI_SCORE, {min: changeContext.value, max: changeContext.highValue})
  }
}
