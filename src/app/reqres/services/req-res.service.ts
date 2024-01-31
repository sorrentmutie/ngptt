import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Observable, map } from "rxjs";
import { Person, ReqResResponse } from "../models/reqres";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: "root",
})
export class ReqResService {
  constructor(private http: HttpClient) {}

  private getReqResData(): Observable<ReqResResponse> {
    return this.http.get<ReqResResponse>(
      "https://reqres.in/api/users?page=2&delay=5"
    );
  }

  private getPeopleData(): Observable<Person[]> {
    return this.http
      .get<ReqResResponse>("https://reqres.in/api/users?page=2&delay=5")
      .pipe(map((r) => r.data));
  }

  peopleData$: Observable<Person[]> = this.getPeopleData();

  peopleData = toSignal(this.peopleData$, { initialValue: [] });
}
