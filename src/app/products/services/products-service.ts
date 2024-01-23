import { Product } from "../models/product";

export class ProductsService {

    private randomNumber = 0;

    constructor() {
        this.randomNumber = Math.random();
     }


    getRandomNumber() : number {
        return this.randomNumber;
     }


    loadProducts(): Product[] {
        return [
          { id: 1, name: 'iPhone X', description: 'Apple iPhone',
           pictureUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-1024.png', price: 999, releaseDate: new Date(2017, 10, 3) },
          { id: 2, name: 'Galaxy S9', description: 'Samsung Galaxy', pictureUrl: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-1024.png', price: 899, releaseDate: new Date(2018, 2, 16)}
        ]
     }
}
