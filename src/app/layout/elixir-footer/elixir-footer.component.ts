import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ip-elixir-footer',
  templateUrl: './elixir-footer.component.html',
  styleUrls: ['./elixir-footer.component.css']
})
export class ElixirFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('elixir-footer').foundation();
  }

}
