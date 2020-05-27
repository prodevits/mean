import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive, Input } from "@angular/core";

@Directive({
selector:'[confirmPassValidator]',
providers:[{
    provide: NG_VALIDATORS,
    useExisting: ConfirmPassValidatorDirective,
    multi: true
}]
})
export class ConfirmPassValidatorDirective implements Validator{
 @Input()   confirmPassValidator:string;
validate(confirmPassControl: AbstractControl):{[key:string]:any}
{
    console.log("-------"+this.confirmPassValidator);
    
 const passwordControl= confirmPassControl.parent.get(this.confirmPassValidator);
//  console.log('Passord='+passwordControl.value);
//  console.log('Confirm PAssword='+confirmPassControl.value);
 
 
 if(confirmPassControl && confirmPassControl.value!==passwordControl.value){
     return {'notEqual':true};
 } 


 return null;
}
}