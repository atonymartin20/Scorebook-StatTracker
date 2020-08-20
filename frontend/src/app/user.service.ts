import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private httpClient: HttpClient) {}

    public login(credentials) {
        environment.userInfo = null;
        environment.userInfo = credentials;
        return this.httpClient.post(`${environment.apiUrl}/api/authenticationRouter/login`, credentials).pipe(retry(1), catchError(this.handleError));
    }

    public register(credentials) {
        environment.userInfo = null;
        environment.userInfo = credentials;
        return this.httpClient.post(`${environment.apiUrl}/api/authenticationRouter/register`, credentials).pipe(retry(1), catchError(this.handleError));
    }

    public testEmail(credentials) {
        return this.httpClient.post(`${environment.apiUrl}/api/authenticationRouter/email`, credentials).pipe(retry(0), catchError(this.handleError));
    }

    public testUsername(credentials) {
        return this.httpClient.post(`${environment.apiUrl}/api/authenticationRouter/username`, credentials).pipe(retry(0), catchError(this.handleError));
    }

    public deleteUser(credentials) {
        return this.httpClient.delete(`${environment.apiUrl}/api/userRouter/${credentials}`).pipe(retry(0), catchError(this.handleError));
    }

    public grabUserData(token) {
        let userInfo = environment.userInfo;
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': token,
            }),
        };
        return this.httpClient.post(`${environment.apiUrl}/api/userRouter/email`, userInfo, httpOptions).pipe(retry(0), catchError(this.handleError));
    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        console.log(error);
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.error}`;
        }
        return throwError(errorMessage);
    }
}