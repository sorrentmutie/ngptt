import { Component } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-random-page',
  template: `
    <div *ngFor="let result of results$ | async">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="{{result.picture.medium}}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{result.name.first}} {{result.name.last}}</h5>
          <p>{{result.email}}</p>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class RandomPageComponent {

  constructor(private service: RandomService){}

  // results$ = this.service.getResults()

  results$ = this.service.getGenderPeople(20, 'male')

}
