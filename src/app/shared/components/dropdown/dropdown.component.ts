import {Component, OnInit, TemplateRef, input} from '@angular/core';

@Component({
    selector: 'ip-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css'],
    standalone: false
})
export class DropdownComponent implements OnInit {

  readonly disabled = input<boolean>(undefined);
  readonly title = input<string>(undefined);
  readonly template = input<TemplateRef<any>>(undefined);

  constructor() {
  }

  ngOnInit(): void {
  }

  looseFocus($event: MouseEvent) {
    ($event.target as HTMLElement).blur();
  }
}
