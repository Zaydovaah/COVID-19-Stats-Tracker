import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Data } from '@angular/router';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { GlobalData } from '../_models/globalData';
import { SnTimeline } from '../_models/SnTimeline';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getDataSn(): Observable<Data[]> {
    return this.http.get<Data[]>(`${environment.apiUrl}`)
        .pipe(
          tap(data => console.log('fetched data')),
          catchError (this.handleError('getData', []))
        );
  }

  getDataIta(): Observable<Data[]> {
    return this.http.get<Data[]>(`${environment.apiUrlItaly}`)
        .pipe(
          tap(data => console.log('fetched data')),
          catchError (this.handleError('getData', []))
        );
  }

  getDataGlobal(): Observable<GlobalData[]> {
    return this.http.get<GlobalData[]>(`${environment.apiUrlGlobal}`)
        .pipe(
          tap(data => console.log('fetched global data')),
          catchError (this.handleError('getDataGlobal', []))
        );
  }

  getGlobalTimeline(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiGlobalTimelineUrl}`)
        .pipe(
          tap(data => console.log('fetched global timeline')),
          catchError (this.handleError('getGlobalTimeline', []))
        );
  }

  // getSnTimeline(): Observable<SnTimeline[]> {
  //   return this.http.get<SnTimeline[]>(`${environment.apiSnTimelineUrl}`)
  //       .pipe(
  //         tap(data => console.log('fetched sn timeline')),
  //         catchError (this.handleError('getSnTimeline', []))
  //       );
  // }
}
