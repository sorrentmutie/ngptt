import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  template: `
    @for(product of products; track product.id){
      <p>{{product.name}}</p>
    }
  `,
  styles: ``
})
export class ProductListComponent {
   @Input() products: Product[] | undefined = undefined;  
}
