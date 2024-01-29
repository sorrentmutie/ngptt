import { Component } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
     <div *ngIf="showSpinner" class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span> 
      </div>
  `,
  styles: ``
})
export class SpinnerComponent {
   showSpinner = false;

   constructor(private spinnerService: SpinnerService) {
    spinnerService.spinner$.subscribe((value) => {
      this.showSpinner = value;
    })
   }
}
