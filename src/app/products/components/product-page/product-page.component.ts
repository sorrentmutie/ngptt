import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-product-page',
  providers: [ProductsService],
  template: `
  <app-product-list [products]="products" (productEmitter)="selectedProduct($event)"></app-product-list> 
    @if(products != null) {
      <p>Ci sono {{products.length}} prodotti</p>
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
export class ProductPageComponent implements OnInit{

   accessLevel: string = 'user';
   products: Product[] | undefined = undefined;

   constructor(private service: ProductsService) {     // this.products = this.service.loadProducts();
   }
  ngOnInit(): void {
    this.products = this.service.loadProducts();
     //this.service.loadProductsFromApi().subscribe(products => this.products = products);
  }
   selectedProduct (product: Product): void {
    console.log(product)
   }
}
