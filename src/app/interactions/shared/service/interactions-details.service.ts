import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InteractionDetails} from '../model/interaction-details/interaction-details.model';
import {ParticipantDetails} from '../model/interaction-details/participant-details.model';

@Injectable()
export class InteractionsDetailsService {

  constructor(private http: HttpClient) { }

  getInteractionDetails(interactionAc: string): Observable<InteractionDetails> {
    return this.http.get(`/detailsService/interaction/details/${interactionAc}`)
      .catch(this.handleError);
  }

  getParticipantsDetails(interactionAc: string): Observable<ParticipantDetails> {
    return this.http.get(`/detailsService/participants/details/${interactionAc}`)
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
