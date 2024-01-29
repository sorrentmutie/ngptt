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
    this.subject$.next(true);
  }

  hideSpinner(){

    this.subject$.next(false);
  } 
}
