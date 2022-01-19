import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'ip-p5-cover-top10',
  templateUrl: './p5-cover-top10.component.html',
  styleUrls: ['./p5-cover-top10.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class P5CoverTop10Component implements OnInit, AfterViewInit {
  @Input() dataPath: string;

  @ViewChild('barChart')
  svgRef: ElementRef<SVGElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const WIDTH = 900;
    const HEIGHT = 400;
    const margin = {
          top: 20,
          right: 160,
          bottom: 30,
          left: 55
        },
        width = WIDTH - margin.left - margin.right,
        height = HEIGHT - margin.top - margin.bottom;
    const color: d3.ScaleOrdinal<string, string> = d3.scaleOrdinal();

    const svg = d3.select(this.svgRef.nativeElement)
        // .attr('width', width + margin.left + margin.right)
        // .attr('height', height + margin.top + margin.bottom)
        .attr('viewBox', [0, 0, WIDTH, HEIGHT])
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    d3.csv(this.dataPath, (row) => {
          return ({
              Organism: row.Organism,
              Reference: +row.Reference,
              Percentage: +row.Percentage,
              Experiments: +row.Experiments
          });
        }
    ).then(function(data) {
      color
          .domain(Object.keys((data[0])))
          .range(d3.schemeCategory10)

      // Add X axis
    const x = d3.scaleLinear()
        .domain([0, 100])
        .range([ 0, width]);
    svg.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end');

    // Y axis
    const y = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map(d => d.Organism))
        .padding(.1);
    svg.append('g')
        .call(d3.axisLeft(y))

    // Bars
    svg.selectAll('myRect')
        .data(data)
        .join('rect')
        .attr('x', x(0))
        .attr('y', d => y(d.Organism))
        .attr('width', d => x(d.Percentage))
        .attr('height', y.bandwidth())
        .attr('fill', '#68297c');
    })
  }

}
