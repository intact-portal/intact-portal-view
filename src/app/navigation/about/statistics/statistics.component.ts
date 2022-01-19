import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'ip-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit, AfterViewInit {


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

//
//     d3.csv("./assets/data-files/panel_5.csv", function(d_p5) {
//       return {
//         Organism : d_p5.Organism,
//         Reference : +d_p5.Reference,
//         Percentage : +d_p5.Percentage,
//         Experiments : +d_p5.Experiments
//       };
//     }).then(function(data_p5){
//     console.log(data_p5[4]);
//     });


  }



}
