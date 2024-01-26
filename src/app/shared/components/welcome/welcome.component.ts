import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-welcome',
  template: `
    <p>
      welcome works!
    </p>
    <button class="btn btn-info" (click)="navigate()">Naviga</button>
    <button class="btn btn-info" (click)="login()">Login</button>
    {{isLogged}}
  `,
  styles: ``
})
export class WelcomeComponent {
    isLogged = false;
    constructor(private router: Router, private authService: AuthService){

    }
    navigate(){
        this.router.navigate(['random']);
    }

    login(){
      this.authService.login().subscribe(
        isLogged => {
         this.isLogged = isLogged;
        }
      );
    }
}
