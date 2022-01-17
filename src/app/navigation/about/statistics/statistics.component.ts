import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
import {StatisticsService, ReleaseStatPoint} from "./statistics.service"


@Component({
  selector: 'ip-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit, AfterViewInit {

  statPoints : ReleaseStatPoint[];

  constructor(private statistics: StatisticsService) { }

  ngOnInit(): void {
//       this.statistics.getReleasesStats().subscribe(resp => this.statPoints = resp);
  }

  ngAfterViewInit(): void {


//
//     d3.csv("./assets/data-files/panel_3.csv", function(d_p3) {
//       return {
//         Year : d_p3.Year,
//         CurationRequest : +d_p3.CurationRequest,
//         AuthorSubmitted : +d_p3.AuthorSubmitted
//       };
//     }).then(function(data_p3){
//     console.log(data_p3[4]);
//     });
//
//     d3.csv("./assets/data-files/panel_4.csv", function(d_p4) {
//       return {
//         Method : d_p4.Method,
//         Experiments : +d_p4.Experiments
//       };
//     }).then(function(data_p1){
//     console.log(data_p1[4]);
//     });
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
