import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getListMovies(): Observable<any> {
    const url = "https://localhost:5001/movies/get-list";
    return this.http.get(url).pipe(
      tap(() => { }),
      catchError(err => {
        return this.handleErr(err);
      })
    )
  };

  getDetailMovie(id: any): Observable<any> {
    const url = `https://localhost:5001/movies/get/${id}`;
    return this.http.get(url).pipe(
      tap(() => { }),
      catchError(err => {
        return this.handleErr(err);
      })
    )
  };

  register(user: any): Observable<any> {
    const url = "http://localhost:5000/users/register";
    return this.http.post(url, user).pipe(
      tap(() => { }),
      catchError(err => {
        return this.handleErr(err);
      })
    )
  };

  login(user: any): Observable<any> {
    const url = "http://localhost:5000/users/login";
    return this.http.post(url, user).pipe(
      tap(() => { }),
      catchError(err => {
        return this.handleErr(err);
      })
    )
  };

  handleErr(err: any) {
    switch (err.status) {
      case "401":
        break;
      case "402":
        break;
      case "403":
        break;
      case 500:
        alert(err.error);
        break
      default:
        break;
    }
    return throwError(err);
  }
}
