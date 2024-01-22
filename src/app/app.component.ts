import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-product-page></app-product-page>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ngptt2';
}
