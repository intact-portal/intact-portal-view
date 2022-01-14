import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import {data_p1} from "./statistics.component"

@Component({
  selector: 'ip-panel1',
  templateUrl: './panel1.component.html',
  styleUrls: ['./panel1.component.css']
})

export class Panel1Component implements OnInit, AfterViewInit {
  @Input() data ;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  let margin = {
          top: 20,
          right: 80,
          bottom: 30,
          left: 50
        },
        width = 900 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

      d3.csv("./assets/data-files/panel_1.csv", (data:any[]) => {
      data = data.map((row:any) => {
          date : row.Date,
          n_ary : +row.N_ary,
          binary : +row.Binary,
          interactions : +row.Interactions,
          trueBinary : +row.TrueBinary
      })


      })
  }

}
