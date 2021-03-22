import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpParams, HttpProgressEvent, HttpResponse} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs/Observable";
import {catchError, distinct, scan} from "rxjs/operators";
import {SAVER, Saver} from "./saver.provide";
import {Format} from "../../model/download/format.model";
import {GoogleAnalyticsService} from "../../../../shared/service/google-analytics/google-analytics.service";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";


const baseURL = environment.intact_portal_ws;

@Injectable()
export class DownloadService {
  // public readonly exportURL = `${baseURL}/graph/export`;
  public readonly exportURL = `http://172.22.68.46:8083/intact/ws/graph/export/interaction`;

  constructor(private http: HttpClient, @Inject(SAVER) private save: Saver, private reporter: GoogleAnalyticsService) {
  }

  public downloadByAc(interactionAc: string, format: Format): Observable<Download> {
    return this.http.get(
      `${this.exportURL}/${interactionAc}`,
      {
        reportProgress: true,
        params: {format: format.name},
        observe: 'events',
        responseType: 'blob'
      }).pipe(this.download(blob => this.save(blob, `${interactionAc}.${format.extension}`)));
  }

  public downloadByQuery(format: Format,
                         query: string,
                         batchSearch: boolean,
                         interactorSpeciesFilter: string[],
                         interactorTypeFilter: string[],
                         interactionDetectionMethodFilter: string[],
                         interactionTypeFilter: string[],
                         interactionHostOrganismFilter: string[],
                         isNegativeFilter: any,
                         minMiscore: any,
                         maxMiscore: any,
                         interSpecies: boolean): any {
    const name = query.length > 15 ? query.slice(0, 15) + '_etc' : query;
    const params = new HttpParams()
      .set('query', query)
      .set('format', format.name)
      .set('batchSearch', batchSearch.toString())
      .set('interactorSpeciesFilter', interactorSpeciesFilter.toString())
      .set('interactorTypeFilter', interactorTypeFilter.toString())
      .set('interactionDetectionMethodFilter', interactionDetectionMethodFilter.toString())
      .set('interactionTypeFilter', interactionTypeFilter.toString())
      .set('interactionHostOrganismFilter', interactionHostOrganismFilter.toString())
      .set('minMiscore', minMiscore.toString())
      .set('maxMiscore', maxMiscore.toString())
      .set('interSpecies', interSpecies.toString()) // TODO Noe change the name of the param in the web service the meaning is the opposite


    return this.http.post('http://172.22.68.46:8083/intact/ws/graph/export/interaction/list', params, {
      reportProgress: true,
      params: {format: format.name},
      observe: 'events',
      responseType: 'blob'
    })
      .pipe(this.download(blob => this.save(blob, `${name}.${format.extension}`)))
  }

  private download(saver?: (b: Blob) => void): (source: Observable<HttpEvent<Blob>>) => Observable<Download> {
    return (source: Observable<HttpEvent<Blob>>) =>
      source.pipe(
        catchError(err => {
          this.reporter.reportError(err);
          return ErrorObservable.create(err);
        }),
        scan((previous: Download, event: HttpEvent<Blob>): Download => {
            console.log(event);
            if (isHttpProgressEvent(event)) {
              return event.total ? {
                progress: Math.round((100 * event.loaded) / event.total),
                state: DownloadState.IN_PROGRESS,
                content: null
              } : previous;
            }
            if (isHttpResponse(event)) {
              if (saver && event.body) {
                saver(event.body)
              }
              return {
                progress: 100,
                state: DownloadState.DONE,
                content: event.body
              }
            }
            return previous
          },
          {state: DownloadState.PENDING, progress: 0, content: null}
        ),
        distinct()
      )
  }
}

// Source: https://nils-mehlhorn.de/posts/angular-file-download-progress
export interface Download {
  state: DownloadState;
  progress: number;
  content: Blob | null;
}

export enum DownloadState {
  PENDING,
  IN_PROGRESS,
  DONE
}

function isHttpResponse<T>(event: HttpEvent<T>): event is HttpResponse<T> {
  return event.type === HttpEventType.Response
}

function isHttpProgressEvent(event: HttpEvent<any>): event is HttpProgressEvent {
  return event.type === HttpEventType.DownloadProgress
    || event.type === HttpEventType.UploadProgress
}


