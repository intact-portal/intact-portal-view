import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as d3 from 'd3';
import {LabelType, Options} from '@angular-slider/ngx-slider';
import {ChartOptions} from './chart-options.model';
import {Filter, FilterService} from '../../../shared/service/filter.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Facet} from '../../../shared/model/interactions-results/facet.model';
import {BaseType} from 'd3';

@UntilDestroy()
@Component({
  selector: 'ip-histogram-slider',
  templateUrl: './chart-slider.component.html',
  styleUrls: ['./chart-slider.component.css']
})
export class ChartSliderComponent implements OnInit, AfterViewInit {

  @Input()
  cOptions: ChartOptions;
  options: Options;
  labelXMargin = 4;
  labelYMargin = 0;

  totalInRange = 0;

  @ViewChild('histogram')
  svgRef: ElementRef<SVGElement>;
  @ViewChild('chartArea')
  chartAreaRef: ElementRef<SVGGElement>;
  @ViewChild('leftLine')
  leftLineRef: ElementRef<SVGLineElement>;
  @ViewChild('rightLine')
  rightLineRef: ElementRef<SVGLineElement>;
  @ViewChild('labels')
  labelsRef: ElementRef<SVGGElement>;
  @ViewChild('total')
  totalRef: ElementRef<SVGGElement>;

  gradientColors: GradientColor[] = [];

  svg: d3.Selection<SVGGElement, any, any, any>;
  path: d3.Selection<SVGPathElement, any, any, any>;
  labels: d3.Selection<SVGGElement, Bin, null, undefined>;
  labelBackgrounds: d3.Selection<BaseType | SVGRectElement, Bin, any, Bin>;
  bins: Bin[];
  x: d3.ScaleLinear<number, number>;
  y: d3.ScaleLinear<number, number>;
  line: d3.Line<[number, number]>;
  innerHeight: number;
  innerWidth: number;
  density: (miScoreFacets: Facet[]) => [number, number][];
  totalLine: d3.Selection<SVGLineElement, any, any, any>;
  totalRect: d3.Selection<SVGRectElement, any, any, any>;
  totalLabel: d3.Selection<SVGTextElement, any, any, any>;
  totalFormat = new Intl.NumberFormat();

  constructor(public filters: FilterService) {
  }

  ngAfterViewInit(): void {
    this.cOptions = {...defaultHOptions, ...this.cOptions}

    this.innerWidth = this.cOptions.width - this.cOptions.margin.left - this.cOptions.margin.right;
    this.innerHeight = this.cOptions.height - this.cOptions.margin.top - this.cOptions.margin.bottom;

    this.x = d3.scaleLinear()
      .domain([this.cOptions.minX, this.cOptions.maxX])
      .range([0, this.innerWidth]);

    this.y = d3.scaleLinear()
      .range([this.innerHeight, 0]);

    this.line = d3.line()
      .curve(d3.curveBasis)
      .x(d => this.x(d[0]))
      .y(d => this.y(d[1]));

    this.density = kernelDensityEstimator<Facet>(
      this.x.ticks(40),
      0.025,
      facet => parseFloat(facet.value),
      facet => facet.valueCount
    );

    d3.select(this.svgRef.nativeElement)
      .attr('viewBox', [0, 0, this.cOptions.width, this.cOptions.height])
      .attr('width', this.cOptions.width)
      .attr('height', this.cOptions.height);

    this.svg = d3.select(this.chartAreaRef.nativeElement)
      .attr('transform', `translate(${this.cOptions.margin.left},${this.cOptions.margin.top})`);

    this.labels = d3.select(this.labelsRef.nativeElement);

    this.fillBins();

    this.labels.append('g')
      .style('font', '12px sans-serif')
      .selectAll('text')
      .data(this.bins)
      .join('text')
      .attr('fill', (d, i) => this.labelColors[i])
      .attr('text-anchor', 'middle')
      .attr('x', d => this.x(d.x0 + 0.05) + this.cOptions.margin.left)
      .attr('y', (d, i) => i % 2 === 0 ? 12 : 30)
      .text(d => d.amount);

    this.labelBackgrounds = this.labels.append('g')
      .selectAll('rect')
      .data(this.bins)
      .join('rect')
      .attr('x', d => this.x(d.x0 + 0.05) + this.cOptions.margin.left)
      .attr('y', (d, i) => i % 2 === 0 ? 12 : 30)
      .style('fill', d => this.colorAt(d.x1) + '1A')
      .style('stroke', d => this.colorAt(d.x1));

    const totalCount = d3.select(this.totalRef.nativeElement)
      .attr('transform', `translate(${this.cOptions.margin.left},${this.cOptions.margin.top + this.innerHeight})`);

    this.totalLine = totalCount.append('line')
      .attr('stroke', '#68297c')
      .attr('y1', 9)
      .attr('y2', 9);
    this.totalRect = totalCount.append('rect')
      .attr('fill', '#68297c')
      .attr('rx', 8)
      .attr('ry', 8)
      .attr('height', 16);
    this.totalLabel = totalCount.style('font', '12px sans-serif').append('text')
      .attr('fill', 'white')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'text-before-edge')
      .attr('y', 2);

