import { AbstractControl } from "@angular/forms";

export function MyValidator(control: AbstractControl){

   if(!control.value.startsWith('s')){
    return {myValidator: true}
   }

    return null;
}