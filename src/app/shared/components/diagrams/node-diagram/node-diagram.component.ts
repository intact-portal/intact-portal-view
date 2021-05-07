import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {NodeShape} from '../../../../interactions/shared/model/network-shapes/node-shape';

@Component({
  selector: 'ip-node-diagram',
  templateUrl: './node-diagram.component.html',
  styleUrls: ['./node-diagram.component.css']
})
export class NodeDiagramComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() shape: NodeShape;
  @Input() color: string;
  @Input() borderColor: string;
  @Input() label: string;
  @Input() height: string;
  @ViewChild('labelElt') labelElt: ElementRef;
  @ViewChild('svg') svgElt: ElementRef;
  @ViewChild('shapeGroup') shapeGroupElt: ElementRef;
  NodeShape = NodeShape;

  constructor() {
  }

  ngOnInit() {
    if (!this.shape) this.shape = NodeShape.ELLIPSE;
    if (!this.color) this.color = '#d6d6d6';
    if (!this.height) this.height = '18pt'
  }

  ngAfterViewInit(): void {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.init();
  }

  private init() {
    const shapeElt = this.shapeGroupElt.nativeElement.firstElementChild;
    if (shapeElt) {
      shapeElt.setAttribute('fill', this.color);
      shapeElt.setAttribute('stroke-width', '6');
      shapeElt.setAttribute('stroke', this.borderColor ? this.borderColor : this.color);

      if (this.label) {
        const labelElt = this.labelElt.nativeElement;
        const box = labelElt.getBBox();
        if (box.width >= 100) {
          $(this.svgElt.nativeElement).attr('viewBox', `0 0 ${box.width + 5} 100`);
          if (this.shape !== NodeShape.ELLIPSE) shapeElt.setAttribute('transform', `translate(${box.width / 2 - 49})`)
        }
      }
    }
  }
}
