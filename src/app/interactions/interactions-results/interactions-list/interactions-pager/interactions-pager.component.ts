import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'iv-interactions-pager',
  templateUrl: './interactions-pager.component.html',
  styleUrls: ['./interactions-pager.component.css']
})
export class InteractionsPagerComponent implements OnInit {

  @Input()
  private page: number;

  @Input()
  private totalPages: number;

  @Output()
  private changePage: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  next() {
    this.changePage.emit(this.page + 1);
  }

  prev() {
    this.changePage.emit(this.page - 1);
  }

  public getPage(pageIndex: number) {
    this.changePage.emit(pageIndex);
  }
}
