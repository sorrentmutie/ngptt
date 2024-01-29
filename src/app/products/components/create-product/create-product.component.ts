import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  template: `
    <h1>
      create-product works!
    </h1>

    <button class="btn" (click)="vaiAWelcome()">Naviga</button>



  `,
  styles: ``
})
export class CreateProductComponent {

  constructor(private router: Router){

  }

  vaiAWelcome(){
    localStorage.setItem('ultimo-prodotto', 'frigorifero')
    this.router.navigate(['welcome'])
  }

}
