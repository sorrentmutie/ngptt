import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ng-container *ngIf="showMenu; else noMenu">
      <app-menu [menuList]='menuList'><p firstClass>test</p><p secondClass>testSecond</p></app-menu>
    </ng-container>
    <ng-template #noMenu>
      <p> No Menu </p>
    </ng-template>
    <button (click)="toggleMenu()">Toggle Menu</button>
    <button (click)="addMenuItem()">Add Menu item</button>
    <h1>Welcome to {{title}}!</h1>
    <app-product-page></app-product-page>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  showMenu = true;
  title = 'ngptt2';
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
