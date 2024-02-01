import { AfterViewInit, Component, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MyComponent } from '../../../my/my.component';

@Component({
  selector: 'app-welcome',
  template: `
    <p>
      welcome works!
    </p>
    <button class="btn btn-info" (click)="navigate()">Naviga</button>
    <button class="btn btn-info" (click)="login()">Login</button>
    <button (click)="creaComponente()">Crea My</button>
    <ng-container #cont>
    </ng-container>


  `,
  styles: ``
})
export class WelcomeComponent implements AfterViewInit{
    isLogged = false;
    @ViewChild('cont', {static: false, read: ViewContainerRef}) 
          cont: ViewContainerRef | any;
    constructor(private router: Router, private authService: AuthService){

    }
  ngAfterViewInit(): void {
   
  }

creaComponente(){
  this.cont.createComponent(MyComponent);
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
