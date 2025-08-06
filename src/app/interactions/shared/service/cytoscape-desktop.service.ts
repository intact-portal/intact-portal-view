import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {SearchService} from '../../../home-dashboard/search/service/search.service';
import {FilterService} from './filter.service';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/internal/Observable';
import {catchError, concatMap, map, startWith, switchMap, takeWhile, tap, toArray} from 'rxjs/operators';

import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

import {from, interval, of, ReplaySubject, Subject} from 'rxjs';
import {NetworkViewService} from './network-view.service';

const host = environment.cytoscape_host

export class CytoscapeRequirement<T extends any = any> {
  private _loading: boolean = true;
  private _passing: boolean = false;
  public readonly name: SafeHtml;
  public readonly action: SafeHtml;

  constructor(
    name: string,
    action: string,
    public readonly url: string,
    public readonly checker: (response: HttpResponse<T>) => boolean,
    sanitizer: DomSanitizer
  ) {
    this.name = sanitizer.bypassSecurityTrustHtml(name);
    this.action = sanitizer.bypassSecurityTrustHtml(action);
  }


  get loading(): boolean {
    return this._loading;
  }

  get passing(): boolean {
    return this._passing;
  }


  check(http: HttpClient): Observable<this> {
    return http.get<T>(this.url, {observe: 'response'}).pipe(
      map(this.checker),
      catchError(error => of(false)),
      tap(() => this._loading = false),
      tap((passing) => this._passing = passing),
      map(() => this),
    )
  }

}


@Injectable({
  providedIn: 'root'
})
export class CytoscapeDesktopService {
  refreshRate = 2_000;

  minVersion: [number, number, number] = [1, 1, 0]

  requirements: CytoscapeRequirement[] = [
    new CytoscapeRequirement<{ apiVersion: string, cytoscapeVersion: string }>(
      'Checking Cytoscape Desktop opened',
      '<b><a href="https://cytoscape.org/download.html" target="_blank">install</a> and launch</b> Cytoscape desktop',
      `${host}/version`,
      (response) => response.ok,
      this.sanitizer
    ),
    new CytoscapeRequirement<{ bundleName: string, bundleSymbolicName: string, bundleVersion: string, bundleState: number }[]>(
      'Checking IntAct App installed',
      '<a href="https://apps.cytoscape.org/apps/intactapp" target="_blank">install</a> IntAct App',
      `${host}/apps`,
      (response) => response.body.some(app => app.bundleName === 'IntAct App' && app.bundleState === 32),
      this.sanitizer
    ),
    new CytoscapeRequirement<{ bundleName: string, bundleSymbolicName: string, bundleVersion: string, bundleState: number }[]>(
      'Checking required IntAct App version installed',
      '<a href="https://apps.cytoscape.org/apps/intactapp" target="_blank">update</a> IntAct App',
      `${host}/apps`,
      (response) => response.body.some(app => {
        if (app.bundleName === 'IntAct App') {
          const version = app.bundleVersion.split('.').map(parseInt);
          console.log(this.minVersion, version, version.every((digit, i) => this.minVersion[i] <= digit))
        }
        return app.bundleName === 'IntAct App' &&
          app.bundleVersion.split('.').map(d => parseFloat(d)).every((digit, i) => this.minVersion[i] <= digit)
      }),
      this.sanitizer
    )
  ]


  constructor(private http: HttpClient,
              private search: SearchService,
              private filters: FilterService,
              private sanitizer: DomSanitizer,
              private view: NetworkViewService) {

    this.start$.pipe(
        tap(() => console.log('Starting checks', this.allRequirementsPassed)),
        switchMap(() => from(this.requirements).pipe(
            concatMap(requirement =>
                    interval(this.refreshRate).pipe(
                        tap(() => console.log(requirement.name)),
                        startWith(0),
                        switchMap(() => requirement.check(this.http)),
                        tap(r => this.checkSubject$.next(r)),
                        takeWhile(_ => this.checksRunning),
                        takeWhile(r => !r.passing, true)
                    )
            ),
            toArray(),
            tap((x) => {
              if (x.every(r => r.passing)) {
                this.allRequirementsPassed = true;
                console.log('✅ All requirements passed!', x.map(r => r.passing));
                this.loadInCytoscapeDesktop();
              }
            }),
            )
        ),
        ).subscribe();
  }

  private start$ = new Subject<void>(); // trigger manually
  private checkSubject$ = new ReplaySubject<CytoscapeRequirement>(1); // emits to async pipe
  public check$ = this.checkSubject$.asObservable();
  public cytoscapeLoadedEvent = new EventEmitter<void>();
  allRequirementsPassed = false;
  checksRunning = false;

  public startCheck() {
    console.log('startCheck');
    this.allRequirementsPassed = false;
    this.cytoscapeLoading = false;
    this.cytoscapeLoaded = false;
    this.checksRunning = true;
    this.start$.next();
  }

  public stopCheck() {
    console.log('stopCheck');
    this.checksRunning = false;
  }

  cytoscapeLoading: boolean = false;
  cytoscapeLoaded: boolean = false;

  loadInCytoscapeDesktop() {
    if (!this.allRequirementsPassed) {
      throw Error('Not all requirements passed');
    }

    if (this.cytoscapeLoading || this.cytoscapeLoaded) {
      return; // Avoid loading twice the same network
    }

    this.cytoscapeLoading = true;
    if (this.search.isBatchSearch) {
      this.http.post<void>(`${host}/commands/intact/query`, {
        seedTerms: this.search.query,
        maxInteractorsPerTerm: '1',
        asynchronous: true,
        // TODO: use toParams() when all fields use ids
        ...this.filters.toCytoscapeParams(),
        ...this.view.toParams(),
      }).subscribe(() => {
        this.cytoscapeLoading = false;
        this.cytoscapeLoaded = true;
        this.cytoscapeLoadedEvent.emit();
      });
    } else {
      this.http.post<void>(`${host}/commands/intact/advancedQuery`, {
        query: this.search.query,
        testField: 'some value',
        asynchronous: true,
        // TODO: use toParams() when all fields use ids
        ...this.filters.toCytoscapeParams(),
        ...this.view.toParams(),
      }).subscribe(() => {
        this.cytoscapeLoading = false;
        this.cytoscapeLoaded = true;
        this.cytoscapeLoadedEvent.emit();
      });
    }
  }
}