    const density = this.density(this.filters.facets.intact_miscore);
    this.y.domain([0, d3.max(density, d => d[1])]);
    this.path = this.svg.append('path')
      .attr('fill', 'url(#MIScoreGradient)')
      .attr('stroke', 'url(#MIScoreGradient)')
      .attr('stroke-width', 1.5)
      .attr('stroke-linejoin', 'round')
      .attr('style', 'filter: drop-shadow(0px 0px 2px rgba(104, 41, 124, 0.4)');

    this.draw();

    this.filters.$updateFacets
      .pipe(untilDestroyed(this))
      .subscribe(this.draw.bind(this));

    onVisible(this.svgRef.nativeElement, () => {
      this.placeLabels();
      this.placeTotal();
    })
  }

  draw() {
    this.drawDensityCurve();
    this.drawAmounts();
    this.updateLinePosition();
    this.updateGradient();
  }

  onSliderUpdate() {
    this.updateLinePosition();
    this.updateGradient();
    this.placeTotal();
  }

  placeTotal() {
    this.totalInRange = this.filters.facets.intact_miscore
      .map(facet => ({value: parseFloat(facet.value), valueCount: facet.valueCount}))
      .reduce((sum, facet) => (facet.value >= this.filters.currentMinMIScore && facet.value <= this.filters.currentMaxMIScore) ? sum + facet.valueCount : sum, 0);

    const middle = this.x((this.filters.currentMinMIScore + this.filters.currentMaxMIScore) / 2);
    const bbox = this.totalLabel.text(this.totalFormat.format(this.totalInRange))
      .attr('x', middle)
      .node().getBBox();
    this.totalRect
      .attr('x', bbox.x - 4)
      .attr('y', bbox.y)
      .attr('width', bbox.width + 8)
      .attr('height', bbox.height)
    this.totalLine
      .attr('x1', this.x(this.filters.currentMinMIScore))
      .attr('x2', this.x(this.filters.currentMaxMIScore));
  }

  private updateGradient() {
    this.gradientColors = [];
    const limits = Array.from({length: 11}, (v, k) => k / 10)
    insert(limits, this.filters.currentMinMIScore);
    insert(limits, this.filters.currentMaxMIScore);
    for (const limit of limits) {
      this.gradientColors.push(
        {stop: (limit - 0.0001) * 100 + '%', color: this.thresholdColorAt(limit - 0.0001)},
        {stop: (limit + 0.0001) * 100 + '%', color: this.thresholdColorAt(limit + 0.0001)},
      )
    }
  }

  private updateLinePosition() {
    d3.select(this.leftLineRef.nativeElement)
      .attr('x1', this.x(this.filters.currentMinMIScore) + this.cOptions.margin.left)
      .attr('x2', this.x(this.filters.currentMinMIScore) + this.cOptions.margin.left)
    d3.select(this.rightLineRef.nativeElement)
      .attr('x1', this.x(this.filters.currentMaxMIScore) + this.cOptions.margin.left)
      .attr('x2', this.x(this.filters.currentMaxMIScore) + this.cOptions.margin.left)
  }

  private drawDensityCurve() {
    const density: [number, number][] = [[-0.0001, 0], ...this.density(this.filters.facets.intact_miscore), [1.0001, 0]];
    const max = d3.max(density, d => d[1]);
    this.y.domain([0, max]);
    this.path.datum(density).attr('d', this.line(density))
  }

  private drawAmounts() {
    this.fillBins();
    this.placeLabels();
  }

  private fillBins() {
    const bins: Bin[] = new Array(11)
      .fill(0)
      .map((value, index) => ({x0: index / 10, x1: (index + 1) / 10, amount: 0}));
    console.log(bins)
    this.filters.facets.intact_miscore.forEach(facet => {
      const value = Math.trunc(parseFloat(facet.value) * 10);
      bins[value].amount += facet.valueCount;
    })
    bins[9].amount += bins.pop().amount;

    this.bins = bins;
  }

  placeLabels() {
    this.labels.selectAll('text')
      .data(this.bins)
      .text(d => d.amount)
      .each(function (d) {
        d.bbox = (this as SVGGraphicsElement).getBBox();
      });
    this.labels.selectAll('rect')
      .data(this.bins)
      .attr('height', d => d.bbox.height + 2 * this.labelYMargin)
      .attr('width', d => d.bbox.width + 2 * this.labelXMargin)
      .attr('transform', d => `translate(-${d.bbox.width / 2 + this.labelXMargin}, -${d.bbox.height * 0.8 + this.labelYMargin})`)
      .attr('rx', d => d.bbox.height / 2)
      .attr('ry', d => d.bbox.height / 2)
  }

  labelColors: string[] = [
    'rgb(254,153,41)',
    'rgb(254,153,41)',
    'rgb(254,153,41)',
    'rgb(254,153,41)',
    'rgb(254,153,41)',
    'rgb(236,112,20)',
    'rgb(204,76,2)',
    'rgb(153,52,4)',
    'rgb(102,19,5)',
    'rgb(54, 19, 3)'
  ];

  thresholdColorAt(value: number) {
    return value < this.filters.currentMinMIScore || value > this.filters.currentMaxMIScore ? this.colorAt(value) + '1A' : this.colorAt(value);
  }

  colorAt(value: number): string {
    if (value <= 0.1) {
      return '#FFFFE5';
    } else if (value <= 0.2) {
      return '#FFF7BC';
    } else if (value <= 0.3) {
      return '#FEE391';
    } else if (value <= 0.4) {
      return '#FEC44F';
    } else if (value <= 0.5) {
      return '#FE9929';
    } else if (value <= 0.6) {
      return '#EC7014';
    } else if (value <= 0.7) {
      return '#CC4C02';
    } else if (value <= 0.8) {
      return '#993404';
    } else if (value <= 0.9) {
      return '#662506';
    } else {
      return '#361303';
    }
  }

  ngOnInit(): void {
    this.updateGradient();
    this.options = {
      floor: 0,
      ceil: 1,
      minLimit: 0,
      maxLimit: 1,
      step: 0.01,
      animate: false,
      showSelectionBar: true,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return '<b>Min:</b> ' + value;
          case LabelType.High:
            return '<b>Max:</b> ' + value;
          default:
            return String(value);
        }
      },
      getPointerColor: this.colorAt
    }
  }

  updateFilter() {
    this.filters.updateFilter(Filter.MI_SCORE)
  }
}

