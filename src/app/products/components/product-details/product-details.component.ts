import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-product-details',
  template: `
    <p>
      product-details works! {{productId}}
      {{product?.name}}
    </p>
  `,
  styles: ``
})
export class ProductDetailsComponent implements OnInit {
    productId = 0;
    product: Product | undefined = undefined;
    constructor(private route: ActivatedRoute, private service: ProductsService){
        const id =  this.route.snapshot.paramMap.get('id');
        if(id){
            this.productId = parseInt(id);
        }
    }
  ngOnInit(): void {
    this.product = this.service.getProductById(this.productId);
  }
}
