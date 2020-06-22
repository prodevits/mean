import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms"

export function range(v1:number,v2:number):ValidatorFn{
    return (control:AbstractControl):ValidationErrors=>{     
        if(v1 && v2){
            const v= parseFloat(control.value);
            if(v<v1 ||  v>v2){
                return {'range':{min:v1,max:v2}};
            }
        }
        return null;
    };
}