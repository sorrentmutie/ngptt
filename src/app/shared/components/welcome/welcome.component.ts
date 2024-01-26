import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  template: `
    <p>
      welcome works!
    </p>
    <button class="btn btn-info" (click)="navigate()">Naviga</button>
  `,
  styles: ``
})
export class WelcomeComponent {
    constructor(private router: Router){

    }
    navigate(){
        this.router.navigate(['random']);
    }
}
