import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RandomUsersResponse, Result } from './random-users';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor(private http: HttpClient) { }

  getData():Observable<RandomUsersResponse> {
    const x =
    this.http.get<RandomUsersResponse> ('https://randomuser.me/api?results=10');

    return x
  }

  getResults():Observable<Result[]> {
    return this.http.get<RandomUsersResponse> ('https://randomuser.me/api?results=10').pipe(
      map( response => response.results)
    );
  }

  getGender(gender: string):Observable<Result[]> {
    return this.http.get<RandomUsersResponse> ('https://randomuser.me/api?results=10').pipe(
      map( response => response.results.filter( x => x.gender === gender))
    );
  }

  getGenderPeople(n: number, gender: string):Observable<Result[]> {
    return this.http.get<RandomUsersResponse> ('https://randomuser.me/api?results='+ n).pipe(
      map( response => response.results.filter( x => x.gender === gender))

    );
  }

}
