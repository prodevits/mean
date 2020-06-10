import { Validators, AbstractControl, ValidationErrors, NG_VALIDATORS, Validator } from "@angular/forms";
import { Input, Directive } from '@angular/core';
import { log } from 'util';


@Directive({
    selector:'[textmatch]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting:TextMatchValidator,
        multi:true
    }]
})
export class TextMatchValidator implements Validator{
    @Input('textmatch') otherControlName:string;
    validate(control:AbstractControl): ValidationErrors{  
  //      console.log(this.otherControlName);

      //  const otherControl=control.parent.get(this.otherControlName);
      const otherControl=control.root.get(this.otherControlName);
    
        if(otherControl){
            if(otherControl.errors){
                delete otherControl.errors.textmatch;
                if(Object.keys(otherControl.errors).length==0){
                    otherControl.setErrors(null)   ;    
                }
            }

            if(control.value!=otherControl.value)
                return {'textmatch':true};           
        }         
        
        return null;
    }
}