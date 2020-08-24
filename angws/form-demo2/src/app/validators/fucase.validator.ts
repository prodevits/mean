import { AbstractControl,  ValidationErrors } from "@angular/forms"


export function fucase(control: AbstractControl):ValidationErrors {
    const s=control.value;
    if(s && s.charAt(0)!=s.charAt(0).toUpperCase()){
    	return {'fucase':{'message':'First Char must be in Uppercase'}};
    }
    return null;
}
