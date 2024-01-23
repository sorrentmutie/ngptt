import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../../products/models/product';

@Component({
  selector: 'app-footer',
  template: `
    <p>
      footer works!
    </p>

  <p style="color: blue;">{{foo}}</p>
  <p style="color: black;">{{data}}</p>
  <p style="color: red;">{{foo2}}</p>

  <p style="color: purple;"> {{numero2}}</p>


  `,
  styles: ``
})
export class FooterComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{

  foo: string = 'stringa vuota'
  foo2:  string = ''
  numero2: number = 0


  @Input() data: string = "sono un'input"
  @Input() numero: number | undefined = undefined
  @Input() prodotto: Product | undefined = undefined

  constructor() {
    this.foo = this.foo + ' sono nel costruttore'

  }
  ngAfterViewChecked(): void {
   // this.foo = this.foo + ' sono nel ngAfterViewChecked';

  }


  ngAfterViewInit(): void {
 //   this.foo = this.foo + ' sono nel AfterViewInit';

  }


  ngAfterContentChecked(): void {
   // this.foo = this.foo + ' sono nel AfterContentCHECKED';
    
  }


  ngAfterContentInit(): void {
  //  this.foo = this.foo + ' sono nel AfterContentInit';
  }


  ngDoCheck(): void {
// this.foo = this.foo + ' sono nel DoCheck'
    
  }

  ngOnChanges(changes: SimpleChanges): void {
  //  this.foo = this.foo + " sono nell'ngOnChanges"
    
   //   console.log(changes) 
    // const x: string = changes['data'].currentValue
    // this.foo2 = x

    // if(x.length > 20){
    //   this.foo2 = ''
    // }

    // if(changes && changes['numero']) {
    //   const newNumber: number = changes['numero'].currentValue
    //   this.numero2 = newNumber * 100;
    // }

    const y = changes['prodotto'].currentValue as Product
    console.log(y.id)

  }

  ngOnInit(): void {
    this.foo = this.foo + " sono nell'onInit" 
  }

}
