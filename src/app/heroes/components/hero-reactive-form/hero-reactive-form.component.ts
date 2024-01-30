import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Hero } from '../../models/hero';
import { MyValidator } from '../../../shared/validators/my-validator';

@Component({
  selector: 'app-hero-reactive-form',
  template: `
    <form [formGroup]="heroForm" (ngSubmit)="submit()">
      <div class="form-group">
        <label for="name">Nome</label>
        <input required type="text" class="form-control" id="name" formControlName="name">
    
       <div *ngIf="nome?.invalid && (nome?.dirty || nome?.touched)"
       class="alert alert-danger">
         
          <div *ngIf="nome && nome.errors && nome.errors['required']">
            Il nome è obbligatorio
          </div>

          <div *ngIf="nome && nome.errors && nome.errors['minlength']">
            La lunghezza minima è 5
          </div>

          <div *ngIf="nome && nome.errors && nome.errors['myValidator']">
           Il nome deve cominciare con s
          </div>
         
      </div>
    
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

      <button [disabled]="nome?.invalid" type="submit" class="btn btn-primary">Submit</button>


      {{formValid}}

    </form>



  `,
  styles: ``
})
export class HeroReactiveFormComponent {
   heroForm = this.fb.group(
    {
      name: ['Batman', [Validators.required, Validators.minLength(5), MyValidator]],
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


   get formValid() { return this.heroForm.valid;}
   get nome() { return this.heroForm.get('name');}

}
