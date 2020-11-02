import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {HttpErrorResponse} from "@angular/common/http";
import {ProgressBarComponent} from "../../layout/loading-indicators/progress-bar/progress-bar.component";

@Component({
  selector: 'ip-details-dashboard',
  templateUrl: './details-dashboard.component.html',
  styleUrls: ['./details-dashboard.component.css']
})
export class DetailsDashboardComponent implements OnInit {
    private _interactionAc: string;
  @Input() featureSelected: string;
  @Input() participantsSelected: string[];
  private _error: HttpErrorResponse;

  constructor(private titleService: Title,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.interactionAc = params['id'];
        this.titleService.setTitle('Interaction - ' + this.interactionAc);
      })
  }

  public searchError(error: HttpErrorResponse) {
    this._error = error;
    ProgressBarComponent.hideWithoutDelay();
  }

  get interactionAc(): string {
    return this._interactionAc;
  }

  set interactionAc(value: string) {
    this._interactionAc = value;
  }

  public onFeatureSelectedChanged(featureAc: string): void {
    this.featureSelected = featureAc;
  }

  public onParticipantSelectedChanged(participantsSelected: string[]): void {
    this.participantsSelected = participantsSelected;
  }

  get error(): HttpErrorResponse {
    return this._error;
  }
}
