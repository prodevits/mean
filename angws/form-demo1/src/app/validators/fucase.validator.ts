import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validators, ValidationErrors } from '@angular/forms';
import { ValidationError } from 'json-schema';

@Directive({
  selector: '[fucase]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:FucaseValidator,
    multi:true
}]
})
export class FucaseValidator implements Validators {
  validate(control: AbstractControl) 	:ValidationErrors
  {
  const s=control.value;
  if(s && s.charAt(0)!=s.charAt(0).toUpperCase()){
  return {'uname':{'message':'First Char must be in Uppercase'}};
  }
  return null;
  }}
  