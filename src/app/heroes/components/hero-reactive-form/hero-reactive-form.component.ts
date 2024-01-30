import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { map } from 'rxjs';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-reactive-form',
  template: `
    <p>
      hero-reactive-form works!
    </p>
    <!-- <input type="text" [formControl]="myControl">

    {{myControl.value}}
    {{myObservable | async}}
    <button (click)="change()">Cambia Valore</button> -->

    <form [formGroup]="heroForm" (ngSubmit)="submit()">

      <div class="form-group">
        <label for="name">Nome</label>
        <input type="text" class="form-control" id="name" formControlName="name">
      </div>

      <div class="form-group">
        <label for="power">Super Potere</label>
        <select type="text" class="form-control" id="power" formControlName="power">
          <option *ngFor="let p of powers" [value]="p">{{p}}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="ego">Alter-ego</label>
        <input type="text" class="form-control" id="ego" formControlName="alterEgo">
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>


    </form>



  `,
  styles: ``
})
export class HeroReactiveFormComponent {
    // myControl = new FormControl('valore iniziale');
    // myObservable =  this.myControl.valueChanges.pipe(
    //   map(value => value?.toUpperCase())
    // );

    // change(){
    //   this.myControl.setValue('nuovo valore');
    //   console.log(this.myControl);
    // }

   heroForm = this.fb.group(
    {
      name: ['Batman'],
      power: ['Intelligenza'],
      alterEgo: ['Bruce Wayne']
    });

    powers = ['Forza', 'Veloità', 'Intelligenza', 'Invisibilità'];

   constructor(private fb: FormBuilder){
     
   }

   submit(){
      console.log(this.heroForm);
      const name= this.heroForm.get('name')?.value;

      if(name){
        const hero = new Hero(1, name,'','');
     }
   }

}
