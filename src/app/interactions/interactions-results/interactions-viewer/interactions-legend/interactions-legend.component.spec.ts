import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {InteractionsLegendComponent} from './interactions-legend.component';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {NetworkLegend} from "../../../shared/model/interaction-legend/network-legend";
import {NodeLegend} from "../../../shared/model/interaction-legend/node-legend";
import {EdgeLegend} from "../../../shared/model/interaction-legend/edge-legend";
import {BooleanLegend} from "../../../shared/model/interaction-legend/boolean-legend";
import {EdgeShape} from "../../../shared/model/network-shapes/edge-shape";

describe('InteractionsLegendComponent', () => {
  let component: InteractionsLegendComponent;
  let fixture: ComponentFixture<InteractionsLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InteractionsLegendComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionsLegendComponent);
    component = fixture.componentInstance;
    component.mutation = false;
    component.expanded = false;
    component.legend = new NetworkLegend(
      new NodeLegend(
        {},
        {},
        {},
        {true: new BooleanLegend<string>('', ''), false: new BooleanLegend<string>('', '')},
        {true: new BooleanLegend<number>('', 0), false: new BooleanLegend<number>('', 1)}
      ),
      new EdgeLegend(
        {},
        {minValue: 0, maxValue: 1, minWidth: 0, maxWidth: 1},
        {},
        {true: new BooleanLegend<string>('', ''), false: new BooleanLegend<string>('', '')},
        {true: new BooleanLegend<number>('', 0), false: new BooleanLegend<number>('', 1)},
        {true: new BooleanLegend<EdgeShape>('', EdgeShape.DASHED_LINE), false: new BooleanLegend<EdgeShape>('', EdgeShape.SOLID_LINE)}
      ))
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
