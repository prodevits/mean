import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';
import { ValidationError } from 'json-schema';

export class AppValidators{
static firstucase(control: AbstractControl):ValidationErrors {
        const s=control.value;
        if(s && s.charAt(0)!=s.charAt(0).toUpperCase()){
        	return {'firstucase':{'message':'First Char must be in Uppercase'}};
        }
        return null;
    }

static range(v1:number,v2:number):ValidatorFn{
    return (control:AbstractControl):ValidationErrors=>{
        if(v1 && v2){
            const v=parseFloat(control.value);
            if(v<v1 || v>v2){
                return {'range':{min:v1,max:v2,actual:v}}
            }
        }
        return null;
    }




}



static  textmatch(f1:string,f2:string):ValidatorFn{
    return (formGroup:FormGroup):ValidationErrors=>{

        const control1=formGroup.get(f1);
        const control2=formGroup.get(f2);
        if(control1.value!=control2.value){
            return {'textmatch':{message:'Not Matched'}}
        }
        return null;
    }
    
}

}