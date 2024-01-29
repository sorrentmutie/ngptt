import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private subject$ = new Subject<boolean>();
  spinner$ = this.subject$.asObservable();
  constructor() { }
  showSpinner(){
    console.log("Show spinner");
    this.subject$.next(true);
  }

  hideSpinner(){
    console.log("Hide spinner");
    this.subject$.next(false);
  } 
}
