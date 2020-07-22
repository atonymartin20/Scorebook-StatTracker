import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userInfo = {};

  constructor(private http: HttpClient) { }

  // login = (credentials) => {
  //   console.log(credentials)
  //   console.log(`${environment.apiUrl}/api/authenticationRouter/login`)
  //   return this.http.post(`${environment.apiUrl}/api/authenticationRouter/login`, credentials).pipe(
  //     catchError(this.handleError()))
  // }
  
  login(credentials): Observable<any> {
    console.log(credentials)
    console.log(`${environment.apiUrl}/api/authenticationRouter/login`)
    return this.http.post(`${environment.apiUrl}/api/authenticationRouter/login`, credentials).pipe(
      catchError(this.handleError('login')))
  }

  private handleError<T>(operation = 'operation', result? :T) {
    return (error: any): Observable<T> => {
      console.log(error);
      // return of(result as T)
      return(error)
    }
  }
}

