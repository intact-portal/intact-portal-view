import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

const intactDotmURL = environment.intact_dotm_url;

@Injectable()
export class FeatureDatasetService {

  constructor(private http: HttpClient) {
  }

  getFeaturedDataset(): Observable<any> {
    //TODO Replace when in wwwdev production
    // return this.http.get(`${intactDotmURL}`, {responseType: 'text'})
    //   .catch(this.handleError);
    return this.http.get('assets/data/dotm-1.1.xml', {responseType: 'text'})
      .catch(this.handleError)
  }

  private handleError(err: HttpErrorResponse | any): Observable<any> {
    if (err.error instanceof Error) {
      return Observable.throw(err);
    } else {
      console.error(err.message ? err.message : err.toString());
    }
  }
}
