import {Observable, throwError as observableThrowError} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {InteractionDetails} from '../model/interaction-details/interaction-details.model';
import {environment} from '../../../../environments/environment';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {catchError} from 'rxjs/operators';
import {GoogleAnalyticsService} from 'ngx-google-analytics';

const baseURL = environment.intact_portal_graph_ws;

@Injectable()
export class InteractionsDetailsService {
  public readonly interactionDetailsURL = `${baseURL}/graph/interaction/details/`;
  public readonly interactionViewerURL = `${baseURL}/graph/export/interaction/`;


  constructor(private http: HttpClient, private reporter: GoogleAnalyticsService) {
  }

  getInteractionDetails(interactionAc: string): Observable<InteractionDetails | HttpErrorResponse> {
    return this.http.get<InteractionDetails>(`${this.interactionDetailsURL}${interactionAc}`)
      .pipe(
        catchError(this.handleError),
      );
  }

  getInteractionViewer(interactionAc: string): Observable<any> {
    return this.http.get(`${this.interactionViewerURL}${interactionAc}`, {params: {format: 'miJSON'}})
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(err: HttpErrorResponse | any): ErrorObservable<HttpErrorResponse> {
    this.reporter.exception(err);
    if (err.error instanceof Error) {
      return observableThrowError(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }
}
