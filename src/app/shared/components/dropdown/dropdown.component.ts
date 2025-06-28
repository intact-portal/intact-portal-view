import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
    selector: 'ip-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css'],
    standalone: false
})
export class DropdownComponent implements OnInit {

  @Input()
  disabled: boolean;
  @Input()
  title: string;
  @Input()
  template: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

  looseFocus($event: MouseEvent) {
    ($event.target as HTMLElement).blur();
  }
}
