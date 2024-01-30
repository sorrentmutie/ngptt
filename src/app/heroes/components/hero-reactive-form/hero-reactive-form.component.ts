import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { Hero } from '../../models/hero';
import { MyValidator } from '../../../shared/validators/my-validator';

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
        <label for="scale">Livello Potere</label>
        <select class="form-control" id="scale" formControlName="scale">
          <option [value]="null">Seleziona un valore</option>
          <option *ngFor="let s of scala" [value]="s">{{s}}</option>
        </select>
        <div *ngIf="livello?.invalid" class="alert alert-danger">Scegli un livello di potere</div>
      </div>

      <div class="form-group">
        <label for="ego">Alter-ego</label>
        <input type="text" class="form-control" id="ego" formControlName="alterEgo">
      </div>

      <button [disabled]="!formValid" type="submit" class="btn btn-primary">Submit</button>


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
      name: ['', [Validators.required, Validators.minLength(5)]],
      power: ['', [Validators.required]],
      scale: ['-1'],
      alterEgo: ['']
    });

    powers = ['Forza', 'Velocità', 'Intelligenza', 'Invisibilità'];
    scala: number[] =  [];


   constructor(private fb: FormBuilder){

    this.heroForm.get('power')?.valueChanges.subscribe((x)=> {
      if(x){
      this.scala = this.showScale(x)
      this.heroForm.get('scale')?.addValidators(Validators.min(0))
      this.heroForm.get('scale')?.setValue('-1')
      this.heroForm.updateValueAndValidity()
      }})
      
   }

   submit(){
      console.log(this.heroForm);
      const name= this.heroForm.get('name')?.value;

      if(name){
        const hero = new Hero(1, name,'','');
     }
   }

   private showScale(power: string): number[] {
      switch (power){
        case 'Forza':
          return [1, 2, 3, 4, 5]
        case 'Intelligenza':
          return [1, 2, 3]
        case 'Velocità':
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        case 'Invisibilità':
          return [1, 2]
        default: 
          return[]
      }
   }


   get formValid() { return this.heroForm.valid;}
   get nome() { return this.heroForm.get('name')}
   get livello() { return this.heroForm.get('scale')}

}
