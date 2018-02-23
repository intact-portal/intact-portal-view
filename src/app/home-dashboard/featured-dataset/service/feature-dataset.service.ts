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
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/xml'})
        .append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS')
        .append('Access-Control-Allow-Origin', '*')
        .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method')
    };

    const url = `${intactDotmURL}`;
    return this.http.get('/proxy', {responseType: 'text'})
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
