
import {throwError as observableThrowError, Observable} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


import {Dataset} from '../model/dataset.model';
import {GoogleAnalyticsService} from 'ngx-google-analytics';


@Injectable()
export class FeatureDatasetService {

  constructor(private http: HttpClient, private reporter: GoogleAnalyticsService) {
  }

  public readonly API_URL = 'https://raw.githubusercontent.com/intact-portal/intact-portal-feature-datasets/release-july-2023/feature-datasets.json';

  getFeaturedDataset(): Observable< Dataset[] > {
    return this.http.get<{ datasets: Dataset[] }>(this.API_URL, {responseType: 'json'}).pipe(
      map(value => value.datasets),
      catchError(this.handleError))
  }

  private handleError(err: HttpErrorResponse | any): Observable<any> {
    this.reporter.exception()
    if (err.error instanceof Error) {
      return observableThrowError(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }


}
