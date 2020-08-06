import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class TeamsService {
    constructor(private httpClient: HttpClient) {}

    public addTeam(teamData) {
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': environment.tokenData,
            }),
        };
        return this.httpClient.post(`${environment.apiUrl}/api/teamRouter/`, teamData, httpOptions).pipe(retry(0), catchError(this.handleError));
    }
    
    public findTeamsBySeasonId(id) {
        let httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'authorization': environment.tokenData,
            }),
        };
        return this.httpClient.post(`${environment.apiUrl}/api/teamRouter/season`, id, httpOptions).pipe(retry(0), catchError(this.handleError));
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