import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-menu></app-menu>
    <h1>Welcome to {{title}}!</h1>
    <app-product-page></app-product-page>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'ngptt2';
}
