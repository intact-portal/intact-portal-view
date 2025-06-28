import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';


@Component({
    selector: 'ip-h-bar-graph',
    templateUrl: './h-bar-graph.component.html',
    styleUrls: ['./h-bar-graph.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class HBarGraphComponent implements OnInit, AfterViewInit {
  @Input() dataPath: string;

  @ViewChild('barChart')
  svgRef: ElementRef<SVGElement>;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const WIDTH = 900;
    const HEIGHT = 400;
    const margin = {
        top: 20,
        right: 80,
        bottom: 50,
        left: 100
      },
      width = WIDTH - margin.left - margin.right,
      height = HEIGHT - margin.top - margin.bottom;
    const numberFormat = new Intl.NumberFormat();
    const svg = d3.select(this.svgRef.nativeElement)
      .attr('viewBox', [0, 0, WIDTH, HEIGHT])
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);


    d3.csv(this.dataPath, (row) => {
        return ({
          Organism: row.Organism,
          Reference: +row.Reference,
          Percentage: +row.Percentage,
          Proteins: +row.Proteins
        });
      }
    ).then(function (data) {
      const color: d3.ScaleOrdinal<any, any> = d3.scaleOrdinal() // TODO use style webservice as a fallback
        .domain([
          'H. sapiens', 'M. musculus',
          'A. thaliana', 'R. norvegicus',
          'C. elegans', 'D. melanogaster',
          'S. cerevisiae', 'E. coli',
          'Synechocystis sp.', 'C. jejuni',
          'SARS-CoV-2', 'Z. mays'])
        .range([
          'rgb(51, 94, 148)', 'rgb(49, 51, 110)',
          'rgb(60, 115, 60)', 'rgb(86, 136, 192)',
          'rgb(55, 109, 104)', 'rgb(59, 148, 144)',
          'rgb(174, 131, 67)', 'rgb(154, 55, 58)',
          'rgb(221, 67, 72)', 'rgb(221, 67, 72)',
          'rgb(132, 100, 190)', 'rgb(80, 162, 79)'
        ])

      // Add X axis
      const max = d3.max(data, d => d.Reference);
      const x = d3.scaleLinear()
        .domain([0, max])
        .range([0, width]);

      const xAxis = svg.append('g')
        .attr('transform', `translate(0, ${height})`)
        .style('text-anchor', 'middel')
        .text('Proteome coverage in absolute numbers')
        .attr('class', 'x axis')
        .call(d3.axisBottom(x).ticks(10));
      xAxis
        .selectAll('text')
        .style('text-anchor', 'middle')

      const xLabel = svg.append('text')
        .attr('transform', 'translate(' + (width / 2) + ' ,' + (height + margin.top + 20) + ')')
        .style('text-anchor', 'middle')
        .style('font-size', '12px')
        .text('Proteome coverage in absolute numbers');

      // Y axis
      const y = d3.scaleBand()
        .range([0, height])
        .domain(data.map(d => d.Organism))
        .padding(.1);
      svg.append('g')
        .call(d3.axisLeft(y).ticks(10))

      const gridlinesX = d3.axisBottom(x).tickSize(-height).ticks(10);
      const xAxisGrid =
        svg.append('g')
          .attr('class', 'x axis-grid')
          .attr('transform', 'translate(0,' + height + ')')
          .call(gridlinesX);

      // Bars 100%
      const references = svg.selectAll('myRect')
        .data(data)
        .join('rect')
        .attr('class', 'reference')
        .attr('x', x(0))
        .attr('y', d => y(d.Organism))
        .attr('width', d => x(d.Reference))
        .attr('height', y.bandwidth())
        .attr('fill', 'rgba(2,0,0,0.98)')
        .style('opacity', 0.1);

      // Bars real %
      const reals = svg.selectAll('myRect')
        .data(data)
        .join('rect')
        .attr('class', 'real')
        .attr('x', x(0))
        .attr('y', d => y(d.Organism))
        .attr('width', d => x(d.Proteins))
        .attr('height', y.bandwidth())
        .attr('fill', d => color(d.Organism))
        .style('opacity', 0.9);

      const precentLabels = svg.selectAll('precentLabel')
        .data(data)
        .join('text')
        .attr('y', d => y(d.Organism) + 7.5)
        .attr('alignment-baseline', 'middle')
        .style('font-size', '10px');
      // .style('opacity', 0.6);

      const percentLeft = svg.selectAll('percentage')
        .data(data)
        .join('text')
        .attr('class', 'percentage')
        .text(d => `${d.Percentage}%`)
        .attr('x', x(0) + 5)
        .attr('y', d => y(d.Organism) + 7.5)
        .attr('dy', '9')
        .style('text-anchor', 'end')
        .style('fill', 'white')
        .style('font-size', '12px')
        .style('opacity', 0)

      precentLabels.append('tspan')
        .attr('class', 'precentLabels')
        .text(d => `${d.Percentage}% of`)
        .attr('x', d => x(d.Reference) + 5)
        .attr('dy', '3')
        .style('font-size', '10px')
        .style('opacity', 0.6)

      precentLabels.append('tspan')
        .attr('class', 'referenceLabels')
        .text(d => `${numberFormat.format(d.Reference)} proteins`)
        .attr('x', d => x(d.Reference) + 5)
        .attr('dy', '1.2em')
        .style('font-size', '10px')
        .style('opacity', 0.6)

      const mouseG = svg.append('g')
        .attr('class', 'mouse-over-effects')
        .style('opacity', '0');

      mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
        .attr('width', width) // can't catch mouse events on a g element
        .attr('height', height)
        .attr('fill', 'none')
        .attr('pointer-events', 'all')
        .on('mouseover', () => { // on mouse in show line, circles and text
          x.domain([0, 100]);
          references.transition().duration(200).attr('width', x(100));
          reals.transition().duration(200).attr('width', d => x(d.Percentage));
          xAxis.transition().duration(200).call(d3.axisBottom(x));
          xAxisGrid.transition().duration(200).call(gridlinesX);
          xLabel.text('Proteome coverage in percentage');
          percentLeft
            .transition().duration(200)
            .attr('x', d => x(d.Percentage) - 5)
            .text(d => `${d.Percentage}%`)
            .style('opacity', 1)
          precentLabels
            .transition().duration(200)
            .selectAll('tspan')
            .attr('x', x(110))
            .style('opacity', 0)
        })
        .on('mouseout', () => { // on mouse out hide line, circles and text
          x.domain([0, max]);
          references.transition().duration(200).attr('width', d => x(d.Reference));
          reals.transition().duration(200).attr('width', d => x(d.Proteins));
          xAxis.transition().duration(200).call(d3.axisBottom(x))
          xAxisGrid.transition().duration(200).call(gridlinesX);
          xLabel.text('Proteome coverage in absolute numbers')
          percentLeft
            .transition().duration(200)
            .attr('x', x(0) + 5)
            .style('opacity', 0)
          precentLabels
            .transition().duration(200)
            .selectAll('tspan')
            .attr('x', (d: any) => x(d.Reference) + 5)
            .style('opacity', 0.6)

        })

    });
  }

}
