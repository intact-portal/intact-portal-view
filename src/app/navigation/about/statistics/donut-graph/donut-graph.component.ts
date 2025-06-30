import {AfterViewInit, Component, ElementRef, OnInit, ViewEncapsulation, input, viewChild} from '@angular/core';
import * as d3 from 'd3';

// // https://observablehq.com/@d3/zoomable-treemap

interface Data {
    label: string,
    amount: number,
    percentage: number,
}

@Component({
    selector: 'ip-donut-graph',
    templateUrl: './donut-graph.component.html',
    styleUrls: ['./donut-graph.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class DonutGraphComponent implements OnInit, AfterViewInit {
    readonly dataPath = input<string>(undefined);
    readonly threshold = input<number>(null);

    readonly svgRef = viewChild<ElementRef<SVGElement>>('pieChart');

    constructor() {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        // set globals for box
        const WIDTH = 800;
        const HEIGHT = 400;
        const margin = {
                top: 20,
                right: 160,
                bottom: 30,
                left: 55
            },
            width = WIDTH - margin.left - margin.right,
            height = HEIGHT - margin.top - margin.bottom;
        const numberFormat = new Intl.NumberFormat();
        const radius = Math.min(width, height) / 2;
        const svg = d3.select(this.svgRef().nativeElement)
            .attr('viewBox', [0, 0, WIDTH, HEIGHT])
            .append('g')
            .attr('transform', `translate(${WIDTH / 2}, ${HEIGHT / 2})`);

        // Open data
        d3.csv(this.dataPath(), (row) => ({
            label : row.label,
            amount : +row.amount
            })
        ).then( (data: any) => {
            // slice data to set threshold to visualise in donut
            const threshold = this.threshold();
            if (threshold !== null) {
                const others = data.slice(threshold, data.length).reduce((t, e) => t + e.amount, 0)
                data = data.slice(0, threshold);
                data.push({label: 'Others', amount: others})
            }
            const total = data.reduce((t, e) => t + e.amount, 0)
            data.forEach(d => d.percentage = d.amount / total * 100)

            const pie = d3.pie<Data>()
                .value((d) => d.amount)
                .sort(() => 0)
            // Compute the position of each group on the pie:

            const len = data.length;
            const data_ready = pie(data)
            // Set donut size
            const arc: d3.Arc<any, any> = d3.arc()
                .innerRadius(radius * 0.5)
                .outerRadius(radius * 0.8);
            // Set size for labels and polylines
            const outerArc = d3.arc<any, any>()
                .innerRadius(radius * 0.9)
                .outerRadius(0.9 * radius)

            const DEFAULT_OPACITY = 0.7;
            // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
            svg
                .selectAll('allSlices')
                .data(data_ready)
                .enter()
                .append('path')
                .attr('d', arc)
                .attr('fill', (d, i) => d3.interpolateSpectral(i / len))
                .attr('stroke', 'white')
                .style('stroke-width', '1px')
                .style('opacity', 0.8)
                .on('mouseover', function (event, d) {
                    const i = data_ready.indexOf(d);
                    d3.select(this).transition()
                        .duration(200)
                        .attr('d', arc.innerRadius(0.55 * radius).outerRadius(0.85 * radius));
                    polyLines
                        .filter(`#line-${i}`)
                        .transition()
                        .duration(200)
                        .attr('points', placeLine)
                        .style('opacity', 1)

                    polylabels
                        .filter(`#line-${i}`)
                        .transition()
                        .duration(200)
                        .style('opacity', 1)
                        .select('.method-amount').style('opacity', 0.6)
                        .attr('dy', '1.2em')
                })
                .on('mouseout', function (event, d) {
                    const i = data_ready.indexOf(d);
                    d3.select(this).transition()
                        .duration(200)
                        .attr('d', arc.innerRadius(0.5 * radius).outerRadius(0.80 * radius))
                    polyLines
                        .filter(`#line-${i}`)
                        .transition()
                        .duration(200)
                        .attr('points', placeLine)
                        .style('opacity', DEFAULT_OPACITY)
                    polylabels
                        .filter(`#line-${i}`)
                        .transition()
                        .duration(200)
                        .style('opacity', DEFAULT_OPACITY)
                        // .text(d.data.label)
                        .select('.method-amount').style('opacity', 0)
                        .attr('dy', '0em')
                })

            // variable for line placement and line placement
            const placeLine = d => {
                const posA = arc.centroid(d) // line insertion in the slice
                const posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
                const posC = outerArc.centroid(d); // label position = almost the same as posB
                const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
                posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
                return [posA, posB, posC].toString()
            };
            const polyLines = svg
                .selectAll('allPolylines')
                .data(data_ready)
                .join('polyline')
                .attr('id', (d, i) => `line-${i}`)
                .attr('stroke', 'black')
                .style('opacity', DEFAULT_OPACITY)
                .style('fill', 'none')
                .attr('stroke-width', 1)
                .attr('points', placeLine)

            // Add the polylines between chart and labels:
            const polylabels = svg
                .selectAll('alllabels')
                .data(data_ready)
                .join('text')
                .attr('id', (d, i) => `line-${i}`)
                .attr('transform', d => {
                    const pos = outerArc.centroid(d);
                    const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
                    pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
                    return `translate(${pos})`;
                })
                .attr('dy', '0.25em')
                .style('opacity', DEFAULT_OPACITY)
                .style('font-size', '12px')
                .style('text-anchor', d => {
                    const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
                    return (midangle < Math.PI ? 'start' : 'end')
                })

            // Set labels for text formatting
            polylabels.append('tspan')
                .attr('class', 'method-name')
                .attr('x', '0')
                .text(d => d.data.label)
                .style('font-size', '14px')

            polylabels.append('tspan')
                .attr('class', 'method-amount')
                .text(d => `${numberFormat.format(d.data.amount)} - ${d.data.percentage.toFixed(0)}%`)
                .attr('x', '0')
                .attr('dy', '0em')
                .style('opacity', 0)
                .style('font-size', '12px')

        })
    }
}
