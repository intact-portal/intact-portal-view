import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class SearchService {

  private _query: string;

  constructor(private router: Router) {
  }

  search(query: string) {
    this._query = query;
    this.router.navigate(['search'], {queryParams: {query}});
  }

  get query(): string {
    return this._query;
  }

  set query(value: string) {
    this._query = value;
  }
}
