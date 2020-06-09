import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validators, ValidationErrors, Validator } from '@angular/forms';


@Directive({
  selector: '[minvalue]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:MinValueValidator,
    multi:true
}]
})
export class MinValueValidator implements Validator {
    @Input('minvalue') minvalue:number;
  validate(control: AbstractControl) 	:ValidationErrors
  {
  const s=control.value;
  if(s){
      const v=parseFloat(s);
      if(v<this.minvalue)
        return {'minvalue':{'minimum':this.minvalue}};
  }
  return null;
  }}
  