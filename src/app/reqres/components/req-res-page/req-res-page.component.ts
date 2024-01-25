import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReqResService } from '../../services/req-res.service';
// import { Subscription } from 'rxjs';
// import { Person, ReqResResponse } from '../../models/reqres';

@Component({
  selector: 'app-req-res-page',
  template: `
     <div *ngFor="let p of people$ | async" >
        <app-person-card [person]="p"></app-person-card>
     </div>
  `,
  styles: ``
})
export class ReqResPageComponent {

   // subscription: Subscription | undefined = undefined;
   // data: ReqResResponse | undefined = undefined;
   // people: Person[] | undefined = undefined; 

    people$ = this.service.getPeopleData();

    constructor(private service: ReqResService){
    }
    // ngOnDestroy(): void {
    // this.subscription?.unsubscribe();
    // }
    // ngOnInit(): void {
    //     // this.subscription = this.service.getReqResData()
    //     //   .subscribe( data => this.data = data);

    //     this.subscription = this.service.getPeopleData()
    //     .subscribe( people => this.people = people);

    // }
}
