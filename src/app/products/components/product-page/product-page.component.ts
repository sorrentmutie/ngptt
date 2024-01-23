import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-product-page',
  providers: [ProductsService],
  template: `
    @if(products != null) {
      <p>Ci sono {{products.length}} prodotti</p>
      <app-product-list [products]="products" (productEmitter)="selectedProduct($event)"></app-product-list> 
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
   //service = new ProductsService();

   constructor(private service: ProductsService) {
     this.products = this.service.loadProducts();
   }
   selectedProduct (product: Product): void {
    console.log(product)
   }
}
