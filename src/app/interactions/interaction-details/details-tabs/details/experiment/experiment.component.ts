import {Component, Input, OnInit} from '@angular/core';
import {Experiment} from '../../../../shared/model/interaction-details/experiment.model';

declare const $: any;

@Component({
  selector: 'iv-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent implements OnInit {

  @Input() interactionExperiment: Experiment;

  constructor() { }

  ngOnInit() {
  }

  toggleExperimentButton(): void {
    if ($('#experimentPanel').is(':visible')) {
      $('#experimentPanel').hide();
      $('i#toggleExperiment').removeClass('icon-minus').addClass('icon-plus');
    } else {
      $('#experimentPanel').show();
      $('i#toggleExperiment').removeClass('icon-plus').addClass('icon-minus');
    }
  }

}
