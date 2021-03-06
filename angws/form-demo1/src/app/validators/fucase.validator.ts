import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator } from '@angular/forms';


@Directive({
  selector: '[fucase]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:FucaseValidator,
    multi:true
}]
})
export class FucaseValidator implements Validator {

  validate(control: AbstractControl) 	:ValidationErrors
  {
  const s=control.value;
  if(s && s.charAt(0)!=s.charAt(0).toUpperCase()){
  return {'fucase':{'message':'First Char must be in Uppercase'}};
  }
  return null;
  }}
  