import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'iv-details-dashboard',
  templateUrl: './details-dashboard.component.html',
  styleUrls: ['./details-dashboard.component.css']
})
export class DetailsDashboardComponent implements OnInit {

  private _interactionAc: string;
  @Input() featureSelected: string;
  @Input() participantsSelected: string[];

  constructor(private titleService: Title,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.interactionAc = params['id'];
        this.titleService.setTitle('Interaction - ' + this.interactionAc);
      })
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
}
