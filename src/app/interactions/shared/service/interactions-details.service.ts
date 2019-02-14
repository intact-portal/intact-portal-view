import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InteractionDetails} from '../model/interaction-details/interaction-details.model';
import {Experiment} from '../model/interaction-details/experiment.model';

@Injectable()
export class InteractionsDetailsService {

  constructor(private http: HttpClient) { }

  getInteractionDetails(interactionAc: string): Observable<InteractionDetails> {
    return this.http.get(`/detailsService/interaction/details/${interactionAc}`)
      .catch(this.handleError);
  }

  getExperimentPublicationDetails(interactionAc: string): Observable<Experiment> {
    return this.http.get(`/detailsService/interaction/experiment/${interactionAc}`)
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
