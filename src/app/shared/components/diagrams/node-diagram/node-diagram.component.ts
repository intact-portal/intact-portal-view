import {AfterViewInit, Component, ElementRef, input, OnChanges, OnInit, SimpleChanges, viewChild} from '@angular/core';
import {NodeShape} from '../../../../interactions/shared/model/network-shapes/node-shape';

@Component({
    selector: 'ip-node-diagram',
    templateUrl: './node-diagram.component.html',
    styleUrls: ['./node-diagram.component.css'],
    standalone: false
})
export class NodeDiagramComponent implements AfterViewInit, OnChanges {
  readonly shape = input<NodeShape>(NodeShape.ELLIPSE);
  readonly color = input<string>('#d6d6d6');
  readonly borderColor = input<string>('18pt');
  readonly label = input<string>(undefined);
  readonly height = input<string>(undefined);
  readonly labelElt = viewChild<ElementRef>('labelElt');
  readonly svgElt = viewChild<ElementRef>('svg');
  readonly shapeGroupElt = viewChild<ElementRef>('shapeGroup');
  NodeShape = NodeShape;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.init();
  }

  private init() {
    const shapeElt = this.shapeGroupElt().nativeElement.firstElementChild;
    if (shapeElt) {
      const color = this.color();
      shapeElt.setAttribute('fill', color);
      shapeElt.setAttribute('stroke-width', '6');
      const borderColor = this.borderColor();
      shapeElt.setAttribute('stroke', borderColor ? borderColor : color);

      if (this.label()) {
        const labelElt = this.labelElt().nativeElement;
        const box = labelElt.getBBox();
        if (box.width >= 100) {
          $(this.svgElt().nativeElement).attr('viewBox', `0 0 ${box.width + 5} 100`);
          if (this.shape() !== NodeShape.ELLIPSE) shapeElt.setAttribute('transform', `translate(${box.width / 2 - 49})`)
        }
      }
    }
  }
}
