import { Component } from '@angular/core';
import { Product } from './products/models/product';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  template: `
    <ng-container *ngIf="showMenu; else noMenu">
      <div class="container-fluid">
        <app-menu [menuList]='menuList'><p firstClass>test</p><p secondClass>testSecond</p></app-menu>
      </div>
    </ng-container>
    <ng-template #noMenu>
      <p> No Menu </p>
    </ng-template>


    <div class="container">
      <app-spinner/>
      <router-outlet></router-outlet>      
    </div>


  `,
  styles: []
})
export class AppComponent {

  title = 'ngptt2';

  dataFooter = 'dataFooter'
  numeroFooter = 5

  prodottoFooter: Product = 
    { id: 1, name: 'iPhone X', description: 'Apple iPhone',
    pictureUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-2017?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1515606437811', price: 999, releaseDate: new Date(2017, 10, 3) }


    cambiaProdotto() {
      this.prodottoFooter.id = 1000
      this.prodottoFooter = {...this.prodottoFooter}
    }
  showMenu = true;
  menuList = [
    { label: 'home', link: 'home'},
    { label: 'contatti', link: 'contatti'},
    { label: 'chi siamo', link: 'chi-siamo'}
  ]

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  addMenuItem() {
    this.menuList.push( { label: 'additional', link: 'additional'});
    //this.menuList = [...this.menuList]
  }
}
