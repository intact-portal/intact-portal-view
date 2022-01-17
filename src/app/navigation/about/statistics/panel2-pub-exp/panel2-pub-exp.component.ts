import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'ip-panel2-pub-exp',
  templateUrl: './panel2-pub-exp.component.html',
  styleUrls: ['./panel2-pub-exp.component.css']
})
export class Panel2PubExpComponent implements OnInit,AfterViewInit {
  @Input() data;

  @ViewChild('panel2')
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
        right: 160,
        bottom: 30,
        left: 55
      },
      width = WIDTH - margin.left - margin.right,
      height = HEIGHT - margin.top - margin.bottom;
    const x = d3.scaleTime()
      .range([0, width]);
    const y = d3.scaleLinear()
      .range([height, 0]);
    const color: d3.ScaleOrdinal<string, string> = d3.scaleOrdinal();
    const numberFormat = new Intl.NumberFormat();
    const dateFormat = new Intl.DateTimeFormat();
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);
    const line = d3.line<DatedAmount>()
      .curve(d3.curveLinear)
      .x(d => x(d.date))
      .y(d => y(d.amount));
    const svg = d3.select(this.svgRef.nativeElement)
      // .attr('width', width + margin.left + margin.right)
      // .attr('height', height + margin.top + margin.bottom)
      .attr('viewBox', [0, 0, WIDTH, HEIGHT])
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    d3.csv('./assets/data-files/panel_2.csv', (row) => ({
      date: new Date(row.Date),
      'Publications': +row.Publications,
      'Experiments': +row.Experiments

    })).then((data) => {
      color
        .domain(Object.keys(data[0]).filter(key => key !== 'date'))
        .range(d3.schemeCategory10)

      const datedAmountsMap: NamedAmounts[] = color.domain().map(name => ({
        name: name,
        datedAmounts: data.map(d => ({
          date: d.date,
          amount: d[name]
        }))
      }));
      x.domain(d3.extent(data, d => d.date));
      y.domain([0, d3.max(datedAmountsMap, item => d3.max(item.datedAmounts, v => v.amount))]);

      svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis);

      svg.append('g')
        .attr('class', 'y axis')
        .call(yAxis)
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '.71em')
        .style('text-anchor', 'end')
        .text('Amount');

      const amount = svg.selectAll('.amount')
        .data(datedAmountsMap)
        .enter().append('g')
        .attr('class', 'amount');

      amount.append('path')
        .attr('class', 'line')
        .attr('d', d => line(d.datedAmounts))
        .attr('stroke', d => color(d.name));

      amount.append('text')
        .datum(d => ({
          name: d.name,
          value: d.datedAmounts[d.datedAmounts.length - 1]
        }))
        .attr('transform', d => `translate(${x(d.value.date)},${y(d.value.amount)})`)
        .attr('x', 3)
        .attr('dy', '.35em')
        .text(d => d.name);

      const mouseG = svg.append('g')
        .attr('class', 'mouse-over-effects')
        .style('opacity', '0');

      mouseG.append('path') // this is the black vertical line to follow mouse
        .attr('class', 'mouse-line')
        .style('stroke', 'black')
        .style('stroke-width', '1px')

      const mouseLegendG = mouseG.append('g');

      const mouseLegendBg = mouseLegendG.append('rect')
        // .attr('rx', '5')
        // .attr('ry', '5')
        .style('fill', 'white')
        .style('opacity', '0.85')
        .style('stroke', 'black')

      const mouseLegend = mouseLegendG
        .append('g')
        .attr('class', 'mouse-legend');

      const mouseDate = mouseG.append('text')
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'hanging');

      const mouseLegendTexts = mouseLegend.selectAll('mouse-legend-texts')
        .data(datedAmountsMap)
        .enter()
        .append('text')
        .attr('class', 'mouse-legend-text')
        .attr('fill', d => color(d.name))
        .attr('y', (d, i) => 20 * i + 30);

      const lines: HTMLCollectionOf<SVGLineElement> = <HTMLCollectionOf<SVGLineElement>>document.getElementsByClassName('line');

      const mousePerLine = mouseG.selectAll('.mouse-per-line')
        .data(datedAmountsMap)
        .enter()
        .append('g')
        .attr('class', 'mouse-per-line');

      mousePerLine.append('circle')
        .attr('r', 4)
        .style('stroke', d => color(d.name))
        .style('fill', d => color(d.name))
        .style('stroke-width', '1px')

      mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
        .attr('width', width) // can't catch mouse events on a g element
        .attr('height', height)
        .attr('fill', 'none')
        .attr('pointer-events', 'all')
        .on('mouseout', () => { // on mouse out hide line, circles and text
          d3.select('.mouse-over-effects')
            .style('opacity', '0');
        })
        .on('mouseover', () => { // on mouse in show line, circles and text
          d3.select('.mouse-over-effects')
            .style('opacity', '1');
        })
        .on('mousemove', e => { // mouse moving over canvas
          const mouse = d3.pointer(e);

          d3.select('.mouse-line')
            .attr('d', () => `M${mouse[0]},${height} ${mouse[0]},0`);

          const date = x.invert(mouse[0]);
          mouseDate
            .attr('transform', `translate(${mouse[0]}, ${-margin.top})`)
            .text(dateFormat.format(date))

          const bbox = mouseLegend.node().getBBox();
          const border = 5;
          mouseLegendBg
            .attr('x', bbox.x - border)
            .attr('y', bbox.y - border)
            .attr('width', bbox.width + 2 * border)
            .attr('height', bbox.height + 2 * border)
          if (mouse[0] + bbox.width + 5 + 2 * border > WIDTH - margin.left) {
            mouseLegendG.attr('transform', `translate(${mouse[0] - (bbox.width + 2 * border - 5)},20)`);
          } else {
            mouseLegendG.attr('transform', `translate(${mouse[0] + 5},20)`);
          }

          let index, min = 0, max = data.length, step = 0;
          const maxStep = data.length

          while (step++ < maxStep) {
            index = Math.floor((min + max) / 2)
            const testDate = data[index].date.toDateString();
            const targetDate = date.toDateString();
            if (testDate === targetDate || min + 1 === max) {
              break;
            } else if (data[index].date < date) {
              min = index;
            } else {
              max = index
            }
          }

          d3.selectAll('.mouse-per-line')
            .attr('transform', function (namedAmounts: NamedAmounts, i) {
              const yValue = namedAmounts.datedAmounts[index].amount;
              mouseLegendTexts
                .filter(datum => datum === namedAmounts)
                .text(numberFormat.format(Number(yValue)) + ' ' + namedAmounts.name)
              return `translate(${mouse[0]},${y(yValue)})`;
            });
        });

    });


  }

}

export interface DatedAmount {
  date: Date,
  amount: number
}

export interface NamedAmounts {
  name: string,
  datedAmounts: DatedAmount[]
}

