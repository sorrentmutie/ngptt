import { Component } from '@angular/core';
import { PlaceholderService } from '../../services/placeholder.service';

@Component({
  selector: 'app-placeholder-page',
  template: `
    <p>
      placeholder-page works!
    </p>

    @for(user of service.users(); track user.id) {
      <div class="card" style="width: 18rem;">
        <div class="card-body">
           <h5 class="card-title">{{user.name}}</h5>
          <p class="card-text">{{user.email}}</p>
          <button (click)="showPosts(user.id)" class="btn btn-primary">Show Posts</button>
        </div>
      </div>
    }
   {{service.selectedUserId()}}

   <ul>
    @for(post of service.userPosts(); track post.id) {
      <li>{{post.title}}</li>
    }
  </ul>



  `,
  styles: ``
})
export class PlaceholderPageComponent {
    constructor(public service: PlaceholderService){

    }

    showPosts(id: number){  
      this.service.setSelectedUserId(id);
    }
}
