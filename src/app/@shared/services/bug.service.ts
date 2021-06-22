import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Bug } from '../models/bug';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  private apiServer = "https://crudcrud.com/api/e284509878394469be1cf12400325ad4";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(bug): Observable<Bug> {
    return this.httpClient.post<Bug>(this.apiServer + '/bug/', JSON.stringify(bug), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id): Observable<Bug> {
    return this.httpClient.get<Bug>(this.apiServer + '/bug/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Bug[]> {
    return this.httpClient.get<Bug[]>(this.apiServer + '/bug/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, bug): Observable<Bug> {
    return this.httpClient.put<Bug>(this.apiServer + '/bug/' + id, JSON.stringify(bug), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id){
    return this.httpClient.delete<Bug>(this.apiServer + '/bug/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}