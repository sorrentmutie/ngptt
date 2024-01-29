import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Subscription } from 'rxjs';
import { Customer } from '../customer';

@Component({
  selector: 'app-customers-page',
  template: `
    <p>
      customers-page works!
    </p>
    <button class="btn btn-info" (click)="startData()">Start</button>
    <button class="btn btn-info" (click)="stopData()">Stop</button>
    <ul>
      <li *ngIf="customers$ | async as customer">
       {{customer.name}} - {{customer.city}}
    </li>
    </ul>
  `,
  styles: ``
})
export class CustomersPageComponent {
 
    customers$ = this.service.customers$;

    constructor(private service: CustomersService){}


  startData(){
      this.service.start();
  }

  stopData(){
    this.service.stop();
  }

}
