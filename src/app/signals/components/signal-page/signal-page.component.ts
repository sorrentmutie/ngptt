import { Component, Signal, computed, signal } from '@angular/core';
import { SignalPageService } from '../../services/signal-page.service';

@Component({
  selector: 'app-signal-page',
  template: `
    <p>
      signal-page works! 
    </p>
    <!-- <button (click)="change()">change</button>
    <button (click)="update()">update</button>
    @if(doubleCount) {
      {{doubleCount()}}
    } -->
   <p>Numero totale di prodotti: {{service.productsList().length}}</p>
   <p>Totale prezzo prodotti: {{ sum
      }}
  </p>
  <button (click)="addProduct()">Aggiungi prodotto</button>

  <ul>
    <li *ngFor="let prod of service.productsList()">
      {{prod.name}} - {{prod.price}}
    </li>
  </ul>


   
  `,
  styles: ``
})
export class SignalPageComponent {

  sum = 0;
  constructor(public service: SignalPageService) { 
      this.updateSum();
  }

  private updateSum(){
    this.sum = this.service.productsList().reduce((acc, prod) => acc + prod.price, 0); 
  }

  addProduct(){ 
     this.service.addProduct({
      id: 4,
      name: 'product 4',
      price: 400,
      description: 'description 4',
      pictureUrl: 'https://picsum.photos/200',
      releaseDate: new Date(),
     });
     this.updateSum();
  }
}

  //  doubleCount: Signal<number> | undefined = undefined;
  //    count = signal(0);
  //    doubleCount = computed( () => this.count() * 2);
  //  constructor(){
  //   console.log(this.count());
  //  }
  //  change(){
  //    this.count.set(100);
  //  }
  //  update(){
  //   this.count.update( v => v + 3);
  //   this.doubleCount = computed( () => this.count() * 2);
  // }
//}
