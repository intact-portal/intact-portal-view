import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InteractionDetails} from '../model/interaction-details/interaction-details.model';
import {environment} from '../../../../environments/environment';

const baseURL = environment.intact_portal_graph_ws;

@Injectable()
export class InteractionsDetailsService {

  private _totalElements = 0;
  private _page = 1;
  private _pageSize = 20;

  constructor(private http: HttpClient) { }

  getInteractionDetails(interactionAc: string): Observable<InteractionDetails> {
    return this.http.get<InteractionDetails>(`${baseURL}/graph/interaction/details/${interactionAc}`)
      .catch(this.handleError);
  }

  getInteractionViewer(interactionAc: string): Observable<any> {
    return this.http.get(`${baseURL}/graph/interaction/export/${interactionAc}`)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse | any): Observable<any> {
    if (err.error instanceof Error) {
      return Observable.throw(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }


  get page(): number {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(value: number) {
    this._pageSize = value;
  }

  get totalElements(): number {
    return this._totalElements;
  }

  set totalElements(value: number) {
    this._totalElements = value;
  }
}
