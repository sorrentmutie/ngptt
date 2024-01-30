import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../../products/models/product';
import { catchError, from, map, of } from 'rxjs';

@Component({
  selector: 'app-footer',
  template: `
    <p>
      footer works!
    </p>
 


  `,
  styles: ``
})
export class FooterComponent {

  srcArray = from([1, 'a2', 3, 4, 5])
  .pipe(
    map( x => {
      let n = x as number * 3;
      if(Number.isNaN(n)) {
        throw new Error('NaN');
      }
      return n;

    }),
    catchError( err => {
      console.log('Sono in catchError: ', err);
      return of(-1);
    })
  );

  mySubscription = this.srcArray.subscribe(x => console.log(x));


}
