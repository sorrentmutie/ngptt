import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private subject$  = new Subject<Customer>();
  customers$ = this.subject$.asObservable();
  myInterval: unknown;

  constructor() { }

  start(){
    this.myInterval = setInterval( ()  => {
        this.subject$.next({
          name: 'Customer ' + Math.random(),
          city: 'City ' + Math.random()
        });
    }  , 1000)
  }

  stop(){
    clearInterval(this.myInterval as number);
  }


}
