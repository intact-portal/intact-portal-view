import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit, SimpleChanges,
  ViewChild
} from '@angular/core';
import {NodeShape} from "../../../../shared/model/network-shapes/node-shape";

@Component({
  selector: 'ip-node-diagram',
  templateUrl: './node-diagram.component.html',
  styleUrls: ['./node-diagram.component.css']
})
export class NodeDiagramComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() shape: NodeShape = NodeShape.ELLIPSE;
  @Input() color: string = "#d6d6d6";
  @Input() borderColor: string = null;
  @Input() label: string = null;
  labelX: number = 2;
  viewBox: string = '0 0 100 100';
  NodeShape = NodeShape;
  @ViewChild("labelElt") labelElt: ElementRef;
  @ViewChild("shapeGroup") shapeGroupElt: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.init();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.init()
  }

  private init() {
    let shapeElt = this.shapeGroupElt.nativeElement.firstElementChild;
    shapeElt.setAttribute("fill", this.color);
    shapeElt.setAttribute("stroke-width", "5.088");
    shapeElt.setAttribute("stroke", this.borderColor ? this.borderColor : this.color);

    if (this.label) {
      let labelElt = this.labelElt.nativeElement;
      let box = labelElt.getBBox();
      console.log(box);
      if (box.width >= 100) {
        this.viewBox = `0 0 ${box.width + 4} 100`;
        this.labelX = 2;
      } else {
        this.labelX = 50 - box.width / 2;
      }
    }
  }

}
