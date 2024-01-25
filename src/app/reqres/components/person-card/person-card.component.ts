import { Component, Input } from '@angular/core';
import { Person } from '../../models/reqres';

@Component({
  selector: 'app-person-card',
  template: `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="{{person?.avatar}}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{person?.first_name}} {{person?.last_name}}</h5>
        <p>{{person?.email}}</p>
      </div>
    </div>
  `,
  styles: ``
})
export class PersonCardComponent {
   @Input() person: Person | undefined = undefined;
}
