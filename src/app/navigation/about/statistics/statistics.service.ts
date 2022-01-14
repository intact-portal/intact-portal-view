import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  public getReleasesStats(): Observable<ReleaseStatPoint[]> {
      return this.http.get<ReleaseStatPoint<string>[]>('./assets/data-files/panel2.json')
        .pipe(map((data: any[]) => data.map(point => {
            point.date = new Date(point.date)
            return point;
        }
        )));

  }
}

export interface ReleaseStatPoint<T = Date> {
  date: T;
  experiments: number;
  publications: number;
}
