import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-page',
  template: `
    @if(products != null) {
      <p>Ci sono {{products.length}} prodotti</p>
      <app-product-list [products]="products"></app-product-list> 
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
        { id: 1, name: 'iPhone X', description: 'Apple iPhone', pictureUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-2017?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1515606437811', price: 999, releaseDate: new Date(2017, 10, 3) },
        { id: 2, name: 'Galaxy S9', description: 'Samsung Galaxy', pictureUrl: 'https://images.samsung.com/is/image/samsung/p5/uk/smartphones/galaxy-s9/buy/1_Galaxy_S9_Lockup_Purple?$PD_GALLERY_L_JPG$', price: 899, releaseDate: new Date(2018, 2, 16)}
      ]
   }
}
