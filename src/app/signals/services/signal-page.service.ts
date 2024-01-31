import { Injectable, signal } from '@angular/core';
import { Product } from '../../products/models/product';

@Injectable({
  providedIn: 'root'
})
export class SignalPageService {

 private products: Product[] = [
    {
      id: 1,
      name: 'product 1',
      price: 100,
      description: 'description 1',
      pictureUrl: 'https://picsum.photos/200',
      releaseDate: new Date(),
    },
    {
      id: 2,
      name: 'product 2',
      price: 200,
      description: 'description 2',
      pictureUrl: 'https://picsum.photos/200',
      releaseDate: new Date(),

    },
    {
      id: 3,
      name: 'product 3',
      price: 300,
      description: 'description 3',
      pictureUrl: 'https://picsum.photos/200',
      releaseDate: new Date(),

    },
 ]
  productsList = signal(this.products);

  addProduct(product: Product){
    this.productsList.update( products => {
        products.push(product);
        return products;
    });
  };
}
