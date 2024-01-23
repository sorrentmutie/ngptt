import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-page',
  template: `
    @if(products != null) {
      <p>Ci sono {{products.length}} prodotti</p>
      <app-product-list [products]="products" (productEmitter)="selectedProduct($event)"  ></app-product-list> 
    } @else {
      <p>Non ci sono prodotti</p>
    }

    @switch(accessLevel) {
      @case('user') {
        <p>Utente</p>
      }
      @case('admin') {
        <p>Admin</p>
      }
      @default {
        <p>Accesso negato</p>
      }
    }


  `,
  styles: ``
})
export class ProductPageComponent {

   accessLevel: string = 'user';


   products: Product[] | undefined = undefined;

   constructor() {
     this.products = this.loadProducts();
   }

   loadProducts(): Product[] {
      return [
        { id: 1, name: 'iPhone X', description: 'Apple iPhone',
         pictureUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-1024.png', price: 999, releaseDate: new Date(2017, 10, 3) },
        { id: 2, name: 'Galaxy S9', description: 'Samsung Galaxy', pictureUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-1024.png', price: 899, releaseDate: new Date(2018, 2, 16)}
      ]
   }

   selectedProduct(product: Product): void {
     console.log(product);
   }

}
