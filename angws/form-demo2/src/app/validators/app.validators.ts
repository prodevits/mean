import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ValidationError } from 'json-schema';

export class AppValidators {
    static textmatch(control1:string,control2:string):ValidatorFn{  
        return (formGroup:FormGroup):ValidationErrors=>{
          
        const c1=formGroup.get(control1);
        const c2=formGroup.get(control2);
        
        if(c1.value!=c2.value)
                return {'textmatch':true};           
            
        return null;
    }    
}


static fucase(control: AbstractControl):ValidationErrors
    {
    const s=control.value;
    if(s && s.charAt(0)!=s.charAt(0).toUpperCase()){
    return {'fucase':{'message':'First Char must be in Uppercase'}};
    }
    return null;
    }  

}