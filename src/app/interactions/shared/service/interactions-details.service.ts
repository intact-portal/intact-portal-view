import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InteractionDetails} from '../model/interaction-details/interaction-details.model';

@Injectable()
export class InteractionsDetailsService {

  constructor(private http: HttpClient) { }

  getDetailsByInteractionAc(interactionAc: string): Observable<InteractionDetails> {

    return this.http.get(`/detailsService/interaction/details/${interactionAc}`)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse | any): Observable<any> {
    if (err.error instanceof Error) {
      return Observable.throw(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }
}
