import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Person, ReqResResponse } from '../models/reqres';

@Injectable({
  providedIn: 'root'
})
export class ReqResService {
  constructor(private http: HttpClient ) { }


  getReqResData(): Observable<ReqResResponse>{
     return  this.http.get<ReqResResponse>('https://reqres.in/api/users?page=2&delay=5');
  }

  getPeopleData(): Observable<Person[]> {
   return this.http.get<ReqResResponse>('https://reqres.in/api/users?page=2&delay=5')
      .pipe(map( r => r.data));
    ;
  }



}
