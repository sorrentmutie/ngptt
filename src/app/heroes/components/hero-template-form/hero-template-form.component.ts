import { Component } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-template-form',
  templateUrl: './hero-template-form.component.html',
  styles: ``
})
export class HeroTemplateFormComponent {
    hero = new Hero(1, 'Batman', 'Forza', 'Bruce Wayne');
    powers = ['Forza', 'Intelligenza', 'Invisibilità', 'Velocità'];

    submit(){
       
    }

    reset(){
      this.hero = new Hero(1, '', '', '');
    }
}
