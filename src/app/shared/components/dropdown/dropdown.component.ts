import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ip-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input()
  disabled: boolean;
  @Input()
  title: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
