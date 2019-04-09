import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InteractionDetails} from '../model/interaction-details/interaction-details.model';
import {ParticipantDetails} from '../model/interaction-details/participant-details.model';

@Injectable()
export class InteractionsDetailsService {

  private _totalElements = 0;
  private _page: number = 1;
  private _pageSize: number = 20;

  constructor(private http: HttpClient) { }

  getInteractionDetails(interactionAc: string): Observable<InteractionDetails> {
    return this.http.get(`/detailsService/interaction/details/${interactionAc}`)
      .catch(this.handleError);
  }

  getParticipantsDetails(interactionAc: string,
                         currentPageIndex = 1,
                         pageSize = 20): Observable<ParticipantDetails> {

    this.page = currentPageIndex;

    currentPageIndex = currentPageIndex - 1;

    const params = new HttpParams()
      .set('page', currentPageIndex.toString())
      .set('pageSize', pageSize.toString());

    const options = interactionAc ? {params: params} : {};

    return this.http.get(`/detailsService/participants/details/${interactionAc}`, options)
      .catch(this.handleError);
  }

  // TODO: getFeaturesDetails
  // getFeaturesDetails(interactionAc: string,
  //                    currentPageIndex = 1,
  //                    pageSize = 20): Observable<FeatureDetails> {
  //
  //
  // }

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
