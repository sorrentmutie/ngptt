import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  template: `
    @for(product of products; track product.id){
      <div class="card" style="width: 18rem;">
         <img class="card-img-top" src="{{product.pictureUrl}}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{product.name}}</h5>

          <p>{{product | productAsString}}</p>

          <p class="card-text">{{product.description}}</p>
          <p>{{product.price | currency: 'EUR' }} </p>
          <p>{{product.releaseDate | date: 'dd/MM/yyyy'}}</p>
        </div>
      </div>
    }
    @empty {

    }
  `,
  styles: ``
})
export class ProductListComponent {
   @Input() products: Product[] | undefined = undefined;  
}
