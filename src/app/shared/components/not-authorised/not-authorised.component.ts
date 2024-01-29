import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-authorised',
  template: `
    <p class="alert alert-danger">
      non sei autorizzato ad accedere a questa parte
    </p>

    <button class="btn btn-success" (click)="vaiAlLogIn()">Vai al login</button>
  `,
  styles: ``
})
export class NotAuthorisedComponent {

  constructor(private router : Router) {

  }

  vaiAlLogIn(){
    this.router.navigate(['welcome']);
  }


}
