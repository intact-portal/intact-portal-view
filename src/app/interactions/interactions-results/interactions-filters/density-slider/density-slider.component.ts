import {AfterViewInit, Component, ElementRef, input, Input, OnInit, viewChild, ViewChild} from '@angular/core';
import * as d3 from 'd3';
import {LabelType, Options} from '@angular-slider/ngx-slider';
import {DensityOptions} from './density-options.model';
import {Filter, FilterService} from '../../../shared/service/filter.service';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Facet} from '../../../shared/model/interactions-results/facet.model';

@UntilDestroy()
@Component({
  selector: 'ip-density-slider',
  templateUrl: './density-slider.component.html',
  styleUrls: ['./density-slider.component.css']
})
export class DensitySliderComponent implements OnInit, AfterViewInit {


  dOptions = input.required<DensityOptions, DensityOptions>({
    transform: options => ({...defaultHOptions, ...options})
  });
  options: Options;

  totalInRange = 0;
  initMin = 0;
  initMax = 1;

  svgRef = viewChild.required<ElementRef<SVGElement>>('histogram');
  chartAreaRef = viewChild.required<ElementRef<SVGGElement>>('chartArea');
  leftLineRef = viewChild.required<ElementRef<SVGLineElement>>('leftLine');
  rightLineRef = viewChild.required<ElementRef<SVGLineElement>>('rightLine');
  totalRef = viewChild.required<ElementRef<SVGGElement>>('total');

  gradientColors: GradientColor[] = [];

  svg: d3.Selection<SVGGElement, any, any, any>;
  path: d3.Selection<SVGPathElement, any, any, any>;
  labels: d3.Selection<SVGGElement, Bin, null, undefined>;
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
    this.innerWidth = this.dOptions().width - this.dOptions().margin.left - this.dOptions().margin.right;
    this.innerHeight = this.dOptions().height - this.dOptions().margin.top - this.dOptions().margin.bottom;

    this.x = d3.scaleLinear()
      .domain([this.dOptions().minX, this.dOptions().maxX])
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

    d3.select(this.svgRef().nativeElement)
      .attr('viewBox', [0, 0, this.dOptions().width, this.dOptions().height])
      .attr('width', this.dOptions().width)
      .attr('height', this.dOptions().height);

    this.svg = d3.select(this.chartAreaRef().nativeElement)
      .attr('transform', `translate(${this.dOptions().margin.left},${this.dOptions().margin.top})`);

    const totalCount = d3.select(this.totalRef().nativeElement)
      .attr('transform', `translate(${this.dOptions().margin.left},${this.dOptions().margin.top + this.innerHeight})`);

    const midBottomMargin = this.dOptions().margin.bottom / 2 + 1;
    this.totalLine = totalCount.append('line')
      .attr('stroke', '#55637d')
      .attr('y1', midBottomMargin)
      .attr('y2', midBottomMargin);
    this.totalRect = totalCount.append('rect')
      .attr('fill', '#55637d')
      .attr('rx', 8)
      .attr('ry', 8);
    this.totalLabel = totalCount.style('font', '12px sans-serif').append('text')
      .attr('fill', 'white')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('y', midBottomMargin)
      .style('font-weight', 'bold');

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

    onVisible(this.svgRef().nativeElement, () => {
      this.updateTotal();
    })
  }

  draw() {
    this.drawDensityCurve();
    this.onSliderUpdate();
  }

  onSliderUpdate() {
    this.updateLinePosition();
    this.updateGradient();
    this.updateTotal();
  }

  updateTotal() {
    this.totalInRange = this.filters.facets.intact_miscore
      .map(facet => ({value: parseFloat(facet.value), valueCount: facet.valueCount}))
      .reduce((sum, facet) => (facet.value >= this.filters.currentMinMIScore && facet.value <= this.filters.currentMaxMIScore) ? sum + facet.valueCount : sum, 0);

    const middle = this.x((this.filters.currentMinMIScore + this.filters.currentMaxMIScore) / 2);
    const bbox = this.totalLabel
      .text(this.totalInRange === 0 ? '∅' : this.totalFormat.format(this.totalInRange))
      .attr('x', middle)
      .node().getBBox();
    this.totalRect
      .attr('x', bbox.x - this.dOptions().labelXMargin)
      .attr('y', bbox.y - this.dOptions().labelYMargin)
      .attr('width', bbox.width + this.dOptions().labelXMargin * 2)
      .attr('height', bbox.height + this.dOptions().labelYMargin * 2)
    this.totalLine
      .attr('x1', this.x(this.filters.currentMinMIScore))
      .attr('x2', this.x(this.filters.currentMaxMIScore));
  }

  private updateGradient() {
    const limits = Array.from({length: 11}, (v, k) => k / 10)
    insert(limits, this.filters.currentMinMIScore);
    insert(limits, this.filters.currentMaxMIScore);
    this.gradientColors = limits.flatMap(limit => [
      {stop: (limit - 0.0001) * 100 + '%', color: this.thresholdColorAt(limit - 0.0001)},
      {stop: (limit + 0.0001) * 100 + '%', color: this.thresholdColorAt(limit + 0.0001)},
    ])
  }

  private updateLinePosition() {
    d3.select(this.leftLineRef().nativeElement)
      .attr('x1', this.x(this.filters.currentMinMIScore) + this.dOptions().margin.left)
      .attr('x2', this.x(this.filters.currentMinMIScore) + this.dOptions().margin.left)
    d3.select(this.rightLineRef().nativeElement)
      .attr('x1', this.x(this.filters.currentMaxMIScore) + this.dOptions().margin.left)
      .attr('x2', this.x(this.filters.currentMaxMIScore) + this.dOptions().margin.left)
  }

  private drawDensityCurve() {
    const density: [number, number][] = [[-0.0001, 0], ...this.density(this.filters.facets.intact_miscore), [1.0001, 0]];
    const max = d3.max(density, d => d[1]);
    this.y.domain([0, max]);
    this.path.datum(density).attr('d', this.line(density))
  }

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
    if (this.totalInRange > 0) {
      this.filters.updateFilter(Filter.MI_SCORE)
    } else {
      this.filters.currentMinMIScore = this.initMin;
      this.filters.currentMaxMIScore = this.initMax;
      this.onSliderUpdate();
    }
  }

  onSliderUpdateStart() {
    this.initMin = this.filters.currentMinMIScore;
    this.initMax = this.filters.currentMaxMIScore;
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

const defaultHOptions: DensityOptions = {
  margin: {bottom: 16, left: 16, right: 16, top: 0},
  width: 800,
  height: 200,
  minX: 0,
  maxX: 1,
  labelXMargin: 4,
  labelYMargin: 0
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
    if (array[mid] < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
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
      if (entry.intersectionRatio > 0) {
        callback();
      }
    });
  }, options);

  observer.observe(element);
}
