import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import * as d3 from 'd3';
import {strategy} from '@angular-devkit/core/src/experimental/jobs';
import reuse = strategy.reuse;

@Component({
    selector: 'ip-multiline-graph',
    templateUrl: './multiline-graph.component.html',
    styleUrls: ['./multiline-graph.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MultilineGraphComponent implements OnInit, AfterViewInit {
    @Input() dataPath: string;
    @Input() dateGranularity: 'day' | 'year' = 'day';

    @ViewChild('lineChart')
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
        // const color: d3.ScaleOrdinal<string, string> = d3.scaleOrdinal();
        const numberFormat = new Intl.NumberFormat();
        const dateFormat = new Intl.DateTimeFormat();
        const xAxis = d3.axisBottom(x);
        const yAxis = d3.axisLeft(y);
        const line = d3.line<DatedAmount>()
            .curve(this.dateGranularity === 'year' ? d3.curveStepAfter : d3.curveLinear)
            .x(d => x(d.date))
            .y(d => y(d.amount));
        const svg = d3.select(this.svgRef.nativeElement)
            // .attr('width', width + margin.left + margin.right)
            // .attr('height', height + margin.top + margin.bottom)
            .attr('viewBox', [0, 0, WIDTH, HEIGHT])
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        d3.csv(this.dataPath, (row) => ({
                date: new Date(row.Date),
                ...Object.keys(row).reduce((out, key) => {
                    out[key.replace('_', ' ')] = +row[key];
                    return out;
                }, {})
            })
        ).then((data) => {
            const domains: string[] = Object.keys(data[0]).filter(key => key !== 'Date' && key !== 'date');
            const datedAmountsMap: NamedAmounts[] = domains.map(name => ({
                name: name,
                datedAmounts: data.map(d => ({
                    date: d.date,
                    amount: d[name]
                }))
            })).sort((a, b) => b.datedAmounts[b.datedAmounts.length - 1].amount - a.datedAmounts[a.datedAmounts.length - 1].amount);
            const len = datedAmountsMap.length;
            const lineColor: d3.ScaleOrdinal<string, string> = d3.scaleOrdinal()
                .domain(datedAmountsMap.map(d => d.name))
                .range(datedAmountsMap.map((d, i) => d3.interpolatePlasma( 0.2 + (i / len) / 1.5) + 'af') ) as d3.ScaleOrdinal<string, string>;

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
                .attr('stroke', (d) => lineColor(d.name))
                .style('stroke-width', '2px')

            amount.append('text')
                .datum(d => ({
                    name: d.name,
                    value: d.datedAmounts[d.datedAmounts.length - 1]
                }))
                .attr('transform', d => `translate(${x(d.value.date)},${y(d.value.amount)})`)
                .attr('x', 3)
                .attr('dy', '.35em')
                .style('font-size', '12px')
                .text(d => d.name);

            const mouseG = svg.append('g')
                .attr('class', 'mouse-over-effects')
                .style('opacity', '0');

            const mouseLine = mouseG.append('path') // this is the black vertical line to follow mouse
                .attr('class', 'mouse-line')
                .attr('stroke', 'grey')
                .attr('stroke-width', '1px')

            const mouseLegendG = mouseG.append('g');

            const mouseLegendBg = mouseLegendG.append('rect')
                .style('fill', 'white')
                .style('opacity', '0.85')
                .style('stroke', 'grey')

            const mouseLegend = mouseLegendG
                .append('g')
                .attr('class', 'mouse-legend');

            const mouseDate = mouseG.append('text')
                .attr('text-anchor', 'middle')
                .attr('alignment-baseline', 'hanging')
                .style('font-size', '12px');

            const mouseLegendTexts = mouseLegend.selectAll('mouse-legend-texts')
                .data(datedAmountsMap)
                .enter()
                .append('text')
                .attr('class', 'mouse-legend-text')
                .attr('fill', d => lineColor(d.name))
                .attr('y', (d, i) => 15 * i + 30)
                .style('font-size', '12px');

            const lines: HTMLCollectionOf<SVGLineElement> = <HTMLCollectionOf<SVGLineElement>>document.getElementsByClassName('line');

            const mousePerLine = mouseG.selectAll('.mouse-per-line')
                .data(datedAmountsMap)
                .enter()
                .append('g')
                .attr('class', 'mouse-per-line');

            mousePerLine.append('circle')
                .attr('r', 4)
                .style('stroke', d => lineColor(d.name))
                .style('fill', d => lineColor(d.name))
                .style('stroke-width', '1px')

            mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
                .attr('width', width) // can't catch mouse events on a g element
                .attr('height', height)
                .attr('fill', 'none')
                .attr('pointer-events', 'all')
                .on('mouseout', () => { // on mouse out hide line, circles and text
                    mouseG
                        .style('opacity', '0');
                })
                .on('mouseover', () => { // on mouse in show line, circles and text
                    mouseG
                        .style('opacity', '1');
                })
                .on('mousemove', e => { // mouse moving over canvas
                    const mouse = d3.pointer(e);

                    mouseLine
                        .attr('d', () => `M${mouse[0]},${height} ${mouse[0]},0`);

                    const date = x.invert(mouse[0]);
                    mouseDate
                        .attr('transform', `translate(${mouse[0]}, ${-margin.top})`)
                        .text(this.dateGranularity === 'year' ? date.getFullYear() : dateFormat.format(date))

                    const bbox = mouseLegend.node().getBBox();
                    const border = 5;
                    mouseLegendBg
                        .attr('x', bbox.x - border)
                        .attr('y', bbox.y - border)
                        .attr('width', bbox.width + 2 * border)
                        .attr('height', bbox.height + 2 * border)
                    if (mouse[0] + bbox.width / 2 + border > WIDTH / 2) {
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

                    mousePerLine
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