interface GradientColor {
  stop: string;
  color: string;
}

interface Bin {
  amount: number,
  x0: number,
  x1: number,
  bbox?: SVGRect
}

const defaultHOptions: ChartOptions = {
  margin: {bottom: 16, left: 16, right: 16, top: 35},
  width: 800,
  height: 200,
  minX: 0,
  maxX: 1
}

function kernelDensityEstimator<D>(samples: number[], bandwidth: number, valueAccessor: (data: D) => number, weightAccessor: (data: D) => number): (data: D[]) => [number, number][] {
  function epanechnikov(diff: number): number {
    return Math.abs(diff) <= 1 ? 0.75 * (1 - diff * diff) : 0;
  }

  function scaledEpanechnikov(sample: number, d: D): number {
    return epanechnikov((sample - valueAccessor(d)) / bandwidth);
  }

  return (data: D[]) => samples.map(sample => [sample, d3.sum(data, d => scaledEpanechnikov(sample, d) * weightAccessor(d))]);
}

function sortedIndex(array: number[], value: number) {
  let low = 0, high = array.length;

  while (low < high) {
    const mid = (low + high) >>> 1;
    if (array[mid] < value) low = mid + 1;
    else high = mid;
  }
  return low;
}

function insert(array: number[], element: number) {
  array.splice(sortedIndex(array, element), 0, element);
  return array;
}

function onVisible(element, callback) {
  const options = {
    root: document.documentElement,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) callback();
    });
  }, options);

  observer.observe(element);
}
