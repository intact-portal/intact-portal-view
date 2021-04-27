import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewEncapsulation} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {InteractionsDetailsService} from '../../shared/service/interactions-details.service';
import {ProgressBarComponent} from '../../../layout/loading-indicators/progress-bar/progress-bar.component';
import * as complexviewer from 'complexviewer';
import {InteractionParticipantsService} from '../shared/service/interaction-participants.service';
import {Participant} from '../shared/model/participant.model';
import {Subscription} from 'rxjs/Subscription';
import {NodeShape} from '../../shared/model/network-shapes/node-shape';

export var viewer: any;


@Component({
  selector: 'ip-details-viewer',
  templateUrl: './details-viewer.component.html',
  styleUrls: ['./details-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsViewerComponent implements AfterViewInit, OnDestroy {
  @Input() interactionAc: string;

  @Input() featureAc: string;
  @Output() error: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();
  private _interactionData: any;

  annotations = {
    "MI Features": true,
    "UniprotKB": false,
    "Superfamily": false,
    "Interactor": false,
  };

  private _colorLegendGroups: { name: string, legends: ColorLegend[] }[] = [];
  private proteinUpdateSubscription: Subscription;
  private notifyViewerOfUpdates = true;
  NodeShape = NodeShape;

  private nodeTypes: Set<string> = new Set<string>();

  constructor(private interactionsDetailsService: InteractionsDetailsService, private participantsService: InteractionParticipantsService) {
  }


  ngAfterViewInit() {
    this.requestInteractionViewerDetails();
    $('ip-interactions-viewer').foundation();
    $('.button-group.expanded').foundation();
  }

  ngOnDestroy(): void {
    if (this.proteinUpdateSubscription) this.proteinUpdateSubscription.unsubscribe();
  }

  public hasNodeShapeOf(type: string): boolean {
    return this.nodeTypes ? this.nodeTypes.has(type) : false;
  }

  private requestInteractionViewerDetails() {
    this.interactionsDetailsService.getInteractionViewer(this.interactionAc)
      .subscribe(data => {
          this.interactionData = data;
          ProgressBarComponent.hide();

          if (this.interactionData !== undefined) {
            viewer = new complexviewer.App(document.getElementById('interaction-viewer-container'));
            viewer.readMIJSON(this.interactionData, true);
            viewer.autoLayout();
            this.expandAll();
            this.participantsService.initParticipants(viewer.getExpandedParticipants());
            this.updateColorLegend(viewer.getColorKeyJson());
            this.collectTypes();
            viewer.addExpandListener((expandedParticipants: Participant[]) => {
              this.notifyViewerOfUpdates = false;
              this.participantsService.updateProteinsStatus(expandedParticipants)
              this.notifyViewerOfUpdates = true;
            })

            this.proteinUpdateSubscription = this.participantsService.proteinSetsUpdated.subscribe(update => {
              if (this.notifyViewerOfUpdates) {
                viewer.expandAndCollapseSelection(update.expanded.map(protein => protein.identifier.id));
              }
            })
          }
        },
        (err: HttpErrorResponse) => {
          this.error.emit(err);
        }
      );
  }

  expandAll(): void {
    viewer.expandAll();
    this.participantsService.expandAllProteins();
  }

  collapseAll(): void {
    viewer.collapseAll();
    this.participantsService.collapseAllProteins();
  }

  onChangeAnnotation(value: string) {
    let display = !this.annotations[value];
    this.annotations[value] = display;
    this.updateColorLegend(viewer.showAnnotations(value, display));
  }

  private updateColorLegend(legendData: { [p: string]: ColorLegend[] }) {
    this._colorLegendGroups = []
    for (let group of Object.keys(legendData)) {
      if (group === 'Complex') {
        this._colorLegendGroups.push({
          name: 'Interaction', legends: legendData[group].map(legend => {
            legend.name = legend.name.replace('intact_', '');
            return legend;
          })
        })
      } else {
        if (legendData[group].length > 0) {
          this._colorLegendGroups.push({
            name: group, legends: legendData[group]
          })
        }
      }
    }
  }

  private static types = [
    {
      set: new Set(["MI:0326", "MI:0327"]),
      name: 'protein'
    },
    {
      set: new Set(["MI:1100", "MI:0904", "MI:0328"]),
      name: 'bioactive entity'
    },
    {
      set: new Set(["MI:0319", "MI:0681", "MI:0680"]),
      name: 'dna'
    },
    {
      set: new Set(["MI:0320", "MI:0321", "MI:0322", "MI:0323", "MI:2190", "MI:0324", "MI:0679", "MI:0608", "MI:0611", "MI:0610", "MI:0607", "MI:0609", "MI:0325", "IA:2966", "MI:0318"]),
      name: 'rna'
    },
    {
      set: new Set(['MI:0250']),
      name: 'gene'
    },
    {
      set: new Set(['MI:1299', 'MI:0233', 'MI:0315', 'MI:0316', 'MI:1298', 'MI:1301', 'MI:1302', 'MI:1300', 'MI:1303']),
      name: 'complex'
    }
  ];

  private collectTypes() {
    console.log(viewer.interactors)
    for (let datum of this.interactionData.data) {
      console.log(datum);
      if (datum.object !== "interaction") break;
      for (let jsonParticipant of datum.participants) {
        const intRef = jsonParticipant.interactorRef;
        const interactor = viewer.interactors.get(intRef);
        for (let type of DetailsViewerComponent.types) {
          if (type.set.has(interactor.type.id)) {
            this.nodeTypes.add(type.name);
            break;
          }
        }
      }
    }
  }

  get interactionData(): any {
    return this._interactionData;
  }

  set interactionData(value: any) {
    this._interactionData = value;
  }


  get colorLegendGroups(): { name: string; legends: ColorLegend[] }[] {
    return this._colorLegendGroups;
  }

  resetLayout() {
    viewer.autoLayout()
  }
}

class ColorLegend {
  public name: string;
  public certain?: Color;
  public uncertain?: Color;

  constructor(name: string, certain?: Color, uncertain?: Color) {
    this.name = name;
    this.certain = certain;
    this.uncertain = uncertain;
  }
}

class Color {
  public color: string;

  constructor(color: string) {
    this.color = color;
  }
}
