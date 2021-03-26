import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {InteractionDetails} from '../model/interaction-details/interaction-details.model';
import {environment} from '../../../../environments/environment';
import {GoogleAnalyticsService} from "../../../shared/service/google-analytics/google-analytics.service";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";

const baseURL = environment.intact_portal_ws;

@Injectable()
export class InteractionsDetailsService {

  private _totalElements = 0;
  private _page = 1;
  private _pageSize = 20;
  public readonly interactionDetailsURL = `${baseURL}/graph/interaction/details/`;
  public readonly interactionViewerURL = `${baseURL}/graph/export/interaction/`;


  constructor(private http: HttpClient, private reporter: GoogleAnalyticsService) { }

  getInteractionDetails(interactionAc: string): Observable<InteractionDetails> {
    return this.http.get<InteractionDetails>(`${this.interactionDetailsURL}${interactionAc}`)
      .catch(this.handleError);
  }

  getInteractionViewer(interactionAc: string): Observable<any> {
    return this.http.get(`${this.interactionViewerURL}${interactionAc}`, {params:{format:'miJSON'}})
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse | any): ErrorObservable {
    this.reporter.reportError(err);
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
