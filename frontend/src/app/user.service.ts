import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  public login(credentials) {
    environment.userInfo = null;
    environment.userInfo = credentials;
    return this.httpClient.post(`${environment.apiUrl}/api/authenticationRouter/login`, credentials).pipe(retry(3), catchError(this.handleErrorLogin));
  }

  public grabUserData(token) {
    let userInfo = environment.userInfo;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'authorization': token,
      })
    }
    return this.httpClient.post(`${environment.apiUrl}/api/userRouter/email`, userInfo, httpOptions).pipe(retry(0), catchError(this.handleError));
  }

  handleErrorLogin(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Username or password is incorrect.`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}

