import { Component } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Component({
  selector: 'app-learn-observables',
  template: `
    <p>
      learn-observables works!
    </p>
  `,
  styles: ``
})
export class LearnObservablesComponent {
     constructor(){
         const myObservable$  = of(1,2,3,4,5,6,7,8,9,10);
         const myObserver = {
             next: (x: number) => console.log('Observer got a next value: ' + x),
             error: (err: Error) => console.error('Observer got an error: ' + err),
             complete: () => console.log('Observer got a complete notification')
         };
         myObservable$.pipe(
           map(x => x * 3),
           filter(x => x % 2 === 0)
           )
         .subscribe(myObserver);
     }
}
