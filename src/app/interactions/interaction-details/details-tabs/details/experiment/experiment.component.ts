import {Component, Input, OnInit} from '@angular/core';
import {Experiment} from '../../../../shared/model/interaction-details/experiment.model';


@Component({
    selector: 'ip-experiment',
    templateUrl: './experiment.component.html',
    styleUrls: ['./experiment.component.css'],
    standalone: false
})
export class ExperimentComponent implements OnInit {

  @Input() experiment: Experiment;

  hover = false;

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
