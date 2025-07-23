import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'ip-elixir-footer',
    templateUrl: './elixir-footer.component.html',
    styleUrls: ['./elixir-footer.component.css'],
    standalone: false
})
export class ElixirFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('elixir-footer').foundation();
  }

}
