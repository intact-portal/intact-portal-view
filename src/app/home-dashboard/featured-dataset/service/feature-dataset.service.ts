import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {GoogleAnalyticsService} from '../../../shared/service/google-analytics/google-analytics.service';
import {Dataset} from '../model/dataset.model';


@Injectable()
export class FeatureDatasetService {

  constructor(private http: HttpClient, private reporter: GoogleAnalyticsService) {
  }

  public readonly API_URL = 'https://raw.githubusercontent.com/intact-portal/intact-portal-feature-datasets/main/feature-datasets.json';

  getFeaturedDataset(): Observable<{ datasets: Dataset[] }> {
    return this.http.get<{ datasets: Dataset[] }>(this.API_URL, {responseType: 'json'})
      .catch(this.handleError)
  }

  private handleError(err: HttpErrorResponse | any): Observable<any> {
    this.reporter.reportError(err);
    if (err.error instanceof Error) {
      return Observable.throw(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }


}
