import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../../products/models/product';

@Component({
  selector: 'app-footer',
  template: `
    <p>
      footer works!
    </p>
    <input #myInput type="text" (keyup)="onKey(myInput.value)">
  `,
  styles: ``
})
export class FooterComponent {

   onKey(value: string){
   // const myInput = event.target as HTMLInputElement;
   // console.log(myInput.value);
   console.log(value);
   }


}
